import React, { useEffect, useState } from 'react';
import { Language, PublicPresence, UserProfile } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { firebaseService } from '../services/firebaseService';
import { AvatarDisplay } from './AvatarDisplay';
import { UserStatusBadge } from './UserStatusBadge';
import { soundService } from '../services/soundService';
import { X, Users, Sparkles, RefreshCw } from 'lucide-react';

interface OnlineUsersModalProps {
  currentUser: UserProfile;
  lang: Language;
  onClose: () => void;
}

export const OnlineUsersModal: React.FC<OnlineUsersModalProps> = ({
  currentUser,
  lang,
  onClose,
}) => {
  const [presenceList, setPresenceList] = useState<PublicPresence[]>([]);
  const [loading, setLoading] = useState(true);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const unsubscribe = firebaseService.subscribeToPublicPresence((list) => {
      setPresenceList(list);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Filter only other users who are currently online
  const otherOnlineUsers = presenceList.filter(
    (p) => p.isOnline && p.userId !== currentUser.id
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto"
      style={{
        paddingTop: 'max(env(safe-area-inset-top, 0px), 1rem)',
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 1rem)',
        paddingLeft: 'max(env(safe-area-inset-left, 0px), 1rem)',
        paddingRight: 'max(env(safe-area-inset-right, 0px), 1rem)',
      }}
    >
      <div className="relative w-full max-w-md bg-white rounded-3xl p-5 shadow-2xl border-4 border-amber-300 max-h-[85vh] flex flex-col my-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-amber-100">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-200">
              <Users size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-indigo-950 flex items-center gap-1.5">
                <span>🟢</span> {t.onlineUsers}
              </h3>
              <p className="text-[11px] text-slate-500 font-sans">
                {t.seeOnlineMusicians}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              soundService.playTap();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label={t.close}
          >
            <X size={18} />
          </button>
        </div>

        {/* Current User Card */}
        <div className="mt-3 p-3 rounded-2xl bg-gradient-to-r from-emerald-50 to-amber-50/70 border border-emerald-200 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2.5">
            <AvatarDisplay
              avatar={currentUser.avatarId}
              photoUrl={currentUser.photoUrl}
              size="sm"
              shape="circle"
              className="w-10 h-10 border-2 border-white rounded-full shadow-2xs"
            />
            <div>
              <div className="text-xs font-bold font-display text-slate-900 flex items-center gap-1">
                <span>{currentUser.name}</span>
                <span className="text-[10px] text-amber-700 font-normal">({lang === 'pt-BR' ? 'Você' : lang === 'fr-CA' ? 'Toi' : 'You'})</span>
              </div>
              <UserStatusBadge isOnline={true} size="xs" />
            </div>
          </div>
          <span className="text-[11px] font-bold font-display text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
            {t.youAreOnline}
          </span>
        </div>

        {/* Online Users List */}
        <div className="mt-3 flex-1 overflow-y-auto pr-1 space-y-2 max-h-[45vh]">
          {loading ? (
            <div className="py-8 text-center text-slate-400 text-xs flex flex-col items-center gap-2">
              <RefreshCw className="w-5 h-5 animate-spin text-amber-500" />
              <span>Conectando ao Firebase Presence...</span>
            </div>
          ) : otherOnlineUsers.length > 0 ? (
            otherOnlineUsers.map((user) => (
              <div
                key={user.userId}
                className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 transition-colors flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <AvatarDisplay
                    avatar={user.avatarId}
                    photoUrl={user.photoUrl}
                    size="sm"
                    shape="circle"
                    className="w-10 h-10 border border-slate-100 rounded-full"
                  />
                  <div>
                    <div className="text-xs font-bold font-display text-slate-900">
                      {user.name}
                    </div>
                    {/* Standardized Green/Red indicator and text */}
                    <UserStatusBadge isOnline={user.isOnline} size="xs" />
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-xl bg-emerald-50 text-emerald-800 text-[11px] font-display font-bold border border-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>{t.online}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center px-4 rounded-2xl bg-slate-50 border border-slate-200/80 my-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 mx-auto mb-2 flex items-center justify-center text-2xl shadow-xs">
                🎵
              </div>
              <h4 className="text-xs font-bold font-display text-emerald-700 mb-1 flex items-center justify-center gap-1">
                <span>🟢</span> {t.youAreOnline}
              </h4>
              <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                {t.noOtherUsersOnline}
              </p>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
          <span>🔒 {t.childProtectionNote}</span>
          <span className="text-emerald-600 font-bold">● Firebase Real-Time</span>
        </div>
      </div>
    </div>
  );
};
