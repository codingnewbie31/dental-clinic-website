import Link from "next/link";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "ghost-ring" | "glass";
  size?: "sm" | "lg";
  lift?: boolean;
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<string, string> = {
  primary: "bg-clinic-teal text-white hover:bg-clinic-teal-dark",
  outline: "bg-white border border-clinic-teal text-clinic-teal hover:bg-clinic-teal hover:text-white",
  ghost: "text-clinic-teal border border-clinic-teal/30 hover:bg-clinic-teal/5",
  "ghost-ring": "text-clinic-teal ring-1 ring-inset ring-clinic-teal/30 hover:bg-clinic-teal/5 hover:ring-clinic-teal",
  glass: "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "lg",
  lift = false,
  className = "",
  children,
}: ButtonProps) {
  const sizeClasses = size === "sm" ? "px-6 py-3" : "px-8 py-3.5";
  const liftClasses = lift ? "shadow-sm hover:shadow-md hover:scale-105" : "";

  const classes = `inline-flex items-center gap-2 rounded-full font-medium transition-all ${sizeClasses} ${variantClasses[variant]} ${liftClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}