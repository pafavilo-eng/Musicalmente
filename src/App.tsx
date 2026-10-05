import React, { useState, useEffect } from 'react';
import { Language, MatchResult, ShuffledQuestion, SoundSettings, UserProfile } from './types';
import { DEFAULT_USER, DEFAULT_SOUNDS, storageService } from './services/storageService';
import { soundService } from './services/soundService';
import { selectMatchQuestions } from './data/questions';
import { ACHIEVEMENTS } from './data/achievements';
import { MobileHeader } from './components/MobileHeader';
import { DeviceFrame } from './components/DeviceFrame';
import { AuthModal } from './components/AuthModal';
import { HomeHub } from './components/HomeHub';
import { PrepMatchModal } from './components/PrepMatchModal';
import { QuizView } from './components/QuizView';
import { ResultView } from './components/ResultView';
import { RankingView } from './components/RankingView';
import { AchievementsView } from './components/AchievementsView';
import { HowToPlayView } from './components/HowToPlayView';
import { ProfileView } from './components/ProfileView';
import { SettingsModal } from './components/SettingsModal';
import { SplashScreen } from './components/SplashScreen';
import { OnlineUsersModal } from './components/OnlineUsersModal';
import { DeveloperDashboardView } from './components/DeveloperDashboardView';
import { usePresence } from './services/presenceService';
import { firebaseService, isAdminUser } from './services/firebaseService';

type AppScreen =
  | 'home'
  | 'quiz'
  | 'result'
  | 'ranking'
  | 'achievements'
  | 'how_to_play'
  | 'profile'
  | 'developer_dashboard';

