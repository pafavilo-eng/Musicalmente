import React, { useState, useEffect } from 'react';
import { AvatarOption } from '../types';
import { getAvatarById } from '../data/avatars';

interface AvatarDisplayProps {
  avatar: AvatarOption | string;
  photoUrl?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  shape?: 'circle' | 'rounded';
  className?: string;
  imgClassName?: string;
  alt?: string;
}

export const AvatarDisplay: React.FC<AvatarDisplayProps> = ({
  avatar: avatarProp,
  photoUrl,
  size = 'md',
  shape = 'circle',
  className = '',
  imgClassName = '',
  alt,
}) => {
  const avatar: AvatarOption =
    typeof avatarProp === 'string'
      ? getAvatarById(avatarProp)
      : avatarProp || getAvatarById('bear_maestro');

  const [hasImageError, setHasImageError] = useState(false);
  const [hasPhotoError, setHasPhotoError] = useState(false);

  // Reset error states when sources change
  useEffect(() => {
    setHasImageError(false);
    setHasPhotoError(false);
  }, [avatar.id, avatar.image, photoUrl]);

  const sizeClasses = {
    xs: 'w-7 h-7 text-xs',
    sm: 'w-9 h-9 text-sm',
    md: 'w-11 h-11 text-base',
    lg: 'w-14 h-14 text-lg',
    xl: 'w-20 h-20 text-2xl',
    '2xl': 'w-24 h-24 text-3xl',
  }[size];

  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-2xl';

  // Cheerful 3D clay badge fallback with musical vector graphics (ZERO raw emojis, 100% reliable)
  const renderFallback = () => {
    const initial = (avatar.name || 'M').charAt(0).toUpperCase();
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center font-display font-black text-white relative overflow-hidden select-none ${shapeClass}`}
        style={{
          background: `linear-gradient(135deg, ${avatar.accentColor || '#f59e0b'}, #4338ca)`,
        }}
      >
        {/* Subtle decorative musical note vector watermark */}
        <svg
          className="absolute -bottom-1 -right-1 w-2/3 h-2/3 opacity-25 text-white pointer-events-none"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>

        <span className="relative z-10 drop-shadow-md text-white font-extrabold tracking-tight">
          {initial}
        </span>
      </div>
    );
  };

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center shrink-0 border-2 border-white/90 shadow-sm ${sizeClasses} ${shapeClass} ${className}`}
      style={{ backgroundColor: (avatar.accentColor || '#f59e0b') + '30' }}
    >
      {/* If custom profile photo is provided and valid */}
      {photoUrl && !hasPhotoError ? (
        <img
          src={photoUrl}
          alt={alt || 'Foto de perfil'}
          onError={() => setHasPhotoError(true)}
          className={`w-full h-full object-cover select-none pointer-events-none transition-transform duration-200 ${shapeClass} ${imgClassName}`}
          loading="eager"
          decoding="async"
        />
      ) : avatar.image && !hasImageError ? (
        <img
          src={avatar.image}
          alt={alt || avatar.name}
          onError={() => setHasImageError(true)}
          className={`w-full h-full object-cover select-none pointer-events-none transition-transform duration-200 ${shapeClass} ${imgClassName}`}
          loading="eager"
          decoding="async"
        />
      ) : (
        renderFallback()
      )}
    </div>
  );
};
