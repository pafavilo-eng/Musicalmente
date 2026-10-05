import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  query, 
  orderBy, 
  onSnapshot,
  updateDoc
} from 'firebase/firestore';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInAnonymously, 
  signOut as fbSignOut, 
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { db, auth } from '../firebase/config';
import { UserProfile, PublicPresence, DeveloperDashboardStats } from '../types';

export const ADMIN_EMAIL = 'fabilhano@gmail.com';

export function isAdminUser(user?: UserProfile | null): boolean {
  if (!user || !user.email) return false;
  return user.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();
}

// Initial community users to seed if collection is empty
const SEED_USERS: Omit<UserProfile, 'id'>[] = [
  {
    name: 'Sofia Flautista',
    email: 'sofia.flauta@exemplo.com',
    role: 'user',
    loginMethod: 'email',
    language: 'pt-BR',
    avatarId: 'bunny_pianist',
    highScore: 3850,
    totalMatches: 24,
    totalCorrect: 420,
    totalQuestionsAnswered: 480,
    maxCombo: 20,
    unlockedAchievements: ['first_correct', 'streak_5', 'streak_10', 'note_master'],
    isOnline: true,
    lastActivity: new Date(Date.now() - 1000 * 30).toISOString(),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString(),
  },
  {
    name: 'Lucas Violinista',
    email: 'lucas.musica@exemplo.com',
    role: 'user',
    loginMethod: 'email',
    language: 'pt-BR',
    avatarId: 'fox_violinist',
    highScore: 3720,
    totalMatches: 19,
    totalCorrect: 310,
    totalQuestionsAnswered: 380,
    maxCombo: 16,
    unlockedAchievements: ['first_correct', 'streak_5', 'streak_10'],
    isOnline: true,
    lastActivity: new Date(Date.now() - 1000 * 45).toISOString(),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
  },
  {
    name: 'Davi Harpa',
    email: 'davi.harpa@exemplo.com',
    role: 'user',
    loginMethod: 'google',
    language: 'pt-BR',
    avatarId: 'david_harp',
    highScore: 3600,
    totalMatches: 15,
    totalCorrect: 250,
    totalQuestionsAnswered: 300,
    maxCombo: 14,
    unlockedAchievements: ['first_correct', 'streak_5'],
    isOnline: false,
    lastActivity: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 8).toISOString(),
  },
  {
    name: 'Mateus Trompetista',
    email: 'mateus.trompete@exemplo.com',
    role: 'user',
    loginMethod: 'apple',
    language: 'pt-BR',
    avatarId: 'dog_trumpeter',
    highScore: 3450,
    totalMatches: 12,
    totalCorrect: 190,
    totalQuestionsAnswered: 240,
    maxCombo: 12,
    unlockedAchievements: ['first_correct'],
    isOnline: false,
    lastActivity: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6).toISOString(),
  },
  {
    name: 'Ana Clarinete',
    email: 'ana.clarinete@exemplo.com',
    role: 'user',
    loginMethod: 'email',
    language: 'fr-CA',
    avatarId: 'cat_violinist',
    highScore: 3100,
    totalMatches: 10,
    totalCorrect: 160,
    totalQuestionsAnswered: 200,
    maxCombo: 9,
    unlockedAchievements: ['first_correct'],
    isOnline: true,
    lastActivity: new Date(Date.now() - 1000 * 15).toISOString(),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4).toISOString(),
  },
  {
    name: 'Gabriel Maestro',
    email: 'gabriel.maestro@exemplo.com',
    role: 'user',
    loginMethod: 'email',
    language: 'en-CA',
    avatarId: 'lion_conductor',
    highScore: 2950,
    totalMatches: 8,
    totalCorrect: 120,
    totalQuestionsAnswered: 160,
    maxCombo: 8,
    unlockedAchievements: ['first_correct'],
    isOnline: false,
    lastActivity: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
  }
];

