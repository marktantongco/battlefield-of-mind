"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { saveMoodEntry, loadMoodHistory, getMoodStats, MoodEntry } from '@/lib/storage';
import { Calendar, TrendingUp, Sparkles, Heart, Coffee, Zap, Cloud, Sun, Moon as MoonIcon } from 'lucide-react';

const moods = [
  { name: 'Amazing', emoji: '🤩', color: 'from-yellow-400 to-orange-500', energy: 5 },
  { name: 'Happy', emoji: '😊', color: 'from-green-400 to-emerald-500', energy: 4 },
  { name: 'Good', emoji: '🙂', color: 'from-blue-400 to-cyan-500', energy: 3 },
  { name: 'Okay', emoji: '😐', color: 'from-gray-400 to-slate-500', energy: 2 },
  { name: 'Low', emoji: '😔', color: 'from-indigo-400 to-purple-500', energy: 1 },
  { name: 'Anxious', emoji: '😰', color: 'from-orange-400 to-red-500', energy: 2 },
];

const energyLevels = [
  { level: 1, label: 'Exhausted', icon: Cloud, color: 'text-gray-400' },
  { level: 2, label: 'Low', icon: Coffee, color: 'text-blue-400' },
  { level: 3, label: 'Moderate', icon: Heart, color: 'text-purple-400' },
  { level: 4, label: 'Good', icon: Sun, color: 'text-yellow-400' },
  { level: 5, label: 'Energized', icon: Zap, color: 'text-orange-400' },
];

export default function MoodTrackerPage() {
  const [selectedMood, setSelectedMood] = useState<typeof moods[0] | null>(null);
  const [energy, setEnergy] = useState(3);
  const [note, setNote] = useState('');
  const [history, setHistory] = useState<MoodEntry[]>([]);
  const [stats, setStats] = useState<ReturnType<typeof getMoodStats>>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setHistory(loadMoodHistory());
    setStats(getMoodStats());
  }, []);

  const handleSaveMood = () => {
    if (!selectedMood) return;

    const entry: MoodEntry = {
      date: new Date().toISOString(),
      mood: selectedMood.name,
      emoji: selectedMood.emoji,
      energy,
      note: note.trim() || undefined,
    };

    saveMoodEntry(entry);
    setHistory([entry, ...loadMoodHistory()]);
    setStats(getMoodStats());
    
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedMood(null);
      setNote('');
      setEnergy(3);
    }, 2000);
  };

  const todayLogged = history.some(
    entry => new Date(entry.date).toDateString() === new Date().toDateString()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Mood Tracker
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Track your emotional journey and build self-awareness
          </p>
        </motion.div>

        {/* Stats Cards */}
        {stats && stats.totalEntries > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-purple-200 dark:border-purple-800"
            >
              <Calendar className="w-8 h-8 text-purple-500 mb-2" />
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.streak}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Day Streak</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-pink-200 dark:border-pink-800"
            >
              <Heart className="w-8 h-8 text-pink-500 mb-2" />
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalEntries}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Entries</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-orange-200 dark:border-orange-800"
            >
              <Zap className="w-8 h-8 text-orange-500 mb-2" />
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.averageEnergy.toFixed(1)}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Energy</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-blue-200 dark:border-blue-800"
            >
              <Sparkles className="w-8 h-8 text-blue-500 mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.mostCommonMood}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Common Mood</p>
            </motion.div>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Log Mood Section */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">✨</span>
              How are you feeling?
            </h2>

            {todayLogged && !showSuccess ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Already logged today!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Check back tomorrow to continue your streak
                </p>
              </div>
            ) : (
              <>
                {/* Mood Selection */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {moods.map((mood) => (
                    <motion.button
                      key={mood.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedMood(mood)}
                      className={`relative p-4 rounded-2xl transition-all ${
                        selectedMood?.name === mood.name
                          ? `bg-gradient-to-br ${mood.color} text-white shadow-xl`
                          : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <div className="text-4xl mb-2">{mood.emoji}</div>
                      <div className={`text-sm font-medium ${
                        selectedMood?.name === mood.name ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                      }`}>
                        {mood.name}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Energy Level */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Energy Level
                  </label>
                  <div className="flex justify-between items-center gap-2">
                    {energyLevels.map((level) => {
                      const Icon = level.icon;
                      return (
                        <motion.button
                          key={level.level}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setEnergy(level.level)}
                          className={`p-3 rounded-xl transition-all ${
                            energy === level.level
                              ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg'
                              : 'bg-gray-100 dark:bg-gray-700'
                          }`}
                        >
                          <Icon className={`w-6 h-6 ${energy === level.level ? 'text-white' : level.color}`} />
                        </motion.button>
                      );
                    })}
                  </div>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
                    {energyLevels.find(l => l.level === energy)?.label}
                  </p>
                </div>

                {/* Note */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Add a note (optional)
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  />
                </div>

                {/* Save Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSaveMood}
                  disabled={!selectedMood}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    selectedMood
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Log Mood
                </motion.button>
              </>
            )}
          </div>

          {/* History Section */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-purple-500" />
              Recent Moods
            </h2>

            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {history.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">📊</div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Start tracking to see your mood history
                  </p>
                </div>
              ) : (
                history.map((entry, index) => {
                  const moodData = moods.find(m => m.name === entry.mood);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`p-4 rounded-xl bg-gradient-to-r ${moodData?.color} bg-opacity-10 border border-gray-200 dark:border-gray-700`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{entry.emoji}</span>
                          <div>
                            <p className="font-bold text-gray-900 dark:text-white">{entry.mood}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {new Date(entry.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {[...Array(entry.energy)].map((_, i) => (
                            <Zap key={i} className="w-4 h-4 text-orange-500" />
                          ))}
                        </div>
                      </div>
                      {entry.note && (
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 italic">
                          "{entry.note}"
                        </p>
                      )}
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Success Animation */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: 3, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-12 text-center shadow-2xl"
            >
              <div className="text-8xl mb-4">🎉</div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Mood Logged!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Keep tracking to build insights
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
