"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

export default function ImageWithFallback({
  alt,
  className = "",
  ...props
}: ImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    const fallbackClasses = props.fill
      ? "absolute inset-0 flex items-center justify-center bg-clinic-sage/30 text-clinic-charcoal/40"
      : `flex items-center justify-center bg-clinic-sage/30 text-clinic-charcoal/40 ${className}`;

    return (
      <div className={fallbackClasses}>
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M14 10h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}