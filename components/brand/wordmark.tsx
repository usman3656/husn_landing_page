import BrandMark from "./mark";

type Props = {
  size?: "sm" | "md";
  className?: string;
};

export default function Wordmark({ size = "md", className }: Props) {
  const textClass = size === "sm" ? "text-sm" : "text-base";
  const markSize = size === "sm" ? 18 : 22;
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? "text-ink"}`}>
      <BrandMark size={markSize} className="text-accent" />
      <span className={`font-bold tracking-tightish ${textClass}`}>Husn</span>
    </span>
  );
}
