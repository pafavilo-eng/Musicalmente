import { Language, MatchResult, RankingEntry, SoundSettings, UserProfile } from '../types';

const STORAGE_KEYS = {
  USER: 'fermataquiz_user_profile',
  MATCH_HISTORY: 'fermataquiz_matches',
  SOUND_SETTINGS: 'fermataquiz_sound_settings',
  PUBLIC_RANKINGS: 'fermataquiz_rankings_v2',
};

// Initial default user
export const DEFAULT_USER: UserProfile = {
  id: 'guest_student',
  name: 'Pequeno Maestro',
  loginMethod: 'guest',
  language: 'pt-BR',
  avatarId: 'bear_maestro',
  highScore: 0,
  totalMatches: 0,
  totalCorrect: 0,
  totalQuestionsAnswered: 0,
  maxCombo: 0,
  unlockedAchievements: [],
  createdAt: new Date().toISOString(),
};

export const DEFAULT_SOUNDS: SoundSettings = {
  soundEffects: true,
  music: true,
  volume: 0.7,
};

// Seed initial friendly kid rankings
const INITIAL_RANKINGS: RankingEntry[] = [
  { id: 'r1', name: 'Sofia Flautista', avatarId: 'bunny_pianist', score: 3850, correctCount: 20, accuracy: 100, maxCombo: 20, period: 'all' },
  { id: 'r2', name: 'Lucas Violinista', avatarId: 'fox_violinist', score: 3720, correctCount: 19, accuracy: 95, maxCombo: 16, period: 'all' },
  { id: 'r3', name: 'Davi Harpa', avatarId: 'david_harp', score: 3600, correctCount: 19, accuracy: 95, maxCombo: 14, period: 'all' },
  { id: 'r4', name: 'Mateus Trompetista', avatarId: 'dog_trumpeter', score: 3450, correctCount: 18, accuracy: 90, maxCombo: 12, period: 'all' },
  { id: 'r5', name: 'Ester Cantora', avatarId: 'esther', score: 3200, correctCount: 17, accuracy: 85, maxCombo: 10, period: 'all' },
  { id: 'r6', name: 'Gabriel Maestro', avatarId: 'lion_conductor', score: 2950, correctCount: 16, accuracy: 80, maxCombo: 9, period: 'all' },
  { id: 'r7', name: 'Benjamin Bateria', avatarId: 'monkey_percussionist', score: 2800, correctCount: 15, accuracy: 75, maxCombo: 8, period: 'all' },

  // Week & Month entries
  { id: 'rw1', name: 'Sofia Flautista', avatarId: 'bunny_pianist', score: 3850, correctCount: 20, accuracy: 100, maxCombo: 20, period: 'week' },
  { id: 'rw2', name: 'Davi Harpa', avatarId: 'david_harp', score: 3500, correctCount: 18, accuracy: 90, maxCombo: 13, period: 'week' },
  { id: 'rw3', name: 'Lucas Violinista', avatarId: 'fox_violinist', score: 3400, correctCount: 18, accuracy: 90, maxCombo: 11, period: 'week' },
  
  // Today entries
  { id: 'rt1', name: 'Lucas Violinista', avatarId: 'fox_violinist', score: 3400, correctCount: 18, accuracy: 90, maxCombo: 11, period: 'today' },
  { id: 'rt2', name: 'Ester Cantora', avatarId: 'esther', score: 3100, correctCount: 16, accuracy: 80, maxCombo: 8, period: 'today' },
];

export const storageService = {
  getUser(): UserProfile | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USER);
      if (data) return JSON.parse(data);
    } catch {}
    return null;
  },

  saveUser(user: UserProfile) {
    try {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    } catch {}
  },

  clearUser() {
    try {
      localStorage.removeItem(STORAGE_KEYS.USER);
    } catch {}
  },

  getSoundSettings(): SoundSettings {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SOUND_SETTINGS);
      if (data) return JSON.parse(data);
    } catch {}
    return DEFAULT_SOUNDS;
  },

  saveSoundSettings(settings: SoundSettings) {
    try {
      localStorage.setItem(STORAGE_KEYS.SOUND_SETTINGS, JSON.stringify(settings));
    } catch {}
  },

  getMatches(): MatchResult[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.MATCH_HISTORY);
      if (data) return JSON.parse(data);
    } catch {}
    return [];
  },

  saveMatch(match: MatchResult) {
    try {
      const matches = this.getMatches();
      matches.unshift(match);
      localStorage.setItem(STORAGE_KEYS.MATCH_HISTORY, JSON.stringify(matches.slice(0, 50)));
    } catch {}
  },

  getRankings(period: 'today' | 'week' | 'month' | 'all'): RankingEntry[] {
    let list: RankingEntry[] = [];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PUBLIC_RANKINGS);
      list = data ? JSON.parse(data) : INITIAL_RANKINGS;
    } catch {
      list = INITIAL_RANKINGS;
    }

    if (period === 'all') {
      return list.sort((a, b) => b.score - a.score);
    }

    const filtered = list.filter(r => r.period === period || r.period === 'all');
    return filtered.sort((a, b) => b.score - a.score);
  },

  recordScoreInRanking(user: UserProfile, match: MatchResult) {
    try {
      let list: RankingEntry[] = [];
      const data = localStorage.getItem(STORAGE_KEYS.PUBLIC_RANKINGS);
      list = data ? JSON.parse(data) : [...INITIAL_RANKINGS];

      // Add user entry for today and all-time
      const newEntry: RankingEntry = {
        id: 'usr_' + Date.now(),
        name: user.name,
        avatarId: user.avatarId,
        score: match.score,
        correctCount: match.correctCount,
        accuracy: match.accuracy,
        maxCombo: match.maxCombo,
        period: 'today',
      };

      list.push(newEntry);
      localStorage.setItem(STORAGE_KEYS.PUBLIC_RANKINGS, JSON.stringify(list));
    } catch {}
  },
};
