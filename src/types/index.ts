export type Language = 'pt-BR' | 'fr-CA' | 'en-CA';

export type Category = 
  | 'musica_e_som'
  | 'elementos_da_musica'
  | 'propriedades_do_som'
  | 'notas_musicais'
  | 'pentagrama_e_pauta'
  | 'claves';

export type Difficulty = 'facil' | 'medio' | 'dificil';

export interface QuestionTranslation {
  question: string;
  options: [string, string, string, string]; // exactly 4 alternatives
  explanation: string;
}

export interface Question {
  id: number;
  category: Category;
  difficulty: Difficulty;
  correctIndex: number; // 0, 1, 2, or 3
  staffData?: {
    clef: 'sol' | 'fa' | 'do';
    noteLine?: number; // 1-5 lines (bottom to top)
    noteSpace?: number; // 1-4 spaces (bottom to top)
    ledgerLine?: number; // -1 for below (Dó central), 1 for above
    noteName: string;
  };
  translations: Record<Language, QuestionTranslation>;
}

export interface ShuffledQuestion {
  id: number;
  category: Category;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctOptionIndex: number; // updated index after shuffle
  explanation: string;
  staffData?: Question['staffData'];
}

export interface AvatarOption {
  id: string;
  name: string;
  type: 'animal' | 'biblical';
  instrumentOrRole: string;
  image?: string;
  iconEmoji: string;
  accentColor: string;
  bgColor: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  role?: 'admin' | 'user';
  loginMethod: 'google' | 'apple' | 'email' | 'guest';
  language: Language;
  avatarId: string;
  photoUrl?: string;
  highScore: number;
  totalMatches: number;
  totalCorrect: number;
  totalQuestionsAnswered: number;
  maxCombo: number;
  unlockedAchievements: string[];
  isOnline?: boolean;
  lastActivity?: string;
  createdAt: string;
}

export interface PublicPresence {
  userId: string;
  name: string;
  avatarId: string;
  photoUrl?: string;
  isOnline: boolean;
  lastSeen: number;
  updatedAt: string;
}

export interface DeveloperDashboardStats {
  totalUsers: number;
  onlineUsers: number;
  offlineUsers: number;
  totalMatches: number;
  lastActivity: string;
}

export interface MatchResult {
  id: string;
  date: string;
  score: number;
  correctCount: number;
  totalQuestions: number;
  accuracy: number;
  maxCombo: number;
  totalTimeSeconds: number;
}

export interface RankingEntry {
  id: string;
  name: string;
  avatarId: string;
  score: number;
  correctCount: number;
  accuracy: number;
  maxCombo: number;
  period: 'today' | 'week' | 'month' | 'all';
}

export interface Achievement {
  id: string;
  icon: string;
  titleKey: string;
  descKey: string;
  color: string;
}

export interface SoundSettings {
  soundEffects: boolean;
  music: boolean;
  volume: number; // 0 to 1
}
