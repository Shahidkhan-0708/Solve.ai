import React from 'react';

/**
 * Watermelon UI Hero Slide Component
 * Based on ui.watermelon.sh hero animation specifications (hero-11, hero-25).
 * Implements a staggered entrance sequence with spring physics, vertical slide, and blur dissolve.
 */

export interface WatermelonHeroSlideProps {
  title?: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  children?: React.ReactNode;
}

export function WatermelonHeroSlide({
  title = "What can I help you with?",
  subtitle = "Ask a question, explore an idea, or add something you'd like help understanding.",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  children,
}: WatermelonHeroSlideProps) {
  return (
    <div className={`watermelon-hero-enter text-center max-w-xl mx-auto space-y-space-xs mb-space-xl ${className}`}>
      {title && (
        <h1 className={`font-headline-lg text-headline-lg text-primary tracking-tight font-semibold watermelon-hero-heading ${titleClassName}`}>
          {title}
        </h1>
      )}
      {subtitle && (
        <p className={`font-body-lg text-body-lg text-secondary watermelon-hero-subtitle ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

export default WatermelonHeroSlide;