export const firebaseService = {
  // Authentication state listener
  onAuthChange(callback: (user: FirebaseUser | null) => void) {
    return onAuthStateChanged(auth, callback);
  },

  // Save or sync user profile to Firestore
  async syncUserProfile(user: UserProfile): Promise<void> {
    try {
      const isAdm = isAdminUser(user);
      const userRef = doc(db, 'users', user.id);
      
      const payload: Partial<UserProfile> = {
        id: user.id,
        name: user.name,
        email: user.email || '',
        role: isAdm ? 'admin' : (user.role || 'user'),
        loginMethod: user.loginMethod,
        language: user.language,
        avatarId: user.avatarId,
        photoUrl: user.photoUrl || '',
        highScore: user.highScore || 0,
        totalMatches: user.totalMatches || 0,
        totalCorrect: user.totalCorrect || 0,
        totalQuestionsAnswered: user.totalQuestionsAnswered || 0,
        maxCombo: user.maxCombo || 0,
        unlockedAchievements: user.unlockedAchievements || [],
        isOnline: true,
        lastActivity: new Date().toISOString(),
        createdAt: user.createdAt || new Date().toISOString(),
      };

      await setDoc(userRef, payload, { merge: true });

      // Also sync public presence
      await this.setPresence(user.id, user.name, user.avatarId, true, user.photoUrl);
    } catch (err) {
      console.warn('Firebase: Error syncing user profile:', err);
    }
  },

  // Update public presence doc (avatarId, name, isOnline, lastSeen, photoUrl)
  async setPresence(
    userId: string,
    name: string,
    avatarId: string,
    isOnline: boolean,
    photoUrl?: string
  ): Promise<void> {
    try {
      const presenceRef = doc(db, 'public_presence', userId);
      const now = Date.now();
      const payload: PublicPresence = {
        userId,
        name,
        avatarId,
        photoUrl: photoUrl || '',
        isOnline,
        lastSeen: now,
        updatedAt: new Date(now).toISOString(),
      };
      await setDoc(presenceRef, payload, { merge: true });

      // Also update in users collection if possible
      try {
        const userRef = doc(db, 'users', userId);
        await updateDoc(userRef, {
          isOnline,
          photoUrl: photoUrl || '',
          lastActivity: new Date(now).toISOString(),
        });
      } catch {}
    } catch (err) {
      console.warn('Firebase: Error updating presence:', err);
    }
  },

  // Real-time listener for public presence (all users can see who is online)
  subscribeToPublicPresence(callback: (presenceList: PublicPresence[]) => void) {
    try {
      const colRef = collection(db, 'public_presence');
      return onSnapshot(colRef, (snapshot) => {
        const list: PublicPresence[] = [];
        const now = Date.now();
        snapshot.forEach((d) => {
          const data = d.data() as PublicPresence;
          // Verify presence heartbeat timeout (60 seconds)
          // If isOnline is true but lastSeen is older than 60s, consider offline!
          const isReallyOnline = data.isOnline && (now - (data.lastSeen || 0) < 60000);
          list.push({
            ...data,
            isOnline: isReallyOnline,
          });
        });
        callback(list);
      }, (err) => {
        console.warn('Presence subscription warning:', err);
      });
    } catch (err) {
      console.warn('Presence subscription setup error:', err);
      return () => {};
    }
  },

  // Developer Dashboard: Fetch all registered users (Protected by Firestore Security Rules)
  async getRegisteredUsers(): Promise<UserProfile[]> {
    try {
      const usersCol = collection(db, 'users');
      const snap = await getDocs(usersCol);
      
      let users: UserProfile[] = [];
      snap.forEach((d) => {
        users.push(d.data() as UserProfile);
      });

      // If database was empty, seed with initial friendly demo users for instant developer inspection
      if (users.length === 0) {
        for (let i = 0; i < SEED_USERS.length; i++) {
          const s = SEED_USERS[i];
          const uid = `seed_user_${i + 1}`;
          const newDoc: UserProfile = { ...s, id: uid };
          await setDoc(doc(db, 'users', uid), newDoc);
          await this.setPresence(uid, s.name, s.avatarId, s.isOnline ?? false);
          users.push(newDoc);
        }
      }

      return users;
    } catch (err) {
      console.error('Firebase: Failed to get registered users (Check permissions):', err);
      throw err;
    }
  },

  // Real-time listener for users collection (for Developer Dashboard)
  subscribeToAllUsers(callback: (users: UserProfile[]) => void) {
    try {
      const usersCol = collection(db, 'users');
      return onSnapshot(usersCol, (snap) => {
        const users: UserProfile[] = [];
        snap.forEach((d) => {
          users.push(d.data() as UserProfile);
        });
        callback(users);
      }, (err) => {
        console.warn('Developer users subscription error:', err);
      });
    } catch {
      return () => {};
    }
  }
};
