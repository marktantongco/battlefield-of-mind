"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const sections = [
    {
      title: "The Battlefield of the Mind",
      icon: "🧠",
      color: "from-amber-500 to-orange-600",
      content: (
        <>
          <p className="text-lg leading-relaxed mb-6">
            Personal conflict is primarily fought in the <span className="font-bold">"battlefield of the mind,"</span> where entrenched patterns of thinking, or <span className="font-bold">"strongholds,"</span> lead to suspicion, doubt, and fear. To resolve these conflicts effectively, you must move from a <span className="font-bold">"victim" mentality</span>—blaming external circumstances—to an <span className="font-bold">"owner" mentality</span>, taking 100% accountability for your impact on the relationship.
          </p>
          
          <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center">
              <span className="mr-2">🔍</span> Identify the Internal Root
            </h3>
            <p className="text-slate-300 mb-4">
              Most conflicts are fueled by <span className="font-semibold">"wilderness mentalities"</span> such as blame-shifting or deterministic thinking. These mentalities trap you in cycles of frustration because they deny you the power to change the solution.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-slate-400 mb-2">What "culprit thought" is currently occupying your mind?</label>
                <input
                  type="text"
                  value={culpritThought}
                  onChange={(e) => setCulpritThought(e.target.value)}
                  placeholder="e.g., 'I'm damaged goods', 'My past defines me'"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-2">Reframe this thought with truth:</label>
                <input
                  type="text"
                  value={reframedThought}
                  onChange={(e) => setReframedThought(e.target.value)}
                  placeholder="e.g., 'I am fearfully and wonderfully made', 'My future is built on hope'"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center">
              <span className="mr-2">🔄</span> Shift from Content to Process
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-red-400 mb-2 flex items-center">
                  <span className="mr-2">❌</span> Avoid "You" Statements
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• "You&apos;re being ridiculous"</li>
                  <li>• "You always do this"</li>
                  <li>• "You never listen"</li>
                </ul>
                <p className="text-slate-400 mt-3 italic">These act as a "wagging finger" and evoke defensiveness.</p>
              </div>
              <div>
                <h4 className="font-bold text-emerald-400 mb-2 flex items-center">
                  <span className="mr-2">✅</span> Replace with "I" Statements
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• "I&apos;m having difficulty understanding"</li>
                  <li>• "I feel concerned when..."</li>
                  <li>• "I need clarity on..."</li>
                </ul>
                <p className="text-slate-400 mt-3 italic">These foster safety and open dialogue.</p>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      title: "The Cleanup Process",
      icon: "🧼",
      color: "from-blue-500 to-cyan-600",
      content: (
        <>
          <p className="text-lg leading-relaxed mb-6">
            To repair a relationship where damage has been done, use this structured four-step process. This moves the conflict from a <span className="font-bold">"broken record"</span> of blame to a <span className="font-bold">"winning story"</span> of shared recovery.
          </p>
          
          <div className="space-y-6">
            {[{
              step: 1,
              title: "Apologize",
              placeholder: "I sincerely apologize for...",
              key: "apologize"
            }, {
              step: 2,
              title: "Own the Impact",
              placeholder: "I take 100% accountability for the effect my actions had on you...",
              key: "impact"
            }, {
              step: 3,
              title: "Make a Promise",
              placeholder: "In the future, I will...",
              key: "promise"
            }, {
              step: 4,
              title: "Recommit",
              placeholder: "Our relationship is important to me because...",
              key: "recommit"
            }].map((item) => (
              <div key={item.step} className="bg-slate-900/70 border border-slate-700 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-1">
                    <span className="font-bold text-blue-300">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-300">{item.title}</h3>
                </div>
                <textarea
                  value={cleanupStep[item.key as keyof typeof cleanupStep]}
                  onChange={(e) => setCleanupStep(prev => ({...prev, [item.key]: e.target.value}))}
                  placeholder={item.placeholder}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 min-h-[100px] text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-800/50 rounded-xl">
            <p className="italic text-slate-300">
              <span className="font-bold">Remember:</span> Focus entirely on the <span className="font-semibold">impact</span>, not your intent. Avoid explaining "good intentions" as this rarely repairs damage. Immediately move toward the promise for the future.
            </p>
          </div>
        </>
      )
    },
    {
      title: "The Openly Mended Paradigm",
      icon: "✨",
      color: "from-purple-500 to-pink-600",
      content: (
        <>
          <p className="text-lg leading-relaxed mb-6">
            True resolution does not mean the absence of scars; it means <span className="font-bold">wholeness is found in the transparency</span> with which those scars are carried. By engaging <span className="font-bold">"eye-to-eye and heart-to-heart"</span> regarding shared brokenness, you dismantle the hierarchies that prevent authentic connection.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
                <span className="mr-2">💎</span> Your Scars as Bridges
              </h3>
              <p className="text-slate-300 mb-4">
                Instead of hiding your history, view your recovery process as a <span className="font-semibold">"fund of knowledge"</span> that provides you with unique authority to lead others. Your scars become bridges for authentic connection with those still in the "battlefield".
              </p>
              <div>
                <label className="block text-slate-400 mb-2">What past struggle has become your greatest bridge to others?</label>
                <input
                  type="text"
                  value={fundOfKnowledge}
                  onChange={(e) => setFundOfKnowledge(e.target.value)}
                  placeholder="e.g., 'My journey through addiction gives me empathy for others'"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-300 mb-4 flex items-center">
                <span className="mr-2">🛡️</span> Deconstruct Strongholds
              </h3>
              <p className="text-slate-300 mb-4">
                Practice meta-cognition by <span className="font-semibold">"thinking about what you are thinking about"</span> to identify "culprit" thoughts that label you as permanently flawed. Firmly reject the lie that your past determines your future.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                    <span>❌</span>
                  </div>
                  <span className="text-slate-400">"I am damaged goods"</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3">
                    <span>✅</span>
                  </div>
                  <span className="text-slate-300">"I am fearfully and wonderfully made"</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3">
                    <span>✅</span>
                  </div>
                  <span className="text-slate-300">"My past does not define my future"</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
              <span className="mr-2">🗣️</span> Verbalize Your Winning Story
            </h3>
            <p className="text-slate-300 mb-4">
              Gird your mind by proclaiming foundational truths about your identity as a <span className="font-semibold">"victor"</span>. This proclamation acts as a call to action for your mission.
            </p>
            <textarea
              value={missionProclamation}
              onChange={(e) => setMissionProclamation(e.target.value)}
              placeholder="My winning story: I am not defined by my past struggles, but empowered by my recovery to build institutions that heal others..."
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 min-h-[120px] text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </>
      )
    },
    {
      title: "Your Mission Architecture",
      icon: "🚀",
      color: "from-emerald-500 to-teal-600",
      content: (
        <>
          <p className="text-lg leading-relaxed mb-6">
            Your unique journey provides the architectural blueprint for building institutions that address the <span className="font-bold">"uncommunicated messages"</span> that lead to broken relationships. This shifts your goal from acquiring tangible corporate achievements to becoming someone truly valuable who empowers others to shine.
          </p>
          
          <div className="space-y-8">
            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center">
                <span className="mr-2">🧠</span> AI as Your Vocabulary of Hope
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Meta-Cognitive Monitoring",
                    desc: "AI prompts users to 'think about what they are thinking about,' identifying 'culprit' thoughts like 'I am damaged goods'"
                  },
                  {
                    title: "Narrative Reframing",
                    desc: "AI helps reframe history of relapse into a 'testimony of recovery' where users are 'openly mended'"
                  },
                  {
                    title: "Positive Scripting",
                    desc: "AI provides a 'litmus test' to distinguish lies from truth, replacing negative patterns with foundational proclamations"
                  },
                  {
                    title: "Victory Scripts",
                    desc: "AI generates personalized scripts that gird the mind for action: 'I'm not going there!'"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-4">
                    <h4 className="font-bold text-emerald-300 mb-2">{item.title}</h4>
                    <p className="text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900/70 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-teal-300 mb-4 flex items-center">
                <span className="mr-2">📜</span> Draft Your Mission Proclamation
              </h3>
              <p className="text-slate-300 mb-4">
                Craft a powerful statement that incorporates your history as a source of strength for your AI recovery institution:
              </p>
              <textarea
                value={missionProclamation}
                onChange={(e) => setMissionProclamation(e.target.value)}
                placeholder="Mission Proclamation: Through my journey of recovery, I architect AI-driven institutions that transform broken records into winning stories. My scars are not liabilities—they are the blueprint for healing others. I build not from a place of perfection, but from the powerful position of being openly mended."
                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 min-h-[150px] text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            
            <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-300 mb-3">Why This Matters</h3>
              <p className="text-slate-300">
                By leveraging your analytical engineering background and AI focus, you create digital environments where vulnerability becomes a bridge for shared wholeness. Your mission transforms uncommunicated messages of brokenness into technical architectures for human empowerment.
              </p>
            </div>
          </div>
        </>
      )
    }
  ];

  const handleComplete = () => {
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 6000);
  };

  const celebrationVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", damping: 5, stiffness: 100 }
    },
    exit: { 
      scale: 0, 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const confettiVariants = {
    initial: { y: "-100%", opacity: 1 },
    animate: {
      y: "100%",
      opacity: [1, 0.7, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "linear"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-50 font-sans selection:bg-amber-500/20">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-emerald-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-6 py-12 md:py-16">
        {/* Progress Navigation */}
        <div className="flex justify-between mb-12">
          {sections.map((section, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -5 }}
              onClick={() => setCurrentSection(index)}
              className={`flex flex-col items-center p-3 rounded-xl transition-all ${
                currentSection === index 
                  ? `bg-gradient-to-br ${section.color} text-slate-900 shadow-lg`
                  : 'bg-slate-800/50 hover:bg-slate-800'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                currentSection === index ? 'bg-white' : 'bg-slate-700'
              }`}>
                <span className={`text-xl ${currentSection === index ? 'text-slate-900' : 'text-slate-300'}`}>
                  {section.icon}
                </span>
              </div>
              <span className="text-sm font-medium text-center max-w-[120px]">
                {section.title}
              </span>
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
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-10 shadow-2xl mb-12"
          >
            <div className="flex items-start mb-8">
              <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${sections[currentSection].color} flex items-center justify-center mr-6`}>
                <span className="text-3xl">{sections[currentSection].icon}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                {sections[currentSection].title}
              </h1>
            </div>
            
            <div className="prose prose-slate max-w-none">
              {sections[currentSection].content}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-20">
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => currentSection > 0 && setCurrentSection(prev => prev - 1)}
            disabled={currentSection === 0}
            className={`px-6 py-3 rounded-xl font-medium text-lg transition-all ${
              currentSection === 0
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-slate-800/70 hover:bg-slate-700 text-slate-300'
            }`}
          >
            ← Previous
          </motion.button>
          
          {currentSection < sections.length - 1 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentSection(prev => prev + 1)}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-900 font-bold text-lg rounded-xl shadow-lg shadow-amber-500/30 transition-all"
            >
              Next Section →
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleComplete}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-slate-900 font-bold text-lg rounded-xl shadow-lg shadow-emerald-500/30 transition-all"
            >
              I&apos;VE RECALIBRATED →
            </motion.button>
          )}
        </div>

        {/* Final Call to Action */}
        {currentSection === sections.length - 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center max-w-3xl mx-auto p-8 bg-slate-900/50 border border-slate-800 rounded-2xl mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-rose-400">
              Your Transformation Is Complete
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              You&apos;ve moved from a <span className="font-bold">"broken record"</span> of conflict to a <span className="font-bold">"winning story"</span> of shared recovery. Your scars are now bridges. Your past is now power.
            </p>
            <p className="text-lg text-slate-400 italic max-w-2xl mx-auto">
              "Know that you are created to be more than enough. Special when you are born." 
              <br />
              <span className="text-slate-500">— This isn&apos;t just a text—it&apos;s your new foundation.</span>
            </p>
          </motion.div>
        )}
      </div>

      {/* Celebration Overlay */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div 
            variants={celebrationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-gradient-to-br from-slate-900/95 to-slate-950/95 z-50 flex flex-col items-center justify-center p-4"
          >
            {/* Confetti */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  variants={confettiVariants}
                  initial="initial"
                  animate="animate"
                  style={{
                    position: "absolute",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    backgroundColor: ["#f59e0b", "#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#0ea5e9"][
                      Math.floor(Math.random() * 6)
                    ],
                    borderRadius: Math.random() > 0.5 ? "50%" : "0",
                    transform: `rotate(${Math.random() * 360}deg)`,
                    opacity: Math.random() * 0.7 + 0.3
                  }}
                />
              ))}
            </div>
            
            <div className="text-center relative z-10 max-w-2xl mx-auto px-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 5, stiffness: 100, delay: 0.3 }}
                className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-500 to-emerald-500 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-amber-500/50 border-4 border-slate-900"
              >
                <span className="text-7xl">✨</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-emerald-400"
              >
                YOU ARE RECALIBRATED!
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-2xl text-slate-300 mb-10 max-w-2xl mx-auto"
              >
                Your winning story has begun. Your scars are now bridges. Your mission is clear.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex justify-center"
              >
                <div className="w-32 h-1.5 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: 0 }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-white"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-12 p-6 bg-slate-900/50 border border-slate-800 rounded-2xl max-w-2xl mx-auto"
              >
                <p className="text-xl font-bold mb-4">
                  "I am not defined by my past struggles, but empowered by my recovery to build institutions that heal others."
                </p>
                <p className="text-lg text-slate-400 italic">
                  — Your Mission Proclamation
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
