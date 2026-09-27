type PillProps = {
  children: React.ReactNode;
  size?: "sm" | "md";
  tone?: "neutral" | "teal";
};

export default function Pill({
  children,
  size = "sm",
  tone = "neutral",
}: PillProps) {
  const sizeClasses = size === "md" ? "text-sm px-3 py-1" : "text-xs px-2 py-0.5";
  const toneClasses = tone === "teal" ? "text-clinic-teal" : "text-clinic-charcoal/60";

  return (
    <span
      className={`${sizeClasses} ${toneClasses} bg-clinic-teal/5 rounded-full border border-clinic-teal/10`}
    >
      {children}
    </span>
  );
}