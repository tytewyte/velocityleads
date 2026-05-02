import Image from "next/image";
import DividerTop from "../../public/assets/divider-top.svg";

export function SectionDivider() {
  return (
    <div className="relative h-24 w-full overflow-hidden opacity-80">
      <Image
        src={DividerTop}
        alt="Energy section divider"
        fill
        className="object-cover object-center"
      />
    </div>
  );
}
