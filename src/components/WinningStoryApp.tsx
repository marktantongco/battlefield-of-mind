"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function WinningStoryApp() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const journeySections = [
    {
      title: "The Weight of the Past",
      subtitle: "A Nightmare of My Own Making",
      content:
        "I lived in that echo chamber for years. A place where the only sounds you can hear are the echoes of your past mistakes. My past was a heavy weight, a nightmare of my own making, built one poor decision at a time. I was trapped in a relentless cycle of relapse, navigating life with HIV and the consequences of my own actions. My relationships were characterized by anger, accusation and trash talk. Internally, I was locked in a constant, losing debate with myself, reinforcing the paralyzing belief that life is meaningless.",
      icon: "🌑",
      color: "from-rose-500 to-amber-500",
    },
    {
      title: "The Turning Point",
      subtitle: "A Love That Wouldn't Let Go",
      content:
        "People think a turning point is a lightning strike. For me, it wasn't like that. It was a quiet, profound internal shift—a moment when I finally chose to look up from the darkness. That shift was a spiritual awakening. I began to see that God works in mysterious ways. In a moment of absolute surrender, I heard: 'I will never leave you nor forsake you.' That was the beginning of my encounter with unconditional love and forgiveness—the love that set me free. There was no condemnation, no lecture. He just loved me. This radical acceptance gave me the strength to finally stand up and fight.",
      icon: "💫",
      color: "from-amber-400 to-amber-600",
    },
    {
      title: "The Reframing",
      subtitle: "Turning Wounds into Wisdom",
      content:
        "True healing isn't about erasing the past; it's about reinterpreting it. I came to a central revelation: my past struggles were not punishments. These things that came into my life are actually a gift for me to see how to overcome. My pain wasn't a barrier; it was a training ground. It equipped me with unique perspective and empathy. I learned that the greatest reward in life is to be able to stand up again each and every time that we fall. Our flaws are not liabilities; they are qualifications. Because we are imperfect, we are uniquely equipped to see, to forgive, and to lift each other.",
      icon: "🧠",
      color: "from-emerald-400 to-cyan-500",
    },
    {
      title: "The Mission",
      subtitle: "Winning Soul by Soul",
      content:
        "Purpose is found not in what we achieve for ourselves, but in what our journey enables us to do for others. Our scars give us unique credibility to help those who are still wounded. I made a declaration: 'I have seen life with HIV. I have seen life with drugs. Now I want to see life as a leader.' Not a corporate leader, but a leader for those that cannot stand because they are weak. This mission became the foundation of my life's work—the Winning Story Lab. Its philosophy: the greatest victory in life isn't a personal trophy, but a bridge built of kindness that connects you to another human being. Humanity's greatest stories are written soul by soul.",
      icon: "❤️‍🔥",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const truths = [
    {
      title: "Battlefield of the Mind",
      quote:
        "The greatest battle of life is not fought on a physical battlefield, but on the battlefield of the mind.",
      content:
        "The most defining conflict is the internal struggle between inherited negative thought patterns and the intentional mindset required for transformation. This is a deliberate break from unrenewed habit patterns in the brain that keep us stuck. Your mindset is the mental design that shapes your reality.",
    },
    {
      title: "Perspective Over Perfection",
      quote:
        "A 'winning story' is not characterized by the absence of conflict but by the narrative power used to interpret that conflict.",
      content:
        "A true winning story is never just about us. It's about using our experiences to connect with others, to build a bridge built of kindness over the chasm of human frailty. It's a conscious decision to choose empathy over judgment. Your struggles don't disqualify you—they become the raw material for a powerful and relatable story.",
    },
    {
      title: "Vulnerability as Connection",
      quote: "This isn't weakness; it's our shared language.",
      content:
        "Vulnerability is the essential interstitial site where authentic human engagement occurs. It is only when we acknowledge our shared brokenness, meeting others eye-to-eye, heart-to-heart, that we can genuinely lift each other up. Your imperfections are not a source of shame; they are your qualification to understand and help others.",
    },
    {
      title: "Openly Mended",
      quote:
        "Wholeness is found not in the absence of scars, but in the transparency with which you carry them.",
      content:
        "Healing isn't about erasing the past or returning to flawless perfection. It's about creating a new, resilient identity that acknowledges past trauma while asserting future agency. Your history of recovery becomes a rich fund of knowledge and a powerful testimony that can offer guidance and light to others.",
    },
    {
      title: "Active Hope",
      quote:
        "Hope is a 'gamble' on the future, a 'bet on the possibility that an open heart and uncertainty is better than gloom and safety'.",
      content:
        "True hope is a dynamic, active process—a conscious choice to act in the face of uncertainty. Cultivate a vocabulary of hope: the mental and linguistic tools to imagine and build a different future. Then comes proclamation—the verbalization of this new mindset. By speaking your hope, you worship the future you wish to bring into being.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-gray-100 font-sans overflow-x-hidden">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 py-4 px-6 md:px-12 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-md shadow-lg shadow-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
          >
            WINNING STORY LAB
          </motion.div>

          <div className="hidden md:flex space-x-1">
            {["Journey", "Truths", "Mission"].map((item, index) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeSection === index
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/10 hover:bg-white/20 text-gray-300"
                }`}
                onClick={() => setActiveSection(index)}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full font-medium shadow-lg shadow-purple-500/30 transition-all"
          >
            Start Your Journey
          </motion.button>
        </div>
      </motion.nav>

      <section className="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.15),transparent_40%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1),transparent_40%)] animate-pulse-slow" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
          >
            <span className="text-purple-300 font-medium">
              From Scars to Strengths
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 leading-tight"
          >
            Crafting Your <span className="text-purple-400">Winning Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your deepest wounds into your greatest wisdom. Your journey
            to resilience starts here.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-purple-500/30 transition-all"
            >
              Begin Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 border border-purple-500/30 text-purple-300 px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all"
            >
              Watch the Story →
            </motion.button>
          </div>
          <div className="mt-4">
            <Link
              href="/home-legacy"
              className="text-sm text-purple-300 hover:text-purple-200 underline underline-offset-4"
            >
              Visit the legacy homepage
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            {[
              { label: "Stories Transformed", value: "12.5K" },
              { label: "Community Rated", value: "4.9★" },
              { label: "Report Growth", value: "98%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-0" />
      </section>

      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-purple-900/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
            >
              <span className="text-purple-300 font-medium">
                The Transformation Journey
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300"
            >
              From Brokenness to <span className="text-purple-400">Purpose</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              Your journey isn't about erasing the past—it's about reframing it.
              Discover the four pivotal stages of transformation.
            </motion.p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/30 to-pink-500/30 transform -translate-x-1/2" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-16"
            >
              {journeySections.map((section, index) => (
                <motion.div
                  key={section.title}
                  variants={itemVariants}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  <div
                    className={`md:w-5/12 mb-8 md:mb-0 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="inline-block mb-4">
                      <div className="text-4xl mb-2">{section.icon}</div>
                      <div
                        className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${section.color}`}
                      >
                        {section.subtitle}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {section.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {section.content}
                    </p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`font-medium flex items-center ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span>Deepen Understanding</span>
                      <span className="ml-2">→</span>
                    </motion.button>
                  </div>

                  <div className="md:w-2/12 flex justify-center mb-8 md:mb-0 z-10">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${section.color} rounded-full blur-xl opacity-30 animate-ping`}
                      />
                      <div
                        className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center text-2xl font-bold border-2 border-purple-500/50`}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-5/12 flex justify-center">
                    <div className="w-full max-w-md h-64 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl border border-purple-500/20 flex items-center justify-center overflow-hidden">
                      <div className="text-center px-6">
                        <div className="text-6xl mb-4">✨</div>
                        <p className="text-gray-300">
                          Visual representation of transformation journey
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-purple-900/30 to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
            >
              <span className="text-purple-300 font-medium">
                Counter-Intuitive Truths
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300"
            >
              Rewiring Your <span className="text-purple-400">Mental Framework</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              Discover the five paradigm-shifting truths that transform how you see
              your struggles and your potential.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {truths.map((truth, index) => (
              <motion.div
                key={truth.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-gray-900/80 to-purple-900/30 border border-purple-500/20 rounded-2xl p-8 overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -mt-16 -mr-16 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tl from-purple-500/10 to-pink-500/10 rounded-full -mb-12 -ml-12 group-hover:scale-110 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="text-purple-400 text-lg font-bold mb-2">
                    Truth #{index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {truth.title}
                  </h3>
                  <blockquote className="text-purple-300 italic mb-4 border-l-2 border-purple-500 pl-4 py-1">
                    "{truth.quote}"
                  </blockquote>
                  <p className="text-gray-300 leading-relaxed">
                    {truth.content}
                  </p>

                  <motion.div
                    className="mt-6 flex items-center text-purple-300 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <span>Explore this truth</span>
                    <span className="ml-2">→</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-20 max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3">Your Scars Are Your Script</h3>
              <p className="text-gray-300 mb-6">
                Your struggles don't disqualify you—they uniquely qualify you to
                understand, empathize with, and help others on their journey. Your
                healing becomes your story, and your story becomes someone else's
                lifeline.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg shadow-purple-500/30 transition-all"
              >
                Craft Your Winning Story
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-900 to-purple-900/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(236,72,153,0.08),transparent_40%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
          >
            <span className="text-purple-300 font-medium">Your Story Begins Now</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 leading-tight"
          >
            Today is the Day the Lord Has Made
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Every single day is a choice. I choose to live by the words of Psalm
            118: "today is the day that the Lord has made; let us rejoice and be
            glad in it." This moment—right now—is just going to be the beginning
            of the greatest yet to come.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              {
                icon: "👀",
                title: "See the struggle",
                desc: "Behind every mask is a story waiting to be heard",
              },
              {
                icon: "🤝",
                title: "Choose kindness",
                desc: "When indifference feels easier, kindness transforms",
              },
              {
                icon: "✨",
                title: "Hold hope",
                desc: "For others when their own light flickers",
              },
            ].map((principle) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-500/20"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-gray-300">{principle.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mb-10"
          >
            <div className="text-6xl mb-4 animate-pulse-slow">❤️‍🔥</div>
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
              Imperfect, yet Perfectly Loved
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl shadow-purple-500/40 transition-all"
          >
            Start Crafting Your Story Today
          </motion.button>
        </div>
      </section>

      <footer className="py-12 px-6 md:px-12 bg-gradient-to-t from-gray-900 to-purple-900/10 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
              WINNING STORY LAB
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl">
              Transforming scars into strengths through authentic storytelling and
              community support. Your journey matters.
            </p>
            <div className="flex space-x-4">
              {[
                "📘",
                "🎧",
                "🎬",
                "✍️",
              ].map((icon) => (
                <motion.button
                  key={icon}
                  whileHover={{ y: -3 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-500/20 flex items-center justify-center text-2xl"
                >
                  {icon}
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-300">Journey Map</h3>
            <ul className="space-y-3">
              {[
                "Weight of the Past",
                "Turning Point",
                "The Reframing",
                "The Mission",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-purple-300">Core Truths</h3>
            <ul className="space-y-3">
              {[
                "Battlefield of Mind",
                "Perspective Over Perfection",
                "Vulnerability as Connection",
                "Active Hope",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-purple-500/20 text-center text-gray-500 text-sm">
          <p>
            Created to be a channel of blessings to many • © 2026 Winning Story
            Lab • All rights reserved
          </p>
          <p className="mt-2 text-purple-400/70">Imperfect, yet Perfectly Equipped</p>
        </div>
      </footer>
    </div>
  );
}
