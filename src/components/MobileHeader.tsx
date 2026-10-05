import React from 'react';
import { Language, UserProfile } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { soundService } from '../services/soundService';
import { getAvatarById } from '../data/avatars';
import { AvatarDisplay } from './AvatarDisplay';
import { Settings, Volume2, VolumeX } from 'lucide-react';
import { MusicalMenteLogo } from './MusicalMenteLogo';

interface MobileHeaderProps {
  currentUser: UserProfile;
  lang: Language;
  soundEffects: boolean;
  onToggleSound: () => void;
  onOpenSettings: () => void;
  onOpenProfile: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  currentUser,
  lang,
  soundEffects,
  onToggleSound,
  onOpenSettings,
  onOpenProfile,
}) => {
  const t = TRANSLATIONS[lang];
  const avatar = getAvatarById(currentUser.avatarId);

  return (
    <header
      className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-amber-200/80 px-3.5 pb-2.5 flex items-center justify-between shadow-xs transition-all"
      style={{
        paddingTop: 'max(env(safe-area-inset-top, 0px), 10px)',
        paddingLeft: 'max(env(safe-area-inset-left, 0px), 0.875rem)',
        paddingRight: 'max(env(safe-area-inset-right, 0px), 0.875rem)',
      }}
    >
      {/* Zone 1: Wordmark / Brand Title */}
      <div className="flex items-center gap-1.5 cursor-pointer">
        <span className="text-xl">🎵</span>
        <span className="font-display font-extrabold text-base tracking-tight">
          <MusicalMenteLogo variant="header" />
        </span>
      </div>

      {/* Zone 2 & 3: Quick Action Buttons */}
      <div className="flex items-center gap-1.5">
        {/* Sound toggle quick button */}
        <button
          type="button"
          onClick={() => {
            soundService.playTap();
            onToggleSound();
          }}
          className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer ${
            soundEffects
              ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
              : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
          }`}
          title="Alternar Sons"
        >
          {soundEffects ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>

        {/* Settings button */}
        <button
          type="button"
          onClick={() => {
            soundService.playTap();
            onOpenSettings();
          }}
          className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          title="Configurações"
        >
          <Settings size={16} />
        </button>

        {/* User Mini Avatar Trigger */}
        <button
          type="button"
          onClick={() => {
            soundService.playTap();
            onOpenProfile();
          }}
          className="cursor-pointer hover:scale-105 transition-transform"
          title={t.profile}
          aria-label={t.profile}
        >
          <AvatarDisplay
            avatar={avatar}
            photoUrl={currentUser.photoUrl}
            size="xs"
            shape="circle"
            className="w-8 h-8 rounded-full border-2 border-amber-400 shadow-2xs"
          />
        </button>
      </div>
    </header>
  );
};
