import React from 'react';
import { Language, SoundSettings, UserProfile } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { soundService } from '../services/soundService';
import { LanguageSelector } from './LanguageSelector';
import { X, Volume2, VolumeX, Music, Bell, Shield, LogOut, Smartphone } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { isAdminUser } from '../services/firebaseService';

interface SettingsModalProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  soundSettings: SoundSettings;
  onUpdateSoundSettings: (settings: SoundSettings) => void;
  currentUser: UserProfile;
  onLogout: () => void;
  devicePreviewMode: boolean;
  onToggleDevicePreview: () => void;
  onClose: () => void;
  onOpenDeveloperArea?: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  currentLang,
  onSelectLang,
  soundSettings,
  onUpdateSoundSettings,
  currentUser,
  onLogout,
  devicePreviewMode,
  onToggleDevicePreview,
  onClose,
  onOpenDeveloperArea,
}) => {
  const t = TRANSLATIONS[currentLang];

  const toggleSfx = () => {
    soundService.playTap();
    const updated = { ...soundSettings, soundEffects: !soundSettings.soundEffects };
    onUpdateSoundSettings(updated);
    soundService.setSettings(updated.soundEffects, updated.music, updated.volume);
  };

  const toggleMusic = () => {
    soundService.playTap();
    const updated = { ...soundSettings, music: !soundSettings.music };
    onUpdateSoundSettings(updated);
    soundService.setSettings(updated.soundEffects, updated.music, updated.volume);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    const updated = { ...soundSettings, volume: vol };
    onUpdateSoundSettings(updated);
    soundService.setSettings(updated.soundEffects, updated.music, updated.volume);
  };

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
      <div className="relative w-full max-w-md bg-white rounded-3xl p-5 shadow-2xl border-4 border-amber-300 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚙️</span>
            <h3 className="text-lg font-bold font-display text-indigo-950">
              {t.settingsTitle}
            </h3>
          </div>
          <button
            onClick={() => {
              soundService.playTap();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-4 space-y-4">
          {/* Language Selection */}
          <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <label className="block text-xs font-bold font-display text-amber-950 mb-2">
              🌎 {t.languageSelect}
            </label>
            <LanguageSelector currentLang={currentLang} onSelectLang={onSelectLang} />
          </div>

          {/* Sound Controls */}
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
            <h4 className="text-xs font-bold font-display text-slate-800 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-indigo-600" />
              {t.soundEffects} & {t.backgroundMusic}
            </h4>

            {/* Sound Effects Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Bell className="w-4 h-4 text-amber-600" />
                <span>{t.soundEffects}</span>
              </div>
              <button
                type="button"
                onClick={toggleSfx}
                className={`px-3 py-1 text-xs font-display font-bold rounded-xl transition-all cursor-pointer ${
                  soundSettings.soundEffects
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {soundSettings.soundEffects ? t.on : t.off}
              </button>
            </div>

            {/* Music Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <Music className="w-4 h-4 text-purple-600" />
                <span>{t.backgroundMusic}</span>
              </div>
              <button
                type="button"
                onClick={toggleMusic}
                className={`px-3 py-1 text-xs font-display font-bold rounded-xl transition-all cursor-pointer ${
                  soundSettings.music
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {soundSettings.music ? t.on : t.off}
              </button>
            </div>

            {/* Volume Slider */}
            <div>
              <div className="flex justify-between text-[11px] font-medium text-slate-500 mb-1">
                <span>{t.volume}</span>
                <span>{Math.round(soundSettings.volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={soundSettings.volume}
                onChange={handleVolumeChange}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
            </div>
          </div>

          {/* PWA App Installation Trigger */}
          <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-1.5">
            <label className="block text-xs font-bold font-display text-amber-950">
              📱 Instalação no Celular (PWA)
            </label>
            <PWAInstallButton lang={currentLang} variant="settings" />
          </div>

          {/* Mobile Preview Frame Toggle */}
          <div className="p-3 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-medium text-indigo-900">
              <Smartphone className="w-4 h-4 text-indigo-600" />
              <span>{t.devicePreview}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                soundService.playTap();
                onToggleDevicePreview();
              }}
              className={`px-3 py-1 text-xs font-display font-bold rounded-xl transition-all cursor-pointer ${
                devicePreviewMode
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-200 text-slate-600'
              }`}
            >
              {devicePreviewMode ? 'iPhone Frame' : 'Full / Fluid'}
            </button>
          </div>

          {/* Account & Privacy Information */}
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>{t.accountSecurity}</span>
            </div>
            <div className="text-[11px] text-slate-500 leading-relaxed">
              <p>Usuário ativo: <span className="font-semibold text-slate-700">{currentUser.name}</span></p>
              {currentUser.email && (
                <p>E-mail: <span className="text-slate-600">{currentUser.email}</span></p>
              )}
              <p className="mt-1 text-emerald-700 font-medium">✓ {t.childProtectionNote}</p>
            </div>
          </div>

          {/* ⚙️ ÁREA DO DESENVOLVEDOR (Exclusiva para fabilhano@gmail.com) */}
          {isAdminUser(currentUser) && (
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-100/90 via-yellow-100 to-amber-100 border-2 border-amber-400 space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 font-display">
                  <span className="text-base">⚙️</span>
                  <span>{t.developerArea}</span>
                </div>
                <span className="text-[10px] font-extrabold bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full shadow-2xs">
                  ADMIN + DEV
                </span>
              </div>
              <p className="text-[11px] text-slate-700 font-sans leading-relaxed">
                Acesso exclusivo para <strong>fabilhano@gmail.com</strong> com estatísticas, gerenciamento de usuários e presença Firebase.
              </p>
              <button
                type="button"
                onClick={() => {
                  soundService.playTap();
                  onClose();
                  if (onOpenDeveloperArea) onOpenDeveloperArea();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-display font-extrabold text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-[0.98] transition-all"
              >
                <span>⚙️ Abrir Painel do Desenvolvedor</span>
              </button>
            </div>
          )}

          {/* Logout Button */}
          <button
            type="button"
            onClick={() => {
              soundService.playTap();
              onLogout();
              onClose();
            }}
            className="w-full py-2.5 px-4 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 font-display font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <LogOut size={16} />
            <span>{t.logout}</span>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
          <button
            onClick={() => {
              soundService.playTap();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-display font-bold text-sm cursor-pointer shadow-sm transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
