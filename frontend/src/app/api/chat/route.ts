import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { COSMIC_GUIDE_PROMPT, GUIDE_CONFIGURATION } from "@/lib/cosmicGuide";

type MessageParam = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized. Only Warriors can access the Cosmic Guide." },
        { status: 401 }
      );
    }

    // Parse request
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid message format" },
        { status: 400 }
      );
    }

    // Check OpenAI API key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OPENAI_API_KEY not configured");
      return NextResponse.json(
        { error: "AI service not configured" },
        { status: 500 }
      );
    }

    // Format messages for OpenAI
    const formattedMessages: MessageParam[] = messages.map((msg: any) => ({
      role: msg.role === "agent" ? "assistant" : msg.role,
      content: msg.content,
    }));

    // Keep only last N messages for context
    const recentMessages = formattedMessages.slice(
      -GUIDE_CONFIGURATION.maxHistoryMessages
    );

    // Call OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: GUIDE_CONFIGURATION.model,
        messages: [
          {
            role: "system",
            content: COSMIC_GUIDE_PROMPT,
          },
          ...recentMessages,
        ],
        temperature: GUIDE_CONFIGURATION.temperature,
        max_tokens: GUIDE_CONFIGURATION.maxTokens,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI API error:", error);
      return NextResponse.json(
        { error: "Failed to reach the Cosmic Guide" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const message = data.choices[0]?.message?.content;

    if (!message) {
      return NextResponse.json(
        { error: "No response from the guide" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "An error occurred in the cosmic transmission" },
      { status: 500 }
    );
  }
}
