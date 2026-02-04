// Enhanced local storage helper for saving user progress

export interface MoodEntry {
  date: string;
  mood: string;
  emoji: string;
  note?: string;
  energy: number;
  tags?: string[];
}

export interface UserProgress {
  currentSection: number;
  culpritThought: string;
  reframedThought: string;
  cleanupStep: {
    apologize: string;
    impact: string;
    promise: string;
    recommit: string;
  };
  missionProclamation: string;
  fundOfKnowledge: string;
  lastUpdated: string;
  completedSections: number[];
  moodHistory?: MoodEntry[];
  totalSessions?: number;
}

const STORAGE_KEY = 'battlefield_progress';
const MOOD_STORAGE_KEY = 'mood_tracker_data';

export const saveProgress = (progress: Partial<UserProgress>) => {
  if (typeof window === 'undefined') return;
  
  try {
    const existing = loadProgress();
    const updated = {
      ...existing,
      ...progress,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const loadProgress = (): Partial<UserProgress> => {
  if (typeof window === 'undefined') return {};
  
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error('Error loading progress:', error);
    return {};
  }
};

export const clearProgress = () => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing progress:', error);
  }
};

export const exportProgress = (): string => {
  const progress = loadProgress();
  return JSON.stringify(progress, null, 2);
};

export const importProgress = (data: string): boolean => {
  try {
    const progress = JSON.parse(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch (error) {
    console.error('Error importing progress:', error);
    return false;
  }
};

// Mood Tracker Functions
export const saveMoodEntry = (entry: MoodEntry) => {
  if (typeof window === 'undefined') return;
  
  try {
    const existing = loadMoodHistory();
    const updated = [entry, ...existing].slice(0, 365); // Keep last year
    localStorage.setItem(MOOD_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving mood entry:', error);
  }
};

export const loadMoodHistory = (): MoodEntry[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const saved = localStorage.getItem(MOOD_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading mood history:', error);
    return [];
  }
};

export const getMoodStats = () => {
  const history = loadMoodHistory();
  if (history.length === 0) return null;
  
  const moodCounts: Record<string, number> = {};
  let totalEnergy = 0;
  
  history.forEach(entry => {
    moodCounts[entry.mood] = (moodCounts[entry.mood] || 0) + 1;
    totalEnergy += entry.energy;
  });
  
  const mostCommonMood = Object.entries(moodCounts)
    .sort(([, a], [, b]) => b - a)[0];
  
  return {
    totalEntries: history.length,
    averageEnergy: totalEnergy / history.length,
    mostCommonMood: mostCommonMood ? mostCommonMood[0] : 'N/A',
    recentMoods: history.slice(0, 7),
    streak: calculateStreak(history),
  };
};

const calculateStreak = (history: MoodEntry[]): number => {
  if (history.length === 0) return 0;
  
  let streak = 1;
  const today = new Date().toDateString();
  
  if (history[0].date !== today) return 0;
  
  for (let i = 1; i < history.length; i++) {
    const prevDate = new Date(history[i - 1].date);
    const currDate = new Date(history[i].date);
    const diffDays = Math.floor((prevDate.getTime() - currDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }
  
  return streak;
};

// Auto-save indicator
export const getLastSaveTime = (): string | null => {
  const progress = loadProgress();
  return progress.lastUpdated || null;
};

// Data export with timestamp
export const exportAllData = (): string => {
  const progress = loadProgress();
  const moods = loadMoodHistory();
  
  return JSON.stringify({
    version: '1.0',
    exportDate: new Date().toISOString(),
    progress,
    moods,
  }, null, 2);
};

// Data import with validation
export const importAllData = (jsonString: string): boolean => {
  try {
    const data = JSON.parse(jsonString);
    
    if (data.progress) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data.progress));
    }
    
    if (data.moods) {
      localStorage.setItem(MOOD_STORAGE_KEY, JSON.stringify(data.moods));
    }
    
    return true;
  } catch (error) {
    console.error('Error importing data:', error);
    return false;
  }
};
