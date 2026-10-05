import React, { useState } from 'react';
import { Language, RankingEntry } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { soundService } from '../services/soundService';
import { storageService } from '../services/storageService';
import { getAvatarById } from '../data/avatars';
import { AvatarDisplay } from './AvatarDisplay';
import { Trophy, ShieldCheck, ArrowLeft, Flame, Award } from 'lucide-react';

interface RankingViewProps {
  lang: Language;
  onBack: () => void;
}

export const RankingView: React.FC<RankingViewProps> = ({ lang, onBack }) => {
  const [period, setPeriod] = useState<'today' | 'week' | 'month' | 'all'>('all');
  const t = TRANSLATIONS[lang];

  const rankings = storageService.getRankings(period);

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
          <Trophy className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-bold font-display text-indigo-950">
            {t.rankingTitle}
          </h2>
        </div>
        <div className="w-8"></div>
      </div>

      {/* Filter Tabs: HOJE, SEMANA, MÊS, GERAL */}
      <div className="flex items-center gap-1 p-1 bg-amber-100/70 rounded-2xl border border-amber-200 mb-4 shadow-inner">
        {(['today', 'week', 'month', 'all'] as const).map((p) => {
          const isSelected = period === p;
          const label =
            p === 'today'
              ? t.filterToday
              : p === 'week'
              ? t.filterWeek
              : p === 'month'
              ? t.filterMonth
              : t.filterAll;

          return (
            <button
              key={p}
              type="button"
              onClick={() => {
                soundService.playTap();
                setPeriod(p);
              }}
              className={`flex-1 py-1.5 text-xs font-display font-bold rounded-xl transition-all cursor-pointer ${
                isSelected
                  ? 'bg-amber-400 text-amber-950 shadow-sm scale-[1.02]'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Top 3 Podium Highlights if available */}
      {rankings.length >= 3 && (
        <div className="flex items-end justify-center gap-2 mb-4 px-2 pt-6 pb-2">
          {/* 2nd place */}
          <div className="flex flex-col items-center flex-1">
            <div className="relative mb-1">
              <AvatarDisplay
                avatar={rankings[1].avatarId}
                size="md"
                className="w-12 h-12 rounded-2xl border-2 border-slate-300 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-300 text-slate-800 text-[10px] font-bold font-display flex items-center justify-center border border-white">
                2
              </span>
            </div>
            <span className="text-[11px] font-display font-bold text-slate-800 truncate max-w-[80px]">
              {rankings[1].name}
            </span>
            <span className="text-[10px] font-bold text-amber-800 tabular-nums">
              {rankings[1].score} {t.points}
            </span>
          </div>

          {/* 1st place */}
          <div className="flex flex-col items-center flex-1 -mt-4">
            <div className="relative mb-1">
              <AvatarDisplay
                avatar={rankings[0].avatarId}
                size="lg"
                className="w-16 h-16 rounded-2xl border-3 border-amber-400 shadow-xl ring-4 ring-amber-300/40"
              />
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xl">👑</span>
              <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-amber-950 text-xs font-bold font-display flex items-center justify-center border border-white shadow">
                1
              </span>
            </div>
            <span className="text-xs font-display font-bold text-slate-900 truncate max-w-[90px]">
              {rankings[0].name}
            </span>
            <span className="text-xs font-extrabold text-amber-800 tabular-nums">
              {rankings[0].score} {t.points}
            </span>
          </div>

          {/* 3rd place */}
          <div className="flex flex-col items-center flex-1">
            <div className="relative mb-1">
              <AvatarDisplay
                avatar={rankings[2].avatarId}
                size="md"
                className="w-12 h-12 rounded-2xl border-2 border-amber-600 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-600 text-white text-[10px] font-bold font-display flex items-center justify-center border border-white">
                3
              </span>
            </div>
            <span className="text-[11px] font-display font-bold text-slate-800 truncate max-w-[80px]">
              {rankings[2].name}
            </span>
            <span className="text-[10px] font-bold text-amber-800 tabular-nums">
              {rankings[2].score} {t.points}
            </span>
          </div>
        </div>
      )}

      {/* Leaderboard List */}
      <div className="space-y-2 flex-1 overflow-y-auto">
        {rankings.map((entry, idx) => {
          return (
            <div
              key={entry.id}
              className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-amber-300 transition-colors"
            >
              {/* Position */}
              <div className="w-6 text-center font-display font-extrabold text-sm text-slate-500 tabular-nums">
                {idx + 1}
              </div>

              {/* Avatar */}
              <AvatarDisplay
                avatar={entry.avatarId}
                size="md"
                className="w-11 h-11 rounded-xl"
              />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="font-display font-bold text-xs text-slate-800 truncate">
                  {entry.name}
                </div>
                <div className="text-[10px] text-slate-400 flex items-center gap-2">
                  <span>{entry.correctCount}/20 {t.correctAnswers}</span>
                  <span>•</span>
                  <span>{entry.accuracy}%</span>
                  {entry.maxCombo > 0 && (
                    <>
                      <span>•</span>
                      <span className="text-orange-500 font-bold">🔥 {entry.maxCombo}x</span>
                    </>
                  )}
                </div>
              </div>

              {/* Score */}
              <div className="text-right">
                <span className="font-display font-bold text-sm text-indigo-950 tabular-nums">
                  {entry.score}
                </span>
                <span className="block text-[9px] text-slate-400 uppercase font-sans">
                  {t.points}
                </span>
              </div>
            </div>
          );
        })}

        {rankings.length === 0 && (
          <div className="text-center py-10 text-slate-400 text-xs">
            {t.emptyRanking}
          </div>
        )}
      </div>

      {/* Kid Privacy Assurance */}
      <div className="mt-4 p-2.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-center gap-2 text-[10px] text-amber-900">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>{t.rankingPrivacyNote}</span>
      </div>
    </div>
  );
};
