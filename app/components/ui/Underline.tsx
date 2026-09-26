type UnderlineProps = {
  children: React.ReactNode;
  size?: "sm" | "lg";
  color?: string;
  className?: string;
};

export default function Underline({
  children,
  size = "sm",
  color = "text-clinic-sand",
  className = "",
}: UnderlineProps) {
  const viewBox = size === "lg" ? "0 0 200 20" : "0 0 120 20";
  const path = size === "lg" ? "M2 14 Q 100 -4 198 14" : "M2 14 Q 60 -4 118 14";

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        viewBox={viewBox}
        className={`absolute -bottom-2 left-0 h-3 w-full ${color}`}
        preserveAspectRatio="none"
      >
        <path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}