import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Shield, Milestone, Sprout } from 'lucide-react';
// @ts-ignore
import farmerImg from '../assets/images/watercolor_farmer_yam_1781772360838.jpg';

export default function IntroductionHeader() {
  const historyStories = [
    {
      icon: <Sprout className="w-5 h-5 text-emerald-700" />,
      title: "佛缘起源 · 禅农并重",
      content: "禅宗四祖司马道信在横岗山、屡峰山修行，倡导“农禅并重”。为补僧众劳作、诵经体能，他将野山药引入禅寺园。传闻久听梵音，山药由长条渐变为手掌（佛手）形态，故名“佛手山药”，被奉为“佛药”。"
    },
    {
      icon: <BookOpen className="w-5 h-5 text-amber-700" />,
      title: "草本药菜 · 时珍正名",
      content: "李时珍在《本草纲目》中正式称其为“佛手山药”，详细记载了其理虚、滋补益寿、健脾益胃等功效，特地将山药从“草部”归入“菜部”，确立其药食同源的核心地位。"
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-700" />,
      title: "国家标志 · 地理保护",
      content: "2009年，武穴佛手山药正式获得国家农产品地理标志保护。其核心产区为鄂东的大别山余脉（梅川镇、余川镇），这里有得天独厚的酸性红黄砂壤土与湿润气候。"
    }
  ];

  return (
    <div className="bg-[#FAF8F5] border border-stone-200 rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Calligraphy Title and Introduction */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-stone-500 font-mono text-xs uppercase tracking-widest">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Wuzhou Buddha Palm Yam Infographics
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-stone-800 tracking-tight leading-none font-serif"
            >
              武穴佛手山药
            </motion.h1>
            <p className="text-xl text-emerald-800/80 font-serif font-semibold italic">
              非遗佛药 · 药食同源之瑰宝
            </p>
          </div>

          <div className="text-stone-600 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              武穴佛手山药，湖北省武穴市特产，全国农产品地理标志。因其块茎多指状分枝，形如合十佛手、肉白质细、气香粘足，在民间具有上千年的种植和养生史。
            </p>
          </div>

          {/* Interactive cards for history sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {historyStories.map((story, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(120, 110, 90, 0.1)' }}
                className="bg-white/80 backdrop-blur-sm border border-stone-200/80 rounded-xl p-4 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="p-2 w-fit bg-stone-100 rounded-lg">
                    {story.icon}
                  </div>
                  <h3 className="font-bold text-stone-800 text-sm font-sans flex items-center gap-1.5">
                    {story.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans line-clamp-4 md:line-clamp-none">
                    {story.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic Image Widget */}
        <div className="lg:col-span-5 relative w-full aspect-[3/2] lg:aspect-square overflow-hidden rounded-2xl border-4 border-white shadow-md group">
          <motion.img 
            src={farmerImg}
            alt="武穴佛手山药农夫水彩画"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <p className="text-white text-xs font-mono">WATERCOLOR ARTWORK</p>
            <h4 className="text-white font-serif font-bold text-base">田间喜获丰收的武穴农人</h4>
            <p className="text-stone-200 text-xs">手持多指合围、形同合掌礼佛的黄金佛手山药</p>
          </div>
          {/* Badge */}
          <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-md text-stone-100 px-3 py-1 text-[10px] font-mono tracking-widest rounded-full border border-stone-700 flex items-center gap-1">
            <Milestone className="w-3 h-3 text-amber-400" />
            GEOGRAPHIC INDICATION
          </div>
        </div>
      </div>
    </div>
  );
}
