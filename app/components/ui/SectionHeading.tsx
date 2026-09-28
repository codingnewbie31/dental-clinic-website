import Underline from "@/app/components/ui/Underline";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  as?: "h1" | "h2";
  variant?: "hero" | "sub";
  size?: "default" | "large";
  underlineSize?: "sm" | "lg";
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  as = "h2",
  variant = "hero",
  size = "default",
  underlineSize = "sm",
}: SectionHeadingProps) {
  const Heading = as;
  const isHero = variant === "hero";

  const headingSizeClasses = isHero
    ? size === "large"
      ? "text-4xl md:text-5xl lg:text-6xl"
      : "text-4xl md:text-5xl"
    : "text-3xl md:text-4xl";

  return (
    <>
      {isHero && (
        <div className="flex justify-center mb-4">
          <div className="w-12 h-1 bg-clinic-sand rounded-full" />
        </div>
      )}

      <p className="text-sm font-medium uppercase tracking-widest text-clinic-teal mb-3">
        {eyebrow}
      </p>

      <Heading
        className={`font-display ${headingSizeClasses} font-semibold text-clinic-charcoal${
          !isHero ? " mb-6" : ""
        }`}
      >
        {title}
        {highlight && (
          <Underline size={underlineSize} className="ml-3">
            {highlight}
          </Underline>
        )}
      </Heading>

      {description && (
        <p className="mt-4 text-lg text-clinic-charcoal/70 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </>
  );
}