import { useEffect, useRef } from 'react';
import { UserProfile } from '../types';
import { firebaseService } from './firebaseService';

const HEARTBEAT_INTERVAL_MS = 20000; // 20 seconds
const INACTIVITY_TIMEOUT_MS = 120000; // 2 minutes

export class PresenceManager {
  private userId: string | null = null;
  private userName: string = '';
  private userAvatarId: string = '';
  private userPhotoUrl?: string = '';
  private heartbeatTimer: any = null;
  private lastActivityTime: number = Date.now();
  private isCurrentlyOnline: boolean = false;

  public init(user: UserProfile) {
    if (!user || !user.id) return;
    this.userId = user.id;
    this.userName = user.name;
    this.userAvatarId = user.avatarId;
    this.userPhotoUrl = user.photoUrl;

    this.markOnline();
    this.startHeartbeat();
    this.setupListeners();
  }

  public updateUserInfo(user: UserProfile) {
    if (this.userId !== user.id) {
      this.cleanup();
      this.init(user);
    } else {
      this.userName = user.name;
      this.userAvatarId = user.avatarId;
      this.userPhotoUrl = user.photoUrl;
      if (this.isCurrentlyOnline) {
        this.markOnline();
      }
    }
  }

  private setupListeners() {
    const recordActivity = () => {
      const now = Date.now();
      if (!this.isCurrentlyOnline) {
        this.markOnline();
      }
      this.lastActivityTime = now;
    };

    window.addEventListener('pointerdown', recordActivity, { passive: true });
    window.addEventListener('keydown', recordActivity, { passive: true });
    window.addEventListener('touchstart', recordActivity, { passive: true });

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        recordActivity();
      } else {
        // Tab went to background
        this.markOffline();
      }
    });

    window.addEventListener('beforeunload', () => {
      this.markOffline();
    });

    window.addEventListener('pagehide', () => {
      this.markOffline();
    });
  }

  private startHeartbeat() {
    this.stopHeartbeat();
    this.heartbeatTimer = setInterval(() => {
      if (!this.userId) return;

      const idleDuration = Date.now() - this.lastActivityTime;
      if (idleDuration > INACTIVITY_TIMEOUT_MS) {
        // User is idle
        if (this.isCurrentlyOnline) {
          this.markOffline();
        }
      } else if (document.visibilityState === 'visible') {
        // Active and visible: send heartbeat
        this.markOnline();
      }
    }, HEARTBEAT_INTERVAL_MS);
  }

  private stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  public markOnline() {
    if (!this.userId) return;
    this.isCurrentlyOnline = true;
    firebaseService.setPresence(this.userId, this.userName, this.userAvatarId, true, this.userPhotoUrl);
  }

  public markOffline() {
    if (!this.userId) return;
    this.isCurrentlyOnline = false;
    firebaseService.setPresence(this.userId, this.userName, this.userAvatarId, false, this.userPhotoUrl);
  }

  public cleanup() {
    this.markOffline();
    this.stopHeartbeat();
    this.userId = null;
  }
}

export const presenceManager = new PresenceManager();

export function usePresence(currentUser: UserProfile) {
  useEffect(() => {
    if (currentUser && currentUser.id) {
      presenceManager.init(currentUser);
    }

    return () => {
      presenceManager.cleanup();
    };
  }, [currentUser?.id]);

  useEffect(() => {
    if (currentUser && currentUser.id) {
      presenceManager.updateUserInfo(currentUser);
    }
  }, [currentUser?.name, currentUser?.avatarId, currentUser?.photoUrl]);
}
