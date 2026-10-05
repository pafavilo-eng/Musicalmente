import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { MusicalMenteLogo } from './MusicalMenteLogo';

interface SplashScreenProps {
  lang: Language;
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ lang, onFinish }) => {
  const [fading, setFading] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    // Show splash for 1.2s then fade out smoothly
    const timer1 = setTimeout(() => {
      setFading(true);
    }, 1200);

    const timer2 = setTimeout(() => {
      onFinish();
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-500 text-slate-900 transition-opacity duration-400 select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* 3D App Icon Badge */}
      <div className="relative mb-5 animate-pulse-glow">
        <div className="w-28 h-28 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-amber-200 flex items-center justify-center">
          <img
            src="/icon-192.png"
            alt="MusicalMente 3D Icon"
            className="w-full h-full object-cover scale-105"
          />
        </div>
        <span className="absolute -top-3 -right-2 text-3xl animate-bounce">✨</span>
        <span className="absolute -bottom-2 -left-3 text-2xl animate-float-note">🎵</span>
      </div>

      {/* Brand Title */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-black font-display tracking-tight drop-shadow-sm flex items-center justify-center gap-2">
          <span>🎵</span> <MusicalMenteLogo variant="splash" />
        </h1>
        <p className="text-sm font-sans font-medium text-amber-900 mt-1 max-w-xs drop-shadow-xs">
          “{t.slogan}”
        </p>
      </div>

      {/* Subtle loader bar */}
      <div className="w-36 h-2 bg-amber-200/80 rounded-full mt-6 overflow-hidden p-0.5 border border-amber-300">
        <div className="h-full bg-amber-800 rounded-full animate-[pulse_1s_ease-in-out_infinite] w-full" />
      </div>

      {/* Educational Badge */}
      <div
        className="absolute px-3 py-1 rounded-full bg-white/40 backdrop-blur-xs text-[11px] font-display font-bold text-amber-950"
        style={{ bottom: 'max(calc(env(safe-area-inset-bottom, 0px) + 1.25rem), 2rem)' }}
      >
        📚 MSA Fase 1 • PWA Ready
      </div>
    </div>
  );
};
