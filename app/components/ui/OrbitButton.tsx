import Link from "next/link";
import type { ComponentProps } from "react";

type OrbitButtonProps = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string;
};

export default function OrbitButton({
  className = "",
  children,
  ...props
}: OrbitButtonProps) {
  return (
    <Link
      {...props}
      className={`group relative inline-flex overflow-hidden rounded-full p-[1.5px] shadow-lg shadow-black/10 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${className}`}
    >
      {/* the travelling light */}
      <span
        aria-hidden="true"
        className="absolute inset-[-1000%] animate-orbit bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#c9a66b_40%,#f3e3c0_50%,#c9a66b_60%,transparent_100%)] motion-reduce:animate-none motion-reduce:bg-none motion-reduce:bg-clinic-sand/70"
      />
      {/* the button face */}
      <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-clinic-teal-dark px-8 py-3.5 font-medium text-white">
        {children}
      </span>
    </Link>
  );
}