import React, { useState } from 'react';
import { Language, UserProfile } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { soundService } from '../services/soundService';
import { LanguageSelector } from './LanguageSelector';
import { AvatarPickerModal } from './AvatarPickerModal';
import { ProfilePhotoPickerModal } from './ProfilePhotoPickerModal';
import { DeveloperLoginModal } from './DeveloperLoginModal';
import { AvatarDisplay } from './AvatarDisplay';
import { getAvatarById } from '../data/avatars';
import { ShieldCheck, Mail, Lock, User, Sparkles, Wrench, Camera, Eye, EyeOff, KeyRound, ArrowLeft } from 'lucide-react';
import { firebaseService, ADMIN_EMAIL } from '../services/firebaseService';

interface AuthModalProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onSuccess: (user: UserProfile) => void;
  initialMode?: 'login' | 'signup' | 'forgot';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  currentLang,
  onSelectLang,
  onSuccess,
  initialMode = 'login',
}) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [avatarId, setAvatarId] = useState('bear_maestro');
  const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined);
  const [hideAppleEmail, setHideAppleEmail] = useState(true);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [showPhotoPicker, setShowPhotoPicker] = useState(false);
  const [showDevLoginModal, setShowDevLoginModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successInfo, setSuccessInfo] = useState('');

  const t = TRANSLATIONS[currentLang];
  const selectedAvatar = getAvatarById(avatarId);

  // Google Login Simulation
  const handleGoogleAuth = () => {
    soundService.playTap();
    const googleUser: UserProfile = {
      id: 'g_' + Math.random().toString(36).substring(2, 9),
      name: 'Músico Google',
      email: 'usuario@gmail.com',
      loginMethod: 'google',
      language: currentLang,
      avatarId: 'bunny_pianist',
      highScore: 0,
      totalMatches: 0,
      totalCorrect: 0,
      totalQuestionsAnswered: 0,
      maxCombo: 0,
      unlockedAchievements: [],
      createdAt: new Date().toISOString(),
    };
    onSuccess(googleUser);
  };

  // Apple Login Simulation
  const handleAppleAuth = () => {
    soundService.playTap();
    const appleUser: UserProfile = {
      id: 'apple_' + Math.random().toString(36).substring(2, 9),
      name: 'Aluno Apple',
      email: hideAppleEmail ? 'music_kid@privaterelay.appleid.com' : 'aluno@icloud.com',
      loginMethod: 'apple',
      language: currentLang,
      avatarId: 'david_harp',
      highScore: 0,
      totalMatches: 0,
      totalCorrect: 0,
      totalQuestionsAnswered: 0,
      maxCombo: 0,
      unlockedAchievements: [],
      createdAt: new Date().toISOString(),
    };
    onSuccess(appleUser);
  };

  // Email Signup / Login
  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessInfo('');

    if (mode === 'signup') {
      if (!name.trim() || !email.trim() || !password.trim()) {
        soundService.playIncorrect();
        setErrorMessage(t.fillAllFields);
        return;
      }
      if (password !== confirmPassword) {
        soundService.playIncorrect();
        setErrorMessage(t.passwordsMustMatch);
        return;
      }

      soundService.playAchievement();
      const isAdm = email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
      const newUser: UserProfile = {
        id: isAdm ? 'admin_fabilhano' : 'usr_' + Date.now(),
        name: name.trim(),
        email: email.trim(),
        role: isAdm ? 'admin' : 'user',
        loginMethod: 'email',
        language: currentLang,
        avatarId,
        photoUrl,
        highScore: 0,
        totalMatches: 0,
        totalCorrect: 0,
        totalQuestionsAnswered: 0,
        maxCombo: 0,
        unlockedAchievements: [],
        createdAt: new Date().toISOString(),
      };
      firebaseService.syncUserProfile(newUser);
      onSuccess(newUser);
    } else if (mode === 'login') {
      if (!email.trim() || !password.trim()) {
        soundService.playIncorrect();
        setErrorMessage(t.fillAllFields);
        return;
      }
      soundService.playTap();
      const isAdm = email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
      const existingUser: UserProfile = {
        id: isAdm ? 'admin_fabilhano' : 'usr_' + Date.now(),
        name: email.split('@')[0],
        email: email.trim(),
        role: isAdm ? 'admin' : 'user',
        loginMethod: 'email',
        language: currentLang,
        avatarId,
        photoUrl,
        highScore: isAdm ? 3850 : 1200,
        totalMatches: isAdm ? 22 : 1,
        totalCorrect: isAdm ? 410 : 12,
        totalQuestionsAnswered: isAdm ? 440 : 20,
        maxCombo: isAdm ? 20 : 5,
        unlockedAchievements: isAdm
          ? ['first_correct', 'streak_5', 'streak_10', 'note_master']
          : ['first_correct'],
        createdAt: new Date().toISOString(),
      };
      firebaseService.syncUserProfile(existingUser);
      onSuccess(existingUser);
    } else if (mode === 'forgot') {
      if (!email.trim()) {
        soundService.playIncorrect();
        setErrorMessage(t.fillAllFields);
        return;
      }
      soundService.playTap();
      setSuccessInfo(t.resetLinkSent);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-gradient-to-br from-indigo-950/85 via-purple-950/80 to-amber-950/80 backdrop-blur-md overflow-y-auto"
      style={{
        paddingTop: 'max(env(safe-area-inset-top, 0px), 1rem)',
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 1rem)',
        paddingLeft: 'max(env(safe-area-inset-left, 0px), 0.75rem)',
        paddingRight: 'max(env(safe-area-inset-right, 0px), 0.75rem)',
      }}
    >
      {/* Playful Floating Music Notes & Sparkles in Backdrop */}
      <span className="pointer-events-none absolute top-10 left-8 text-3xl opacity-35 animate-float-note">🎵</span>
      <span className="pointer-events-none absolute bottom-16 right-10 text-3xl opacity-30 animate-float-note" style={{ animationDelay: '1.5s' }}>🎶</span>
      <span className="pointer-events-none absolute top-1/4 right-8 text-2xl opacity-25 animate-float-note" style={{ animationDelay: '0.8s' }}>𝄞</span>
      <span className="pointer-events-none absolute bottom-1/4 left-10 text-2xl opacity-25 animate-float-note" style={{ animationDelay: '2.1s' }}>⭐</span>

      {/* Main Login Card - Cheerful, Musical, Modern & Kid-Friendly */}
      <div className="relative w-full max-w-sm sm:max-w-md bg-white/98 rounded-[32px] p-5 sm:p-6 shadow-2xl border-4 border-amber-300 my-auto overflow-hidden box-border">
        {/* Subtle Decorative Rainbow Ribbon at Top of Card */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-indigo-500" />

        {/* Top Control Bar: Language Selector + Discreet Developer Button */}
        <div className="w-full flex items-center justify-between mb-3 pt-1">
          <div className="w-7 h-7" /> {/* Left spacer for perfect centering */}
          
          <div className="flex justify-center px-1">
            <LanguageSelector currentLang={currentLang} onSelectLang={onSelectLang} compact />
          </div>

          {/* Discreet Developer Access Icon (Admin / Tech access without public credentials) */}
          <button
            type="button"
            onClick={() => {
              soundService.playTap();
              setShowDevLoginModal(true);
            }}
            className="w-8 h-8 rounded-xl text-slate-300 hover:text-amber-600 hover:bg-amber-100/60 flex items-center justify-center transition-colors cursor-pointer"
            title="Acesso Técnico"
            aria-label="Acesso Técnico"
          >
            <Wrench size={15} />
          </button>
        </div>

        {/* Prominent Musical Brand Hero */}
        <div className="text-center mb-4">
          {/* Logo Original FermataQuiz (Preserved in exact 3D form) */}
          <div className="relative inline-block mx-auto mb-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 flex items-center justify-center shadow-lg border-4 border-white/90">
              <span className="text-3xl sm:text-4xl animate-bounce">🎵</span>
            </div>
            <span className="absolute -top-2 -right-2 text-xl animate-float-note">✨</span>
            <span className="absolute -bottom-1 -left-2 text-lg animate-float-note" style={{ animationDelay: '1s' }}>🎶</span>
          </div>

          {/* Name in ALL CAPS with 2 Harmonious Colors: MUSICAL (Color 1) + MENTE (Color 2) */}
          <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight flex items-center justify-center gap-0.5 mt-1">
            <span className="text-amber-500 drop-shadow-xs">MUSICAL</span>
            <span className="text-indigo-600 drop-shadow-xs">MENTE</span>
          </h1>

          {/* Kid-Friendly Subtitle / Badge */}
          <div className="mt-1.5 inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-950 text-[11px] font-display font-bold shadow-2xs">
            <span>🌟</span>
            <span>{t.loginQuizBadge}</span>
          </div>
          <p className="text-[11px] text-slate-500 font-sans mt-1">
            “{t.slogan}”
          </p>
        </div>

        {/* Mode Switch Tabs (Já tenho uma conta / Criar uma conta) */}
        <div className="flex items-center gap-1.5 mb-4 p-1.5 bg-gradient-to-r from-amber-100/90 via-orange-100/70 to-amber-100/90 rounded-2xl border border-amber-200/90 shadow-inner">
          <button
            type="button"
            onClick={() => {
              soundService.playTap();
              setMode('login');
              setErrorMessage('');
            }}
            className={`flex-1 py-2 px-2 text-xs font-black font-display rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              mode === 'login'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 shadow-sm border border-amber-300'
                : 'text-slate-600 hover:text-amber-950 hover:bg-white/40'
            }`}
          >
            <User size={13} className={mode === 'login' ? 'text-amber-950' : 'text-slate-500'} />
            <span>{t.alreadyHaveAccount}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              soundService.playTap();
              setMode('signup');
              setErrorMessage('');
            }}
            className={`flex-1 py-2 px-2 text-xs font-black font-display rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              mode === 'signup'
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 shadow-sm border border-amber-300'
                : 'text-slate-600 hover:text-amber-950 hover:bg-white/40'
            }`}
          >
            <Sparkles size={13} className={mode === 'signup' ? 'text-amber-950' : 'text-amber-500'} />
            <span>{t.createAccount}</span>
          </button>
        </div>

        {/* Error / Success Feedback */}
        {errorMessage && (
          <div className="mb-3.5 p-3 rounded-2xl bg-rose-50 border-2 border-rose-200 text-rose-800 text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-2xs">
            <span>⚠️</span>
            <span>{errorMessage}</span>
          </div>
        )}
        {successInfo && (
          <div className="mb-3.5 p-3 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-800 text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-2xs">
            <span>🎉</span>
            <span>{successInfo}</span>
          </div>
        )}

        {/* 1-Tap Social Logins (Google / Apple) */}
        {mode !== 'forgot' && (
          <div className="space-y-2 mb-3.5">
            {/* Google Sign-In */}
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="w-full py-2.5 px-4 rounded-2xl border-2 border-amber-200/80 hover:border-amber-400 bg-white hover:bg-amber-50/50 text-slate-800 font-display font-bold text-xs flex items-center justify-center gap-2.5 shadow-2xs transition-all cursor-pointer active:scale-98"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{t.continueWithGoogle}</span>
            </button>

            {/* Apple Sign-In */}
            <div className="space-y-1">
              <button
                type="button"
                onClick={handleAppleAuth}
                className="w-full py-2.5 px-4 rounded-2xl bg-slate-900 hover:bg-black text-white font-display font-bold text-xs flex items-center justify-center gap-2.5 shadow-2xs transition-all cursor-pointer active:scale-98"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.17.65-2.81 1.39-.56.64-1.05 1.71-.97 2.76 1.07.08 2.16-.53 2.77-1.28z" />
                </svg>
                <span>{t.continueWithApple}</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-0.5">
                <input
                  type="checkbox"
                  id="hideApple"
                  checked={hideAppleEmail}
                  onChange={(e) => setHideAppleEmail(e.target.checked)}
                  className="rounded text-amber-500 focus:ring-amber-400 cursor-pointer"
                />
                <label htmlFor="hideApple" className="cursor-pointer">
                  {t.appleHideEmail}
                </label>
              </div>
            </div>

            {/* Cheerful Separator with Musical Note */}
            <div className="relative flex py-1 items-center">
              <div className="grow border-t-2 border-amber-200/70"></div>
              <span className="shrink mx-2 text-[10px] font-black text-amber-900/60 uppercase tracking-wider flex items-center gap-1">
                <span>🎵</span> ou com seu e-mail <span>🎵</span>
              </span>
              <div className="grow border-t-2 border-amber-200/70"></div>
            </div>
          </div>
        )}

        {/* Email Form */}
        <form onSubmit={handleSubmitEmail} className="space-y-3">
          {/* Avatar / Photo Selection on Signup */}
          {mode === 'signup' && (
            <div className="p-3 bg-gradient-to-r from-amber-100/70 via-orange-50/60 to-yellow-100/70 rounded-2xl border-2 border-amber-300 flex items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-2.5">
                <AvatarDisplay
                  avatar={selectedAvatar}
                  photoUrl={photoUrl}
                  size="md"
                  shape="circle"
                  className="w-12 h-12 rounded-full border-2 border-amber-400 shadow-sm"
                />
                <div className="text-left">
                  <div className="text-xs font-black text-slate-800">
                    {photoUrl ? 'Sua Foto' : selectedAvatar.name}
                  </div>
                  <div className="text-[10px] text-amber-900/80 font-medium">
                    {photoUrl ? 'Foto personalizada' : selectedAvatar.instrumentOrRole}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setShowPhotoPicker(true)}
                  className="px-2.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-amber-950 font-display font-black text-[10px] shadow-2xs flex items-center gap-1 cursor-pointer transition-transform active:scale-95"
                  title="Tirar foto"
                >
                  <Camera size={12} />
                  <span>Foto</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowAvatarPicker(true)}
                  className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-display font-black text-[10px] shadow-2xs flex items-center gap-1 cursor-pointer transition-transform active:scale-95"
                  title="Escolher 3D"
                >
                  <Sparkles size={12} className="text-amber-500" />
                  <span>3D</span>
                </button>
              </div>
            </div>
          )}

          {/* Name Field (Only on signup) */}
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-black font-display text-slate-700 mb-1 flex items-center gap-1">
                <span>👤</span> {t.nameOrNickname}
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-2.5 w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center pointer-events-none">
                  <User size={13} />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome ou apelido"
                  className="w-full pl-10 pr-3 py-2 text-xs rounded-2xl border-2 border-amber-200/80 focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300/40 bg-amber-50/40 transition-colors font-medium text-slate-800 placeholder-slate-400"
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-xs font-black font-display text-slate-700 mb-1 flex items-center gap-1">
              <span>📧</span> {t.email}
            </label>
            <div className="relative flex items-center">
              <div className="absolute left-2.5 w-6 h-6 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center pointer-events-none">
                <Mail size={13} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="w-full pl-10 pr-3 py-2 text-xs rounded-2xl border-2 border-amber-200/80 focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300/40 bg-amber-50/40 transition-colors font-medium text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Password Field */}
          {mode !== 'forgot' && (
            <div>
              <label className="block text-xs font-black font-display text-slate-700 mb-1 flex items-center gap-1">
                <span>🔒</span> {t.password}
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-2.5 w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center pointer-events-none">
                  <Lock size={13} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-9 py-2 text-xs rounded-2xl border-2 border-amber-200/80 focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300/40 bg-amber-50/40 transition-colors font-medium text-slate-800 placeholder-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 text-slate-400 hover:text-amber-600 transition-colors cursor-pointer"
                  title={showPassword ? 'Ocultar senha' : 'Ver senha'}
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>
          )}

          {/* Confirm Password (Only on signup) */}
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-black font-display text-slate-700 mb-1 flex items-center gap-1">
                <span>🔑</span> {t.confirmPassword}
              </label>
              <div className="relative flex items-center">
                <div className="absolute left-2.5 w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center pointer-events-none">
                  <KeyRound size={13} />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-9 py-2 text-xs rounded-2xl border-2 border-amber-200/80 focus:border-amber-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300/40 bg-amber-50/40 transition-colors font-medium text-slate-800 placeholder-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2.5 text-slate-400 hover:text-amber-600 transition-colors cursor-pointer"
                  title={showConfirmPassword ? 'Ocultar senha' : 'Ver senha'}
                >
                  {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>
          )}

          {/* Submit Button: Chunky, Cheerful, 3D Musical Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-2xl text-white font-display font-black text-sm btn-3d-amber cursor-pointer mt-3 shadow-md flex items-center justify-center gap-2 active:scale-98 transition-transform"
          >
            {mode === 'login' && (
              <>
                <span>ENTRAR NO MUSICALMENTE</span>
                <span>🎵</span>
              </>
            )}
            {mode === 'signup' && (
              <>
                <span>CRIAR MINHA CONTA</span>
                <span>🚀</span>
              </>
            )}
            {mode === 'forgot' && (
              <>
                <span>{t.sendResetLink}</span>
                <span>✉️</span>
              </>
            )}
          </button>
        </form>

        {/* Links (Forgot Password & Back to Login) - ZERO Guest Link */}
        <div className="mt-3.5 flex flex-col items-center gap-2 text-xs text-slate-500">
          {mode === 'login' && (
            <button
              type="button"
              onClick={() => {
                soundService.playTap();
                setMode('forgot');
              }}
              className="text-amber-800 hover:text-amber-950 font-bold hover:underline cursor-pointer"
            >
              {t.forgotPassword}
            </button>
          )}

          {mode === 'forgot' && (
            <button
              type="button"
              onClick={() => {
                soundService.playTap();
                setMode('login');
              }}
              className="text-indigo-600 hover:text-indigo-800 font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              <ArrowLeft size={13} />
              <span>Voltar ao Login</span>
            </button>
          )}
        </div>

        {/* Child Safety Badge */}
        <div className="mt-4 pt-3 border-t-2 border-amber-100 flex items-center justify-center text-[10px] text-slate-500">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="text-emerald-500 w-4 h-4 shrink-0" />
            <span>Ambiente seguro para crianças e jovens. Seus dados estão protegidos.</span>
          </div>
        </div>
      </div>

      {/* Avatar Picker Modal */}
      {showAvatarPicker && (
        <AvatarPickerModal
          currentAvatarId={avatarId}
          lang={currentLang}
          onSelectAvatar={(id) => setAvatarId(id)}
          onOpenPhotoPicker={() => {
            setShowAvatarPicker(false);
            setShowPhotoPicker(true);
          }}
          onClose={() => setShowAvatarPicker(false)}
        />
      )}

      {/* Photo Picker Modal */}
      {showPhotoPicker && (
        <ProfilePhotoPickerModal
          currentPhotoUrl={photoUrl}
          onSavePhoto={(newPhotoUrl) => setPhotoUrl(newPhotoUrl)}
          onRemovePhoto={() => setPhotoUrl(undefined)}
          onClose={() => setShowPhotoPicker(false)}
        />
      )}

      {/* Developer Login Modal (Protected, independent auth) */}
      {showDevLoginModal && (
        <DeveloperLoginModal
          currentLang={currentLang}
          onSuccess={onSuccess}
          onClose={() => setShowDevLoginModal(false)}
        />
      )}
    </div>
  );
};
