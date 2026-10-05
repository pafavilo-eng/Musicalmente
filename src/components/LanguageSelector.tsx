import React from 'react';
import { Language } from '../types';
import { soundService } from '../services/soundService';

interface LanguageSelectorProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  compact?: boolean;
}

export const LANGUAGE_OPTIONS: { code: Language; label: string; flag: string; shortLabel: string }[] = [
  { code: 'pt-BR', label: 'Português (Brasil)', flag: '🇧🇷', shortLabel: 'PT-BR' },
  { code: 'fr-CA', label: 'Français (Canada)', flag: '🇨🇦', shortLabel: 'FR-CA' },
  { code: 'en-CA', label: 'English (Canada)', flag: '🇨🇦', shortLabel: 'EN-CA' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
  onSelectLang,
  compact = false,
}) => {
  return (
    <div
      role="radiogroup"
      aria-label="Seletor de idioma"
      className={`w-full max-w-[320px] mx-auto flex items-center justify-between gap-1 p-1 bg-amber-100/90 rounded-2xl border border-amber-200/90 shadow-2xs box-border overflow-hidden ${
        compact ? 'text-xs' : 'text-sm'
      }`}
    >
      {LANGUAGE_OPTIONS.map((item) => {
        const isSelected = currentLang === item.code;
        return (
          <button
            key={item.code}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => {
              soundService.playTap();
              onSelectLang(item.code);
            }}
            className={`flex-1 flex items-center justify-center gap-1 px-1.5 py-1.5 rounded-xl transition-all cursor-pointer select-none text-center min-w-0 ${
              isSelected
                ? 'bg-white text-indigo-950 shadow-sm font-extrabold scale-[1.01]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/40 font-medium'
            }`}
            title={item.label}
          >
            <span className="text-sm shrink-0" role="img" aria-label={item.label}>
              {item.flag}
            </span>
            <span className="font-display tracking-tight uppercase text-[10.5px] sm:text-[11px] truncate">
              {item.shortLabel}
            </span>
          </button>
        );
      })}
    </div>
  );
};
