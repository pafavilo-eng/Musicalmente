import React, { useState } from 'react';
import { AVATARS } from '../data/avatars';
import { AvatarOption, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { soundService } from '../services/soundService';
import { AvatarDisplay } from './AvatarDisplay';
import { X, Check, Camera, Sparkles } from 'lucide-react';

interface AvatarPickerModalProps {
  currentAvatarId: string;
  lang: Language;
  onSelectAvatar: (avatarId: string) => void;
  onOpenPhotoPicker?: () => void;
  onClose: () => void;
}

export const AvatarPickerModal: React.FC<AvatarPickerModalProps> = ({
  currentAvatarId,
  lang,
  onSelectAvatar,
  onOpenPhotoPicker,
  onClose,
}) => {
  const [selectedTab, setSelectedTab] = useState<'animal' | 'biblical'>('animal');
  const t = TRANSLATIONS[lang];

  const filteredAvatars = AVATARS.filter((a) => a.type === selectedTab);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      style={{
        paddingTop: 'max(env(safe-area-inset-top, 0px), 1rem)',
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 1rem)',
        paddingLeft: 'max(env(safe-area-inset-left, 0px), 1rem)',
        paddingRight: 'max(env(safe-area-inset-right, 0px), 1rem)',
      }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-5 shadow-2xl border-4 border-amber-300 max-h-[90vh] flex flex-col my-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold font-display text-indigo-950 flex items-center gap-2">
              <span>🎭</span> {t.chooseAvatar}
            </h3>
            <p className="text-xs text-slate-500 font-sans">
              Personagens 3D divertidos ou sua foto real
            </p>
          </div>
          <button
            onClick={() => {
              soundService.playTap();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Action: Take or Choose Custom Profile Photo */}
        {onOpenPhotoPicker && (
          <div className="mt-3">
            <button
              type="button"
              onClick={() => {
                soundService.playTap();
                onOpenPhotoPicker();
              }}
              className="w-full p-2.5 rounded-2xl bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 border-2 border-dashed border-amber-300 flex items-center justify-between gap-2 shadow-2xs cursor-pointer active:scale-98 transition-all"
            >
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-amber-950 flex items-center justify-center shadow-xs">
                  <Camera size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold font-display text-indigo-950">
                    📸 Tirar Foto ou Escolher da Galeria
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Use sua própria foto com corte circular perfeito
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold font-display bg-amber-200 text-amber-950 px-2 py-1 rounded-lg">
                Usar Foto
              </span>
            </button>
          </div>
        )}

        {/* Category Tabs: 3D Animais & Personagens Bíblicos */}
        <div className="flex items-center gap-2 mt-3 p-1 bg-amber-50 rounded-2xl border border-amber-200/60">
          <button
            type="button"
            onClick={() => {
              soundService.playTap();
              setSelectedTab('animal');
            }}
            className={`flex-1 py-2 text-xs font-bold font-display rounded-xl transition-all cursor-pointer ${
              selectedTab === 'animal'
                ? 'bg-amber-400 text-amber-950 shadow-sm scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🐻 3D Animais Músicos
          </button>
          <button
            type="button"
            onClick={() => {
              soundService.playTap();
              setSelectedTab('biblical');
            }}
            className={`flex-1 py-2 text-xs font-bold font-display rounded-xl transition-all cursor-pointer ${
              selectedTab === 'biblical'
                ? 'bg-indigo-500 text-white shadow-sm scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📖 3D Personagens Bíblicos
          </button>
        </div>

        {/* Avatars Grid */}
        <div className="flex-1 overflow-y-auto mt-3 pr-1 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {filteredAvatars.map((avatar) => {
            const isSelected = avatar.id === currentAvatarId;
            return (
              <button
                key={avatar.id}
                type="button"
                onClick={() => {
                  soundService.playTap();
                  onSelectAvatar(avatar.id);
                  onClose();
                }}
                className={`relative flex flex-col items-center p-3 rounded-2xl border-2 transition-all cursor-pointer text-center group ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/70 shadow-md scale-[1.02]'
                    : 'border-slate-100 bg-slate-50/50 hover:border-amber-300 hover:bg-amber-50/40'
                }`}
              >
                {/* 3D Image or Styled Badge */}
                <div className="relative mb-2">
                  <AvatarDisplay
                    avatar={avatar}
                    size="xl"
                    shape="rounded"
                    className="w-20 h-20 rounded-2xl group-hover:scale-105 transition-transform"
                  />

                  {isSelected && (
                    <div className="absolute top-1 right-1 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md">
                      <Check size={14} strokeWidth={3} />
                    </div>
                  )}
                </div>

                <span className="font-display font-bold text-xs text-indigo-950 group-hover:text-amber-900 transition-colors">
                  {avatar.name}
                </span>
                <span className="text-[10px] text-slate-500 font-sans mt-0.5">
                  {avatar.instrumentOrRole}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