export default function App() {
  // User profile
  const [currentUser, setCurrentUser] = useState<UserProfile>(() => {
    return storageService.getUser() || DEFAULT_USER;
  });

  // Sound settings
  const [soundSettings, setSoundSettings] = useState<SoundSettings>(() => {
    return storageService.getSoundSettings();
  });

  // Active language
  const [lang, setLang] = useState<Language>(currentUser.language || 'pt-BR');

  // Screen routing
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('home');

  // Modals
  const [showAuthModal, setShowAuthModal] = useState<boolean>(() => {
    // If user has not registered yet and is not set, prompt auth
    return !storageService.getUser();
  });
  const [showPrepModal, setShowPrepModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showOnlineModal, setShowOnlineModal] = useState(false);

  // Initialize and maintain automatic presence heartbeat with Firebase
  usePresence(currentUser);

  // Active quiz match data
  const [activeQuestions, setActiveQuestions] = useState<ShuffledQuestion[]>([]);
  const [lastMatchResult, setLastMatchResult] = useState<MatchResult | null>(null);

  // Mobile Device Frame Mode (Default false for pure native edge-to-edge mobile presentation)
  const [devicePreviewMode, setDevicePreviewMode] = useState<boolean>(false);

  // Splash Screen on initial app load
  const [showSplash, setShowSplash] = useState<boolean>(true);

  // Sync sound settings to service
  useEffect(() => {
    soundService.setSettings(
      soundSettings.soundEffects,
      soundSettings.music,
      soundSettings.volume
    );
  }, [soundSettings]);

  // Initial sync with Firebase on load
  useEffect(() => {
    if (currentUser && currentUser.id) {
      firebaseService.syncUserProfile(currentUser);
    }
  }, [currentUser?.id]);

  // Save user changes to local storage & Firebase
  const handleUpdateUser = (updated: UserProfile) => {
    setCurrentUser(updated);
    storageService.saveUser(updated);
    firebaseService.syncUserProfile(updated);
    if (updated.language && updated.language !== lang) {
      setLang(updated.language);
    }
  };

  // Change Language
  const handleSelectLanguage = (newLang: Language) => {
    setLang(newLang);
    const updated = { ...currentUser, language: newLang };
    handleUpdateUser(updated);
  };

  // Update Sound Settings
  const handleUpdateSoundSettings = (updated: SoundSettings) => {
    setSoundSettings(updated);
    storageService.saveSoundSettings(updated);
  };

  // Start new match preparation
  const handlePrepMatch = () => {
    setShowPrepModal(true);
  };

  // Confirm start match: randomly pick 20 questions strictly from MSA Fase 1
  const handleStartMatch = () => {
    setShowPrepModal(false);
    const matchQuestions = selectMatchQuestions(lang, 20);
    setActiveQuestions(matchQuestions);
    setCurrentScreen('quiz');
  };

  // Match completed
  const handleFinishMatch = (result: MatchResult) => {
    setLastMatchResult(result);
    storageService.saveMatch(result);
    storageService.recordScoreInRanking(currentUser, result);

    // Evaluate Achievements
    const unlocked = new Set(currentUser.unlockedAchievements || []);
    // 1. First correct
    if (result.correctCount > 0) {
      unlocked.add('first_correct');
    }
    // 2. 5 matches completed
    const newTotalMatches = currentUser.totalMatches + 1;
    if (newTotalMatches >= 5) {
      unlocked.add('music_master');
    }
    // 3. 5-streak combo
    if (result.maxCombo >= 5) {
      unlocked.add('streak_5');
    }
    // 4. 10-streak combo
    if (result.maxCombo >= 10) {
      unlocked.add('streak_10');
    }
    // 5. 15+ correct in a match
    if (result.correctCount >= 15) {
      unlocked.add('note_master');
    }
    // 6. Score > 2000
    if (result.score >= 2000) {
      unlocked.add('great_apprentice');
    }
    // 7. Perfect match (20/20)
    if (result.correctCount === 20) {
      unlocked.add('fermata_champ');
    }
    // 8. Clef Specialist
    if (result.accuracy >= 90) {
      unlocked.add('clef_specialist');
    }

    const updatedUser: UserProfile = {
      ...currentUser,
      highScore: Math.max(currentUser.highScore || 0, result.score),
      totalMatches: newTotalMatches,
      totalCorrect: currentUser.totalCorrect + result.correctCount,
      totalQuestionsAnswered: currentUser.totalQuestionsAnswered + result.totalQuestions,
      maxCombo: Math.max(currentUser.maxCombo || 0, result.maxCombo),
      unlockedAchievements: Array.from(unlocked),
    };

    handleUpdateUser(updatedUser);
    setCurrentScreen('result');
  };

  // Auth Success
  const handleAuthSuccess = (user: UserProfile) => {
    handleUpdateUser(user);
    setShowAuthModal(false);
  };

  // Logout
  const handleLogout = () => {
    storageService.clearUser();
    setCurrentUser(DEFAULT_USER);
    setShowAuthModal(true);
    setCurrentScreen('home');
  };

  return (
    <DeviceFrame
      enabled={devicePreviewMode}
      onToggle={() => setDevicePreviewMode(!devicePreviewMode)}
    >
      <div className="w-full min-h-screen bg-[#fdfaf3] text-slate-800 flex flex-col font-sans">
        {/* Mobile Header (hidden during active quiz & developer dashboard for maximum focus) */}
        {currentScreen !== 'quiz' && currentScreen !== 'developer_dashboard' && (
          <MobileHeader
            currentUser={currentUser}
            lang={lang}
            soundEffects={soundSettings.soundEffects}
            onToggleSound={() => {
              const updated = {
                ...soundSettings,
                soundEffects: !soundSettings.soundEffects,
              };
              handleUpdateSoundSettings(updated);
            }}
            onOpenSettings={() => setShowSettingsModal(true)}
            onOpenProfile={() => setCurrentScreen('profile')}
          />
        )}

        {/* Screen Routing */}
        <main className="flex-1 flex flex-col">
          {currentScreen === 'home' && (
            <HomeHub
              currentUser={currentUser}
              lang={lang}
              onStartQuiz={handlePrepMatch}
              onOpenRanking={() => setCurrentScreen('ranking')}
              onOpenProfile={() => setCurrentScreen('profile')}
              onOpenAchievements={() => setCurrentScreen('achievements')}
              onOpenHowToPlay={() => setCurrentScreen('how_to_play')}
              onOpenSettings={() => setShowSettingsModal(true)}
              onOpenOnlineUsers={() => setShowOnlineModal(true)}
              onOpenDeveloperArea={() => setCurrentScreen('developer_dashboard')}
            />
          )}

          {currentScreen === 'quiz' && (
            <QuizView
              questions={activeQuestions}
              currentUser={currentUser}
              lang={lang}
              onFinishMatch={handleFinishMatch}
              onExitQuiz={() => setCurrentScreen('home')}
            />
          )}

          {currentScreen === 'result' && lastMatchResult && (
            <ResultView
              result={lastMatchResult}
              currentUser={currentUser}
              lang={lang}
              onPlayAgain={handleStartMatch}
              onViewRanking={() => setCurrentScreen('ranking')}
              onGoHome={() => setCurrentScreen('home')}
            />
          )}

          {currentScreen === 'ranking' && (
            <RankingView
              lang={lang}
              onBack={() => setCurrentScreen('home')}
            />
          )}

          {currentScreen === 'achievements' && (
            <AchievementsView
              currentUser={currentUser}
              lang={lang}
              onBack={() => setCurrentScreen('home')}
            />
          )}

          {currentScreen === 'how_to_play' && (
            <HowToPlayView
              lang={lang}
              onBack={() => setCurrentScreen('home')}
              onStartPlay={handlePrepMatch}
            />
          )}

          {currentScreen === 'profile' && (
            <ProfileView
              currentUser={currentUser}
              lang={lang}
              soundSettings={soundSettings}
              onUpdateUser={handleUpdateUser}
              onUpdateSoundSettings={handleUpdateSoundSettings}
              onSelectLang={handleSelectLanguage}
              onBack={() => setCurrentScreen('home')}
            />
          )}

          {currentScreen === 'developer_dashboard' && (
            <DeveloperDashboardView
              currentUser={currentUser}
              lang={lang}
              onBack={() => setCurrentScreen('home')}
            />
          )}
        </main>

        {/* Auth Modal (if user opens or on first access) */}
        {showAuthModal && (
          <AuthModal
            currentLang={lang}
            onSelectLang={handleSelectLanguage}
            onSuccess={handleAuthSuccess}
          />
        )}

        {/* Match Preparation Dialog */}
        {showPrepModal && (
          <PrepMatchModal
            currentUser={currentUser}
            lang={lang}
            onConfirmStart={handleStartMatch}
            onClose={() => setShowPrepModal(false)}
            onSelectLang={handleSelectLanguage}
          />
        )}

        {/* Global Settings Modal */}
        {showSettingsModal && (
          <SettingsModal
            currentLang={lang}
            onSelectLang={handleSelectLanguage}
            soundSettings={soundSettings}
            onUpdateSoundSettings={handleUpdateSoundSettings}
            currentUser={currentUser}
            onLogout={handleLogout}
            devicePreviewMode={devicePreviewMode}
            onToggleDevicePreview={() => setDevicePreviewMode(!devicePreviewMode)}
            onClose={() => setShowSettingsModal(false)}
            onOpenDeveloperArea={() => setCurrentScreen('developer_dashboard')}
          />
        )}

        {/* Online Users Modal (Public view for authenticated users) */}
        {showOnlineModal && (
          <OnlineUsersModal
            currentUser={currentUser}
            lang={lang}
            onClose={() => setShowOnlineModal(false)}
          />
        )}

        {/* 3D Initial Splash Screen */}
        {showSplash && (
          <SplashScreen
            lang={lang}
            onFinish={() => setShowSplash(false)}
          />
        )}
      </div>
    </DeviceFrame>
  );
}
