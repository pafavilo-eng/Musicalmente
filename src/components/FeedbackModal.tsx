import React from 'react';
import { Language, UserProfile } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { soundService } from '../services/soundService';
import { getAvatarById } from '../data/avatars';
import { AvatarDisplay } from './AvatarDisplay';
import { Sparkles, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface FeedbackModalProps {
  isCorrect: boolean;
  isTimeout: boolean;
  pointsEarned: number;
  comboCount: number;
  correctAnswerText: string;
  explanation: string;
  currentUser: UserProfile;
  lang: Language;
  isLastQuestion: boolean;
  onAdvance: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isCorrect,
  isTimeout,
  pointsEarned,
  comboCount,
  correctAnswerText,
  explanation,
  currentUser,
  lang,
  isLastQuestion,
  onAdvance,
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
      <div className={`relative w-full max-w-sm rounded-3xl p-6 shadow-2xl border-4 flex flex-col items-center text-center my-auto ${
        isCorrect
          ? 'bg-gradient-to-b from-white via-amber-50 to-amber-100 border-amber-400'
          : 'bg-gradient-to-b from-white via-sky-50 to-sky-100 border-sky-300'
      }`}>
        {/* Animated Avatar / Mascot */}
        <div className="relative -mt-12 mb-3">
          <AvatarDisplay
            avatar={avatar}
            size="2xl"
            className={`w-24 h-24 rounded-3xl overflow-hidden shadow-xl border-4 border-white ${
              isCorrect ? 'ring-4 ring-amber-400/50' : 'bg-sky-200'
            }`}
            imgClassName={isCorrect ? 'scale-110' : ''}
          />
          {isCorrect && (
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-400 text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
              <Sparkles size={18} />
            </div>
          )}
        </div>

        {/* Title */}
        {isCorrect ? (
          <div>
            <h3 className="text-2xl font-bold font-display text-amber-900 flex items-center justify-center gap-1.5">
              <span>🎉</span> {t.congratulations}
            </h3>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="px-3 py-1 bg-amber-400 text-amber-950 rounded-xl font-display font-bold text-sm shadow-sm">
                +{pointsEarned} {t.points}
              </span>
              {comboCount > 1 && (
                <span className="px-3 py-1 bg-orange-500 text-white rounded-xl font-display font-bold text-sm shadow-sm animate-pulse">
                  🔥 {t.combo} x{comboCount}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold font-display text-sky-900 flex items-center justify-center gap-1.5">
              <span>🙂</span> {isTimeout ? t.timeoutMessage : t.almost}
            </h3>
            <p className="text-xs text-sky-800 font-sans mt-1">
              {t.keepTrying}
            </p>
          </div>
        )}

        {/* Correct Answer Clarification (if wrong or timeout) */}
        {!isCorrect && (
          <div className="w-full mt-4 p-3 bg-white/90 rounded-2xl border border-sky-200 text-left shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t.correctAnswerWas}</span>
            </div>
            <div className="text-sm font-bold text-emerald-700 pl-5">
              {correctAnswerText}
            </div>
          </div>
        )}

        {/* MSA Fase 1 Explanation Box */}
        <div className="w-full mt-3 p-3 bg-white/80 rounded-2xl border border-amber-200/80 text-left shadow-sm">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-900 mb-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.msaExplanation}</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-sans pl-5">
            {explanation}
          </p>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => {
            soundService.playTap();
            onAdvance();
          }}
          className={`w-full mt-5 py-3 px-4 rounded-2xl text-white font-display font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-transform active:scale-95 ${
            isCorrect ? 'btn-3d-amber' : 'btn-3d-indigo'
          }`}
        >
          <span>{isLastQuestion ? t.viewResults : t.nextQuestion}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
