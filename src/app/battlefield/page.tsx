"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { saveProgress, loadProgress } from "@/lib/storage";
import { trackEvent } from "@/components/Analytics";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, ArrowLeft, Sparkles, Check, Download, Share2 } from "lucide-react";

export default function BattlefieldPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [culpritThought, setCulpritThought] = useState("");
  const [reframedThought, setReframedThought] = useState("");
  const [cleanupStep, setCleanupStep] = useState({
    apologize: "",
    impact: "",
    promise: "",
    recommit: ""
  });
  const [missionProclamation, setMissionProclamation] = useState("");
  const [fundOfKnowledge, setFundOfKnowledge] = useState("");

  // Load saved progress on mount
  useEffect(() => {
    const saved = loadProgress();
    if (saved.currentSection !== undefined) setCurrentSection(saved.currentSection);
    if (saved.culpritThought) setCulpritThought(saved.culpritThought);
    if (saved.reframedThought) setReframedThought(saved.reframedThought);
    if (saved.cleanupStep) setCleanupStep(saved.cleanupStep);
    if (saved.missionProclamation) setMissionProclamation(saved.missionProclamation);
    if (saved.fundOfKnowledge) setFundOfKnowledge(saved.fundOfKnowledge);
    
    trackEvent('battlefield_visit', { section: 'initial' });
  }, []);

  // Auto-save progress
  useEffect(() => {
    const progress = {
      currentSection,
      culpritThought,
      reframedThought,
      cleanupStep,
      missionProclamation,
      fundOfKnowledge,
      completedSections: [],
    };
    saveProgress(progress);
  }, [currentSection, culpritThought, reframedThought, cleanupStep, missionProclamation, fundOfKnowledge]);

  const handleComplete = () => {
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 6000);
    
    trackEvent('battlefield_completed', {
      sections_completed: 4,
      has_culprit_thought: !!culpritThought,
      has_reframed_thought: !!reframedThought,
      has_mission_proclamation: !!missionProclamation,
    });
  };

  const sections = [
    {
      title: "The Battlefield of the Mind",
      icon: "🧠",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      content: (
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p className="text-xl leading-relaxed">
              Personal conflict is primarily fought in the <span className="font-bold text-purple-600 dark:text-purple-400">"battlefield of the mind,"</span> where entrenched patterns of thinking, or <span className="font-bold text-purple-600 dark:text-purple-400">"strongholds,"</span> lead to suspicion, doubt, and fear.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-purple-200 dark:border-purple-800">
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
                <span className="mr-3 text-3xl">🔍</span> Identify Your Culprit Thought
              </h3>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                What limiting belief is occupying your mind?
              </label>
              <input
                type="text"
                value={culpritThought}
                onChange={(e) => setCulpritThought(e.target.value)}
                placeholder="e.g., 'I'm not good enough', 'My past defines me'"
                className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-purple-300 dark:border-purple-700 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 shadow-xl border-2 border-purple-300 dark:border-purple-700">
              <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
                <span className="mr-3 text-3xl">✨</span> Reframe with Truth
              </h3>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Replace the lie with an empowering truth:
              </label>
              <input
                type="text"
                value={reframedThought}
                onChange={(e) => setReframedThought(e.target.value)}
                placeholder="e.g., 'I am fearfully and wonderfully made'"
                className="w-full bg-white dark:bg-gray-800 border-2 border-purple-300 dark:border-purple-700 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The Cleanup Process",
      icon: "🧼",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      content: (
        <div className="space-y-6">
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-8">
            <p className="text-xl">
              Repair relationships with this powerful 4-step framework. Move from a <span className="font-bold text-blue-600 dark:text-blue-400">"broken record"</span> to a <span className="font-bold text-blue-600 dark:text-blue-400">"winning story"</span> of shared recovery.
            </p>
          </div>
          
          {[{
            step: 1,
            title: "Apologize",
            placeholder: "I sincerely apologize for...",
            key: "apologize",
            icon: "💙"
          }, {
            step: 2,
            title: "Own the Impact",
            placeholder: "I take 100% accountability for...",
            key: "impact",
            icon: "🎯"
          }, {
            step: 3,
            title: "Make a Promise",
            placeholder: "In the future, I will...",
            key: "promise",
            icon: "🤝"
          }, {
            step: 4,
            title: "Recommit",
            placeholder: "Our relationship matters because...",
            key: "recommit",
            icon: "💖"
          }].map((item) => (
            <div key={item.step} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{item.icon}</span>
                <div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      Step {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
              <textarea
                value={cleanupStep[item.key as keyof typeof cleanupStep]}
                onChange={(e) => setCleanupStep(prev => ({...prev, [item.key]: e.target.value}))}
                placeholder={item.placeholder}
                className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 min-h-[120px] text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Openly Mended Paradigm",
      icon: "✨",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
      content: (
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p className="text-xl">
              True healing means <span className="font-bold text-pink-600 dark:text-pink-400">wholeness found in transparency</span>. Your scars become bridges that connect you authentically with others.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-xl border-2 border-pink-300 dark:border-pink-700">
            <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-4 flex items-center">
              <span className="mr-3 text-3xl">💎</span> Your Fund of Knowledge
            </h3>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
              What past struggle has become your bridge to help others?
            </label>
            <input
              type="text"
              value={fundOfKnowledge}
              onChange={(e) => setFundOfKnowledge(e.target.value)}
              placeholder="e.g., 'My journey through loss taught me compassion'"
              className="w-full bg-white dark:bg-gray-800 border-2 border-pink-300 dark:border-pink-700 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-purple-200 dark:border-purple-800">
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 flex items-center">
              <span className="mr-3 text-3xl">🗣️</span> Your Winning Story
            </h3>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
              Proclaim your identity as a victor:
            </label>
            <textarea
              value={missionProclamation}
              onChange={(e) => setMissionProclamation(e.target.value)}
              placeholder="My winning story: I am not defined by my past, but empowered by my recovery..."
              className="w-full bg-gray-50 dark:bg-gray-900 border-2 border-purple-300 dark:border-purple-700 rounded-xl px-4 py-3 min-h-[150px] text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
            />
          </div>
        </div>
      )
    },
    {
      title: "Mission Architecture",
      icon: "🚀",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      content: (
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p className="text-xl">
              Your journey provides the blueprint for <span className="font-bold text-emerald-600 dark:text-emerald-400">building institutions that heal</span>. Channel your transformation into a mission that empowers others.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Meta-Cognitive AI", desc: "Help others identify limiting thoughts", icon: "🧠" },
              { title: "Narrative Reframing", desc: "Transform stories from victim to victor", icon: "📖" },
              { title: "Positive Scripting", desc: "Generate empowering self-talk", icon: "✍️" },
              { title: "Victory Architecture", desc: "Build systems for sustained growth", icon: "🏗️" }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-emerald-200 dark:border-emerald-800 hover:scale-105">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 shadow-xl border-2 border-emerald-300 dark:border-emerald-700">
            <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center">
              <span className="mr-3 text-3xl">📜</span> Draft Your Mission
            </h3>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
              How will you use your transformation to build institutions that heal?
            </label>
            <textarea
              value={missionProclamation}
              onChange={(e) => setMissionProclamation(e.target.value)}
              placeholder="Mission: Through my recovery, I architect AI-driven systems that transform broken records into winning stories..."
              className="w-full bg-white dark:bg-gray-800 border-2 border-emerald-300 dark:border-emerald-700 rounded-xl px-4 py-3 min-h-[180px] text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
            />
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Battlefield of the Mind
            </h1>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Section {currentSection + 1} of {sections.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${sections[currentSection].gradient}`}
              initial={{ width: 0 }}
              animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Section Navigation Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {sections.map((section, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setCurrentSection(index);
                trackEvent('section_navigation', { 
                  from_section: currentSection, 
                  to_section: index,
                  section_name: section.title 
                });
              }}
              className={`relative p-4 rounded-2xl transition-all ${
                currentSection === index
                  ? `bg-gradient-to-br ${section.gradient} text-white shadow-xl`
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              <div className="text-3xl mb-2">{section.icon}</div>
              <div className={`text-sm font-bold ${
                currentSection === index ? 'text-white' : 'text-gray-700 dark:text-gray-300'
              }`}>
                {section.title}
              </div>
              {currentSection === index && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-white/20 rounded-2xl"
                  initial={false}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Current Section Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 mb-12"
          >
            <div className="flex items-center mb-8">
              <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${sections[currentSection].gradient} flex items-center justify-center text-4xl shadow-lg`}>
                {sections[currentSection].icon}
              </div>
              <div className="ml-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {sections[currentSection].title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">Step {currentSection + 1} of {sections.length}</p>
              </div>
            </div>
            
            {sections[currentSection].content}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => currentSection > 0 && setCurrentSection(prev => prev - 1)}
            disabled={currentSection === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
              currentSection === 0
                ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Previous</span>
          </motion.button>
          
          {currentSection < sections.length - 1 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentSection(prev => prev + 1)}
              className={`flex items-center space-x-2 px-8 py-4 bg-gradient-to-r ${sections[currentSection].gradient} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all`}
            >
              <span>Next Section</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleComplete}
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Check className="w-5 h-5" />
              <span>Complete Journey</span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Celebration Modal */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-12 max-w-2xl text-center shadow-2xl"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-8xl mb-6"
              >
                ✨
              </motion.div>
              
              <h2 className="text-5xl font-bold text-white mb-4">
                YOU ARE RECALIBRATED!
              </h2>
              
              <p className="text-2xl text-white/90 mb-8">
                Your winning story has begun. Your scars are now bridges. Your mission is clear.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all">
                  <Download className="w-5 h-5" />
                  <span>Export Progress</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-all border-2 border-white/30">
                  <Share2 className="w-5 h-5" />
                  <span>Share Journey</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
