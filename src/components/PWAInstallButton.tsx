import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Language } from '../types';
import { soundService } from '../services/soundService';
import { Download, Smartphone, Share, PlusSquare, X, Check } from 'lucide-react';
import { MusicalMenteLogo } from './MusicalMenteLogo';

interface PWAInstallButtonProps {
  lang: Language;
  variant?: 'banner' | 'button' | 'settings';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  lang,
  variant = 'button',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSModal, setShowIOSModal] = useState(false);

  // If already installed and running standalone, do not show button
  if (isInstalled) {
    return null;
  }

  // Texts in the 3 official languages
  const labels = {
    'pt-BR': {
      installBtn: '📱 Instalar MusicalMente',
      installIOSBtn: '📱 Instalar no iPhone / iPad',
      iosTitle: 'Instalar no iPhone / iPad',
      iosSubtitle: 'Tenha o MusicalMente como um aplicativo nativo na sua tela de início!',
      step1Title: 'Passo 1',
      step1Desc: 'Toque no botão Compartilhar do Safari (o quadrado com a setinha para cima ⬆️ no menu inferior).',
      step2Title: 'Passo 2',
      step2Desc: 'Role as opções e toque em "Adicionar à Tela de Início" (+).',
      step3Title: 'Passo 3',
      step3Desc: 'Toque em "Adicionar" no canto superior direito. Pronto!',
      close: 'Entendi!',
      bannerText: 'Instale o aplicativo no seu celular para jogar com tela cheia!',
    },
    'fr-CA': {
      installBtn: '📱 Installer MusicalMente',
      installIOSBtn: '📱 Installer sur iPhone / iPad',
      iosTitle: 'Installer sur iPhone / iPad',
      iosSubtitle: 'Ajoutez MusicalMente comme une vraie application sur votre écran d’accueil!',
      step1Title: 'Étape 1',
      step1Desc: 'Touchez le bouton Partager dans Safari (le carré avec la flèche vers le haut ⬆️ en bas de l’écran).',
      step2Title: 'Étape 2',
      step2Desc: 'Faites défiler et sélectionnez "Sur l’écran d’accueil" (+).',
      step3Title: 'Étape 3',
      step3Desc: 'Touchez "Ajouter" en haut à droite. C’est tout!',
      close: 'Compris!',
      bannerText: 'Installez l’application sur votre appareil pour jouer en plein écran!',
    },
    'en-CA': {
      installBtn: '📱 Install MusicalMente',
      installIOSBtn: '📱 Install on iPhone / iPad',
      iosTitle: 'Install on iPhone / iPad',
      iosSubtitle: 'Add MusicalMente as a standalone app right on your home screen!',
      step1Title: 'Step 1',
      step1Desc: 'Tap the Share button in Safari (the square with the upward arrow ⬆️ at the bottom).',
      step2Title: 'Step 2',
      step2Desc: 'Scroll down and tap "Add to Home Screen" (+).',
      step3Title: 'Step 3',
      step3Desc: 'Tap "Add" in the top-right corner. All done!',
      close: 'Got it!',
      bannerText: 'Install the app on your mobile device for the full-screen experience!',
    },
  }[lang];

  const handleInstallClick = async () => {
    soundService.playTap();
    if (isInstallable) {
      await install();
    } else if (isIOS) {
      setShowIOSModal(true);
    }
  };

  // If not on iOS and not installable, show guidance modal on click or show nothing
  const shouldRender = isInstallable || isIOS;
  if (!shouldRender && variant !== 'settings') {
    return null;
  }

  return (
    <>
      {variant === 'banner' ? (
        <div className="w-full p-3 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-950 shadow-md border-2 border-amber-300 flex items-center justify-between gap-2 animate-pulse-glow">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-white/40 flex items-center justify-center shrink-0">
              <Download size={20} />
            </div>
            <div className="min-w-0">
              <div className="font-display font-bold text-xs truncate">
                {isIOS ? labels.installIOSBtn : labels.installBtn}
              </div>
              <div className="text-[10px] text-amber-900 truncate opacity-90">
                {labels.bannerText}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleInstallClick}
            className="px-3 py-1.5 rounded-xl bg-amber-950 text-white font-display font-bold text-xs shrink-0 cursor-pointer shadow hover:bg-black transition-colors"
          >
            Instalar
          </button>
        </div>
      ) : variant === 'settings' ? (
        <button
          type="button"
          onClick={() => {
            soundService.playTap();
            if (isInstallable) {
              install();
            } else {
              setShowIOSModal(true);
            }
          }}
          className="w-full py-2.5 px-3 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-display font-bold text-xs flex items-center justify-between transition-colors cursor-pointer border border-amber-200"
        >
          <div className="flex items-center gap-2">
            <Smartphone size={16} className="text-amber-700" />
            <span>{isIOS ? labels.installIOSBtn : labels.installBtn}</span>
          </div>
          <span className="text-[11px] font-semibold text-amber-800">Grátis</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={handleInstallClick}
          className="w-full py-3 px-4 rounded-2xl text-amber-950 font-display font-bold text-sm bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 shadow-md border-2 border-amber-200 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
        >
          <Download size={18} />
          <span>{isIOS ? labels.installIOSBtn : labels.installBtn}</span>
        </button>
      )}

      {/* iOS Safari Guided Install Modal */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm bg-white rounded-3xl p-5 shadow-2xl border-4 border-amber-400 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <h3 className="text-base font-bold font-display text-indigo-950">
                  {labels.iosTitle}
                </h3>
              </div>
              <button
                onClick={() => {
                  soundService.playTap();
                  setShowIOSModal(false);
                }}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* App Icon preview */}
            <div className="flex items-center gap-3 my-4 p-3 rounded-2xl bg-amber-50 border border-amber-200">
              <img
                src="/icon-192.png"
                alt="MusicalMente Icon"
                className="w-14 h-14 rounded-2xl shadow-md border border-white"
              />
              <div>
                <h4 className="font-display font-bold text-sm">
                  <MusicalMenteLogo variant="badge" />
                </h4>
                <p className="text-xs text-amber-800">
                  {labels.iosSubtitle}
                </p>
              </div>
            </div>

            {/* 3 Step Instructions */}
            <div className="space-y-3 mb-5 text-left">
              {/* Step 1 */}
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="w-6 h-6 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  1
                </div>
                <div className="text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900 block">{labels.step1Title}</span>
                  {labels.step1Desc}
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  2
                </div>
                <div className="text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900 block">{labels.step2Title}</span>
                  {labels.step2Desc}
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs">
                  3
                </div>
                <div className="text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-900 block">{labels.step3Title}</span>
                  {labels.step3Desc}
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                soundService.playTap();
                setShowIOSModal(false);
              }}
              className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-display font-bold text-sm shadow-md cursor-pointer transition-colors"
            >
              {labels.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
