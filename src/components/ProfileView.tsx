import React, { useState } from 'react';
import { Language, SoundSettings, UserProfile } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { soundService } from '../services/soundService';
import { getAvatarById } from '../data/avatars';
import { AvatarDisplay } from './AvatarDisplay';
import { AvatarPickerModal } from './AvatarPickerModal';
import { ProfilePhotoPickerModal } from './ProfilePhotoPickerModal';
import { LanguageSelector } from './LanguageSelector';
import { User, ArrowLeft, Edit3, Trophy, Flame, CheckCircle, ShieldCheck, Camera, Sparkles } from 'lucide-react';
import { firebaseService } from '../services/firebaseService';

interface ProfileViewProps {
  currentUser: UserProfile;
  lang: Language;
  soundSettings: SoundSettings;
  onUpdateUser: (user: UserProfile) => void;
  onUpdateSoundSettings: (settings: SoundSettings) => void;
  onSelectLang: (lang: Language) => void;
  onBack: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  currentUser,
  lang,
  soundSettings,
  onUpdateUser,
  onUpdateSoundSettings,
  onSelectLang,
  onBack,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [showPhotoPicker, setShowPhotoPicker] = useState(false);

  const t = TRANSLATIONS[lang];
  const avatar = getAvatarById(currentUser.avatarId);

  const handleSave = () => {
    soundService.playTap();
    const updated: UserProfile = {
      ...currentUser,
      name: name.trim() || currentUser.name,
    };
    onUpdateUser(updated);
    firebaseService.syncUserProfile(updated);
    setIsEditing(false);
  };

  const handleSelectAvatar = (newAvatarId: string) => {
    soundService.playTap();
    const updated: UserProfile = {
      ...currentUser,
      avatarId: newAvatarId,
    };
    onUpdateUser(updated);
    firebaseService.syncUserProfile(updated);
  };

  const handleSavePhoto = (photoUrl: string) => {
    soundService.playAchievement();
    const updated: UserProfile = {
      ...currentUser,
      photoUrl,
    };
    onUpdateUser(updated);
    firebaseService.syncUserProfile(updated);
  };

  const handleRemovePhoto = () => {
    soundService.playTap();
    const updated: UserProfile = {
      ...currentUser,
      photoUrl: undefined,
    };
    onUpdateUser(updated);
    firebaseService.syncUserProfile(updated);
  };

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
          <User className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-bold font-display text-indigo-950">
            {t.myProfile}
          </h2>
        </div>
        <button
          type="button"
          onClick={() => {
            soundService.playTap();
            setIsEditing(!isEditing);
          }}
          className="text-xs font-display font-bold text-amber-700 hover:text-amber-900 px-2.5 py-1.5 rounded-xl bg-amber-100/70 border border-amber-200 cursor-pointer"
        >
          {isEditing ? t.cancel : t.editProfile}
        </button>
      </div>

      {/* Main Profile Card */}
      <div className="card-clay rounded-3xl p-5 mb-4 text-center">
        {/* Avatar / Photo with Perfect Circular Styling */}
        <div className="relative inline-block mx-auto mb-3">
          <AvatarDisplay
            avatar={avatar}
            photoUrl={currentUser.photoUrl}
            size="2xl"
            shape="circle"
            className="w-24 h-24 rounded-full border-4 border-amber-300 shadow-xl"
          />
          <button
            type="button"
            onClick={() => {
              soundService.playTap();
              setShowPhotoPicker(true);
            }}
            className="absolute -bottom-1 -right-1 p-2 rounded-full bg-amber-400 text-amber-950 shadow-md border-2 border-white hover:bg-amber-500 transition-colors cursor-pointer"
            title="Tirar foto ou escolher da galeria"
          >
            <Camera size={14} />
          </button>
        </div>

        {/* Profile Picture & Avatar Action Buttons */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <button
            type="button"
            onClick={() => {
              soundService.playTap();
              setShowPhotoPicker(true);
            }}
            className="px-3 py-1.5 rounded-xl bg-amber-100/90 hover:bg-amber-200 text-amber-950 font-display font-bold text-[11px] border border-amber-300 flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95 transition-all"
          >
            <Camera size={13} />
            <span>{currentUser.photoUrl ? 'Trocar Foto' : 'Tirar / Escolher Foto'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundService.playTap();
              setShowAvatarPicker(true);
            }}
            className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-display font-bold text-[11px] border border-slate-200 flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95 transition-all"
          >
            <Sparkles size={13} className="text-amber-500" />
            <span>Avatares 3D</span>
          </button>
        </div>

        {/* Name / Edit Form */}
        {isEditing ? (
          <div className="space-y-2 max-w-xs mx-auto mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-center font-display font-bold text-base px-3 py-1.5 rounded-xl border-2 border-amber-400 focus:outline-none bg-white"
            />
            <button
              type="button"
              onClick={handleSave}
              className="w-full py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-display font-bold text-xs cursor-pointer shadow-sm"
            >
              {t.saveChanges}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="font-display font-extrabold text-xl text-indigo-950">
              {currentUser.name}
            </h3>
            <p className="text-xs text-amber-800 font-medium">
              {currentUser.photoUrl ? 'Foto Personalizada' : avatar.name} • {avatar.instrumentOrRole}
            </p>
          </div>
        )}
      </div>

      {/* Statistics 2x2 Grid */}
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {/* Total Matches */}
        <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
            🎮
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-semibold">{t.totalMatches}</div>
            <div className="text-base font-bold font-display text-slate-800 tabular-nums">
              {currentUser.totalMatches}
            </div>
          </div>
        </div>

        {/* High Score */}
        <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <Trophy size={18} />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-semibold">{t.highestScore}</div>
            <div className="text-base font-bold font-display text-slate-800 tabular-nums">
              {currentUser.highScore}
            </div>
          </div>
        </div>

        {/* Total Correct */}
        <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <CheckCircle size={18} />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-semibold">{t.totalCorrect}</div>
            <div className="text-base font-bold font-display text-slate-800 tabular-nums">
              {currentUser.totalCorrect}
            </div>
          </div>
        </div>

        {/* Max Combo */}
        <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
            <Flame size={18} />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-semibold">{t.highestCombo}</div>
            <div className="text-base font-bold font-display text-slate-800 tabular-nums">
              {currentUser.maxCombo}x
            </div>
          </div>
        </div>
      </div>

      {/* Language Preference Section */}
      <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm mb-4">
        <label className="block text-xs font-bold font-display text-slate-800 mb-2">
          🌎 {t.languageSelect}
        </label>
        <div className="w-full flex justify-center">
          <LanguageSelector currentLang={lang} onSelectLang={onSelectLang} />
        </div>
      </div>

      {/* Privacy note */}
      <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center gap-2 text-[10px] text-slate-500">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>{t.privacyNotice}</span>
      </div>

      {/* Avatar Picker Modal */}
      {showAvatarPicker && (
        <AvatarPickerModal
          currentAvatarId={currentUser.avatarId}
          lang={lang}
          onSelectAvatar={handleSelectAvatar}
          onOpenPhotoPicker={() => {
            setShowAvatarPicker(false);
            setShowPhotoPicker(true);
          }}
          onClose={() => setShowAvatarPicker(false)}
        />
      )}

      {/* Profile Photo Picker Modal */}
      {showPhotoPicker && (
        <ProfilePhotoPickerModal
          currentPhotoUrl={currentUser.photoUrl}
          onSavePhoto={handleSavePhoto}
          onRemovePhoto={handleRemovePhoto}
          onClose={() => setShowPhotoPicker(false)}
        />
      )}
    </div>
  );
};
