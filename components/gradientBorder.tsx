// src/components/GradientBorder.tsx
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface GradientBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function GradientBorder({
  children,
  className,
  ...props
}: GradientBorderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gradientRef.current) return;
    gsap.to(gradientRef.current, {
      rotation: 360,
      duration: 8,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });
  }, []);

  return (
    // p-px creates a 1px visible border; gradient fills the wrapper (inset-0)
    <div
      ref={wrapperRef}
      className={cn("relative rounded-lg p-px overflow-hidden", className)}
      {...props}
    >
      {/* animated gradient layer (fills wrapper) */}
      <div
        ref={gradientRef}
        className="absolute inset-0 z-0 pointer-events-none will-change-transform rounded-[inherit] blur-sm"
        style={{
          // using inline style to keep the gradient exact and avoid complex tailwind escapes
          background:
            "conic-gradient(#2174F1, #E04444, #9747FF, #2174F1)",
          // slight scale so edges blend better (optional)
          transformOrigin: "50% 50%",
        }}
      />

      {/* content sits above the gradient (z-10) */}
      <div className="relative z-10 rounded-[calc(0.75rem-1px)]">{children}</div>
    </div>
  );
}
