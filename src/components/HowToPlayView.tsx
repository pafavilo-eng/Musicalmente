import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { soundService } from '../services/soundService';
import { BookOpen, ArrowLeft, CheckCircle2, Music2 } from 'lucide-react';

interface HowToPlayViewProps {
  lang: Language;
  onBack: () => void;
  onStartPlay: () => void;
}

export const HowToPlayView: React.FC<HowToPlayViewProps> = ({
  lang,
  onBack,
  onStartPlay,
}) => {
  const t = TRANSLATIONS[lang];

  const steps = [
    t.step1,
    t.step2,
    t.step3,
    t.step4,
    t.step5,
    t.step6,
    t.step7,
    t.step8,
  ];

  return (
    <div
      className="w-full max-w-md mx-auto flex flex-col min-h-screen px-3.5 pt-3 select-none"
      style={{
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px) + 2rem, 3rem)',
        paddingLeft: 'max(env(safe-area-inset-left, 0px), 0.875rem)',
        paddingRight: 'max(env(safe-area-inset-right, 0px), 0.875rem)',
      }}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={() => {
            soundService.playTap();
            onBack();
          }}
          className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 shadow-sm border border-slate-200 cursor-pointer transition-colors"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="flex items-center gap-1.5">
          <BookOpen className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-bold font-display text-indigo-950">
            {t.howToPlayTitle}
          </h2>
        </div>
        <div className="w-8"></div>
      </div>

      {/* Intro Banner */}
      <div className="card-clay rounded-3xl p-4 mb-4 text-center">
        <div className="w-12 h-12 rounded-2xl bg-amber-200 mx-auto mb-2 flex items-center justify-center text-2xl shadow-sm border border-white">
          🎵
        </div>
        <h3 className="font-display font-bold text-sm text-indigo-950">
          {t.slogan}
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          {t.msaPhase1Note}
        </p>
      </div>

      {/* 8 Steps List */}
      <div className="space-y-2.5 flex-1 overflow-y-auto pr-1">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-2xl bg-white border border-amber-200/70 shadow-sm flex items-start gap-3 hover:border-amber-300 transition-colors"
          >
            <div className="text-xs font-sans text-slate-700 leading-relaxed">
              {step}
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="mt-4 pt-2">
        <button
          type="button"
          onClick={() => {
            soundService.playTap();
            onStartPlay();
          }}
          className="w-full py-3.5 px-4 rounded-2xl text-white font-display font-bold text-sm btn-3d-amber flex items-center justify-center gap-2 cursor-pointer shadow-lg"
        >
          <Music2 size={18} />
          <span>{t.play}</span>
        </button>
      </div>
    </div>
  );
};
