import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sprout, 
  MapPin, 
  Layers, 
  CalendarDays, 
  Grid3X3, 
  HeartHandshake, 
  BookMarked,
  Info 
} from 'lucide-react';

import IntroductionHeader from './components/IntroductionHeader';
import YamAnatomy from './components/YamAnatomy';
import SoilGrowth from './components/SoilGrowth';
import PlantingTimeline from './components/PlantingTimeline';
import TrellisGuide from './components/TrellisGuide';
import HealthBenefits from './components/HealthBenefits';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const navItems = [
    { id: 'all', name: '📜 全景图海报', icon: <BookMarked className="w-4 h-4" /> },
    { id: 'anatomy', name: '🌱 块茎解剖', icon: <Sprout className="w-4 h-4" /> },
    { id: 'soil', name: '⛰️ 垄作土层', icon: <Layers className="w-4 h-4" /> },
    { id: 'timeline', name: '📅 种植日程', icon: <CalendarDays className="w-4 h-4" /> },
    { id: 'trellis', name: '🎋 竹架力学', icon: <Grid3X3 className="w-4 h-4" /> },
    { id: 'benefits', name: '🩺 药膳功效', icon: <HeartHandshake className="w-4 h-4" /> },
  ];

  // Scroll to element helper
  const scrollToSection = (id: string) => {
    setActiveTab(id);
    if (id !== 'all') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-stone-905 font-sans antialiased text-stone-800">
      {/* Header Announcement Bar */}
      <div className="bg-emerald-950 text-emerald-100 py-2.5 px-4 text-center text-xs font-mono font-bold tracking-wider flex items-center justify-center gap-1.5 border-b border-emerald-900">
        <MapPin className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
        <span>国家地理标志保护农产品首批核心展厅 · 湖北武穴梅川/余川原产红黄砂壤</span>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Navigation Sticky Bar */}
        <div className="sticky top-4 z-50 bg-[#FDFCF9]/95 backdrop-blur-md border border-stone-200 shadow-lg shadow-stone-100/50 rounded-2xl p-2.5 flex flex-wrap gap-1.5 justify-start md:justify-center items-center">
          <div className="mr-3 pl-2.5 border-r border-stone-200 py-1.5 hidden lg:flex items-center gap-2">
            <span className="text-xl font-serif font-black text-emerald-900 tracking-tight">佛手山药</span>
            <span className="text-[10px] font-mono bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full font-bold">交互展厅</span>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                activeTab === item.id
                  ? 'bg-emerald-700 text-white shadow-sm ring-1 ring-emerald-600/10'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Dashboard content grid wrapper */}
        <div className="space-y-10">
          
          {/* Section: Overview (Always visible at top) */}
          <div id="overview" className="scroll-mt-24">
            <IntroductionHeader />
          </div>

          {activeTab === 'all' || activeTab === 'anatomy' ? (
            <motion.div 
              id="anatomy" 
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <YamAnatomy />
            </motion.div>
          ) : null}

          {activeTab === 'all' || activeTab === 'soil' ? (
            <motion.div 
              id="soil" 
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <SoilGrowth />
            </motion.div>
          ) : null}

          {activeTab === 'all' || activeTab === 'timeline' ? (
            <motion.div 
              id="timeline" 
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <PlantingTimeline />
            </motion.div>
          ) : null}

          {activeTab === 'all' || activeTab === 'trellis' ? (
            <motion.div 
              id="trellis" 
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <TrellisGuide />
            </motion.div>
          ) : null}

          {activeTab === 'all' || activeTab === 'benefits' ? (
            <motion.div 
              id="benefits" 
              className="scroll-mt-24"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <HealthBenefits />
            </motion.div>
          ) : null}

        </div>

        {/* Footer info card */}
        <div className="border-t border-stone-200 pt-8 mt-12 text-center space-y-4">
          <p className="text-xs text-stone-500 font-serif leading-relaxed max-w-2xl mx-auto">
            “武穴佛手山药”互动信息可视化展厅由本草地理信息工程小组设计编制。 资料主要来源于《本草纲目》、武穴地方志与国家农产品地理标志保护核心产区梅川镇生产指导档案。
          </p>
          <div className="flex justify-center gap-6 text-[10px] font-mono text-stone-400 font-bold uppercase tracking-widest">
            <span>● HERITAGE MEDICINE</span>
            <span>● 100% ORGANIC SAND CLAY</span>
            <span>● NON-MATERIAL CULTURE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
