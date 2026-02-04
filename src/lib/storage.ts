// Local storage helper for saving user progress

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
}

const STORAGE_KEY = 'battlefield_progress';

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
