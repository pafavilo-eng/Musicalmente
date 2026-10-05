import React from 'react';

interface UserStatusBadgeProps {
  isOnline: boolean;
  showText?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const UserStatusBadge: React.FC<UserStatusBadgeProps> = ({
  isOnline,
  showText = true,
  size = 'md',
  className = '',
}) => {
  const dotSize =
    size === 'xs'
      ? 'w-1.5 h-1.5'
      : size === 'sm'
      ? 'w-2 h-2'
      : size === 'lg'
      ? 'w-3 h-3'
      : 'w-2.5 h-2.5';

  const textSize =
    size === 'xs'
      ? 'text-[10px]'
      : size === 'sm'
      ? 'text-[11px]'
      : size === 'lg'
      ? 'text-sm'
      : 'text-xs';

  return (
    <span className={`inline-flex items-center gap-1.5 font-display select-none ${className}`}>
      {/* Visual Dot Indicator */}
      <span
        className={`shrink-0 rounded-full transition-colors ${dotSize} ${
          isOnline
            ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)] animate-pulse'
            : 'bg-rose-500'
        }`}
      />
      {/* Explicit Green or Red Text */}
      {showText && (
        <span
          className={`font-bold tracking-wide transition-colors ${textSize} ${
            isOnline ? 'text-emerald-600' : 'text-rose-600'
          }`}
        >
          {isOnline ? 'Online' : 'Offline'}
        </span>
      )}
    </span>
  );
};
