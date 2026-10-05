import React from 'react';
import { Language, UserProfile } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { soundService } from '../services/soundService';
import { getAvatarById } from '../data/avatars';
import { AvatarDisplay } from './AvatarDisplay';
import { LanguageSelector } from './LanguageSelector';
import { Play, X, Clock, HelpCircle, Flame, CheckCircle2, Zap } from 'lucide-react';

interface PrepMatchModalProps {
  currentUser: UserProfile;
  lang: Language;
  onConfirmStart: () => void;
  onClose: () => void;
  onSelectLang?: (newLang: Language) => void;
}

export const PrepMatchModal: React.FC<PrepMatchModalProps> = ({
  currentUser,
  lang,
  onConfirmStart,
  onClose,
  onSelectLang,
}) => {
  const t = TRANSLATIONS[lang];
  const avatar = getAvatarById(currentUser.avatarId);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto"
      style={{
        paddingTop: 'max(env(safe-area-inset-top, 0px), 1.5rem)',
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 1.5rem)',
        paddingLeft: 'max(env(safe-area-inset-left, 0px), 1rem)',
        paddingRight: 'max(env(safe-area-inset-right, 0px), 1rem)',
      }}
    >
      <div className="relative w-full max-w-sm bg-white rounded-3xl p-5 shadow-2xl border-4 border-amber-300 text-center flex flex-col items-center my-auto">
        {/* Close Button */}
        <button
          onClick={() => {
            soundService.playTap();
            onClose();
          }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label={t.close}
        >
          <X size={18} />
        </button>

        {/* 3D Avatar Companion */}
        <div className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-amber-200 mb-2 -mt-12 flex items-center justify-center">
          <AvatarDisplay
            avatar={avatar}
            size="2xl"
            className="w-full h-full border-0 shadow-none rounded-none"
          />
        </div>

        {/* Companion name badge */}
        <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-display font-bold mb-1 shadow-xs">
          <span>{avatar.name}</span>
          <span className="text-amber-500">•</span>
          <span className="text-amber-700">{avatar.instrumentOrRole}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-display text-indigo-950">
          {t.readyToPlay}
        </h3>

        {/* How to Play summary */}
        <p className="text-xs text-slate-600 font-sans mt-1 px-1 leading-relaxed">
          {t.gameSummaryText}
        </p>

        {/* Optional Language Switcher if provided */}
        {onSelectLang && (
          <div className="my-2.5">
            <LanguageSelector
              currentLang={lang}
              onSelectLang={onSelectLang}
              compact={true}
            />
          </div>
        )}

        {/* Rules & Instructions Summary Chips (100% translated for all 3 languages) */}
        <div className="w-full my-3 space-y-2 text-left">
          {/* Número de perguntas */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-amber-50 border border-amber-200/90 text-xs text-amber-950 font-semibold font-display">
            <div className="w-6 h-6 rounded-lg bg-amber-200 text-amber-800 flex items-center justify-center shrink-0">
              <HelpCircle size={15} />
            </div>
            <span className="leading-tight">{t.prepQuestionsCount}</span>
          </div>

          {/* Tempo disponível */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-950 font-semibold font-display">
            <div className="w-6 h-6 rounded-lg bg-sky-200 text-sky-800 flex items-center justify-center shrink-0">
              <Clock size={15} />
            </div>
            <span className="leading-tight">{t.prepTimePerQuestion}</span>
          </div>

          {/* Sistema de pontuação */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950 font-semibold font-display">
            <div className="w-6 h-6 rounded-lg bg-indigo-200 text-indigo-800 flex items-center justify-center shrink-0">
              <Zap size={15} />
            </div>
            <span className="leading-tight">{t.prepScoringSystem}</span>
          </div>

          {/* Explicação do combo */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 font-semibold font-display">
            <div className="w-6 h-6 rounded-lg bg-orange-200 text-orange-800 flex items-center justify-center shrink-0">
              <Flame size={15} />
            </div>
            <span className="leading-tight">{t.prepComboBonus}</span>
          </div>

          {/* Instruções sobre respostas */}
          <div className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-semibold font-display">
            <div className="w-6 h-6 rounded-lg bg-emerald-200 text-emerald-800 flex items-center justify-center shrink-0">
              <CheckCircle2 size={15} />
            </div>
            <span className="leading-tight">{t.prepAnswerTip}</span>
          </div>
        </div>

        {/* Start Game CTA */}
        <button
          type="button"
          onClick={() => {
            soundService.playTap();
            onConfirmStart();
          }}
          className="w-full py-3.5 px-6 rounded-2xl text-white font-display font-extrabold text-base btn-3d-amber flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98 transition-transform"
        >
          <Play size={20} className="fill-current" />
          <span>{t.startQuiz}</span>
        </button>
      </div>
    </div>
  );
};
