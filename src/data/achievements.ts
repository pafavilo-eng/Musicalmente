import { Achievement } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_correct',
    icon: '⭐',
    titleKey: 'ach_first_correct_title',
    descKey: 'ach_first_correct_desc',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    id: 'music_master',
    icon: '🏆',
    titleKey: 'ach_music_master_title',
    descKey: 'ach_music_master_desc',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'streak_5',
    icon: '🎵',
    titleKey: 'ach_streak_5_title',
    descKey: 'ach_streak_5_desc',
    color: 'from-sky-400 to-blue-500',
  },
  {
    id: 'streak_10',
    icon: '🎶',
    titleKey: 'ach_streak_10_title',
    descKey: 'ach_streak_10_desc',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    id: 'clef_specialist',
    icon: '🎼',
    titleKey: 'ach_clef_specialist_title',
    descKey: 'ach_clef_specialist_desc',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 'note_master',
    icon: '🎹',
    titleKey: 'ach_note_master_title',
    descKey: 'ach_note_master_desc',
    color: 'from-rose-400 to-pink-500',
  },
  {
    id: 'great_apprentice',
    icon: '🌟',
    titleKey: 'ach_great_apprentice_title',
    descKey: 'ach_great_apprentice_desc',
    color: 'from-yellow-400 to-amber-600',
  },
  {
    id: 'fermata_champ',
    icon: '👑',
    titleKey: 'ach_fermata_champ_title',
    descKey: 'ach_fermata_champ_desc',
    color: 'from-purple-500 to-pink-600',
  },
];
