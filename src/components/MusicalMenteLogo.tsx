import React from 'react';

export type MusicalMenteVariant = 'header' | 'hero' | 'splash' | 'card' | 'badge' | 'light';

interface MusicalMenteLogoProps {
  className?: string;
  variant?: MusicalMenteVariant;
}

/**
 * Visual brand name "MusicalMente" with distinct dual colors:
 * - "Musical" in the 1st color (harmonious warm golden-amber)
 * - "Mente" in the 2nd color (harmonious deep royal indigo / high contrast)
 * Preserves the exact font, weight, styling, and positioning of its container.
 */
export const MusicalMenteLogo: React.FC<MusicalMenteLogoProps> = ({
  className = '',
  variant = 'header',
}) => {
  let musicalColor = 'text-amber-500';
  let menteColor = 'text-indigo-950';

  if (variant === 'hero') {
    // Over dark hero background
    musicalColor = 'text-amber-400';
    menteColor = 'text-white';
  } else if (variant === 'splash') {
    // Over vibrant amber splash gradient
    musicalColor = 'text-amber-950';
    menteColor = 'text-indigo-900';
  } else if (variant === 'card') {
    // Over share card gradient
    musicalColor = 'text-amber-200';
    menteColor = 'text-white';
  } else if (variant === 'badge') {
    // In badges or smaller tags
    musicalColor = 'text-amber-600';
    menteColor = 'text-indigo-950';
  } else if (variant === 'light') {
    musicalColor = 'text-amber-600';
    menteColor = 'text-indigo-950';
  }

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className={musicalColor}>Musical</span>
      <span className={menteColor}>Mente</span>
    </span>
  );
};
