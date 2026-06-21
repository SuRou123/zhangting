import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, HelpCircle, Eye, Ruler, EyeOff } from 'lucide-react';
import { YamAnatomyPart } from '../types';

export default function YamAnatomy() {
  const [selectedPart, setSelectedPart] = useState<string>('tuber');
  const [showSectionDetail, setShowSectionDetail] = useState<boolean>(false);
  const [palmSize, setPalmSize] = useState<number>(18); // Default 18cm

  const parts: YamAnatomyPart[] = [
    {
      id: 'tuber',
      name: '佛手状块茎 (Buddha Palm Tuber)',
      description: '由多个指状块茎组成，形似合拢手掌。表皮黄褐色或黄白色，有细横纹与须根，肉质白色而黏、质地细腻致密。富含高级淀粉极易消化。',
      details: '佛手状是武穴山药最神奇的标志特征，民间传说是引禅音感化而成。其宽度一般在10~25厘米之间，质地比普通长条形山药更加紧致。',
      markerX: 60,
      markerY: 35,
    },
    {
      id: 'anchoring',
      name: '固定根 (Anchoring Roots)',
      description: '从主块茎基部向下密集射出，一般有8~12根（俗称“十根骨”）。入土深度约30~50cm，直径0.5~1.0cm。',
      details: '固定根粗硕，功能是牢牢将多指的佛手块茎锚定于红砂土质中，不因大风或者上部繁茂藤蔓的拉扯而摇晃歪斜。',
      markerX: 18,
      markerY: 55,
    },
    {
      id: 'absorption',
      name: '吸收根 (Absorption Roots)',
      description: '主要分布在表层土下5~20cm的土层中，呈细绒须状。直径0.1~0.3cm，在土壤表面密度达8~12条/cm²。',
      details: '吸收根是武穴佛手山药高产、多糖含量高的功臣。由于砂壤土表层肥沃、透气性好，吸收根在这一区域极度发达，能迅速捕获地表水分及有机质。',
      markerX: 75,
      markerY: 70,
    }
  ];

  // For sectional observation details
  const sections = [
    {
      title: "周皮层 (Periderm)",
      desc: "5-8层木栓细胞，紧密排列，构成褐色的坚韧外衣，防止水分流失。"
    },
    {
      title: "黏液细胞 (Mucilage Cells)",
      desc: "富含黏液质（尿囊素、多糖），用以对抗泥土挤压与贮存免疫物质，是拉丝长、高黏度的来源。"
    },
    {
      title: "淀粉储藏细胞 (Starch Parenchyma)",
      desc: "极为细密的椭球形淀粉粒，煮熟后质地粉糯、粉质比例高，口感极佳。"
    }
  ];

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-stone-100 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2 font-serif">
            <span className="p-1 bg-amber-50 rounded-lg text-amber-700">🌱</span>
            佛手山药分解图与解剖
          </h2>
          <p className="text-xs text-stone-500 font-mono">ANATOMICAL DIAGRAM & REFERENCE SIZE</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {parts.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedPart(p.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium font-sans border transition-all duration-200 ${
                selectedPart === p.id
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                  : 'bg-stone-50 text-stone-600 border-stone-250 hover:bg-stone-100'
              }`}
            >
              {p.name.split(' (')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* SVG Interactive Canvas */}
        <div className="lg:col-span-7 bg-[#FAF9F6] border border-stone-100 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden h-[380px] md:h-[450px]">
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-stone-800 text-stone-100 text-[10px] uppercase tracking-wider px-2 py-1 rounded font-mono">
              交互式解剖结构
            </span>
          </div>

          {/* Interactive SVG Drawing of Yam Tuber and Roots */}
          <div className="w-full h-full flex items-center justify-center relative">
            <svg viewBox="0 0 400 400" className="w-[80%] h-[80%] max-w-[320px] max-h-[320px]">
              {/* Background Glow */}
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#faf9f6" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect width="100%" height="100%" fill="none" />

              {/* Tuber Glow when selected */}
              {selectedPart === 'tuber' && (
                <circle cx="210" cy="180" r="100" fill="url(#glow)" className="transition-all" />
              )}

              {/* Soil boundary representation line */}
              <line x1="20" y1="280" x2="380" y2="280" stroke="#d6d3d1" strokeWidth="2" strokeDasharray="4 4" />
              <text x="35" y="273" fill="#a8a29e" className="text-[10px] font-mono">地表线 (Soil Line)</text>

              {/* DRAWINGS OF YAM ROOT & PLANT */}
              {/* Stem reaching up */}
              <path d="M 210,130 C 210,100 190,70 180,40" stroke="#16a34a" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M 180,40 C 170,30 160,35 150,25" stroke="#15803d" strokeWidth="2" fill="none" />
              {/* Vines and leaves */}
              <path d="M 175,60 Q 150,55 145,50" stroke="#15803d" strokeWidth="1.5" fill="none" />
              {/* Heart/Arrow shaped leaves */}
              <path d="M 145,50 C 140,43 130,48 135,55 C 138,58 145,62 145,62 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
              <path d="M 180,40 C 190,30 205,35 210,25" stroke="#15803d" strokeWidth="1.5" fill="none" />
              <path d="M 210,25 C 215,18 225,23 220,30 C 217,33 210,37 210,37 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1" />

              {/* 1. Bud/Sprout interface at the top of yam */}
              <ellipse cx="210" cy="130" rx="14" ry="8" fill="#e7e5e4" stroke="#78716c" strokeWidth="1" />
              <path d="M 205,128 C 205,124 215,124 215,128" fill="none" stroke="#78716c" strokeWidth="1" />

              {/* 2. Buddha Palm Shape Tuber (Branchy body) */}
              <g id="tuber-drawing" className="cursor-pointer" onClick={() => setSelectedPart('tuber')}>
                {/* Back finger */}
                <path d="M 180,180 C 160,185 145,150 148,135 C 152,120 178,135 190,140" fill="#f5ebe0" stroke="#8c6a5c" strokeWidth="2.5" />
                {/* Left side fingers */}
                <path d="M 160,200 C 120,190 105,210 110,225 C 115,235 140,230 170,220" fill="#e3d5ca" stroke="#805b4e" strokeWidth="2.5" />
                <path d="M 165,220 C 123,222 110,245 115,260 C 120,270 145,255 175,240" fill="#f5ebe0" stroke="#8c6a5c" strokeWidth="2.5" />
                {/* Middle big fingers */}
                <path d="M 210,135 C 210,160 215,190 220,270 C 235,270 240,240 240,190 C 240,165 220,135 210,135 Z" fill="#eddcd2" stroke="#805b4e" strokeWidth="2.5" />
                {/* Right side fingers */}
                <path d="M 225,190 C 265,195 285,185 280,210 C 275,225 245,220 225,210" fill="#f5ebe0" stroke="#8c6a5c" strokeWidth="2" />
                <path d="M 225,215 C 270,230 288,235 280,255 C 272,270 240,250 225,242" fill="#eddcd2" stroke="#805b4e" strokeWidth="2.5" />

                {/* Overlying palm highlights */}
                <path d="M 180,135 C 190,150 195,190 195,270 C 180,270 165,250 165,230 C 165,210 175,170 180,135 Z" fill="#eddcd2" stroke="#805b4e" strokeWidth="2.5" />

                {/* Skin Texture Lines */}
                <path d="M 182,160 Q 188,162 192,160" stroke="#b08968" strokeWidth="1" fill="none" />
                <path d="M 175,200 Q 185,205 190,198" stroke="#b08968" strokeWidth="1" fill="none" />
                <path d="M 218,175 Q 228,177 232,174" stroke="#b08968" strokeWidth="1" fill="none" />
                <path d="M 222,230 Q 230,233 235,229" stroke="#b08968" strokeWidth="1" fill="none" />
                <path d="M 140,215 Q 150,218 153,213" stroke="#b08968" strokeWidth="1.5" fill="none" />
                <path d="M 255,242 Q 265,245 268,239" stroke="#b08968" strokeWidth="1.5" fill="none" />

                {/* Small Hairs on Yam */}
                <line x1="120" y1="210" x2="114" y2="207" stroke="#805b4e" strokeWidth="1" />
                <line x1="130" y1="250" x2="124" y2="249" stroke="#805b4e" strokeWidth="1" />
                <line x1="265" y1="200" x2="271" y2="198" stroke="#805b4e" strokeWidth="1" />
                <line x1="270" y1="248" x2="276" y2="247" stroke="#805b4e" strokeWidth="1" />
              </g>

              {/* 3. Anchoring Roots (向下生长的固定根/骨根 - 蓝色/深色) */}
              <g id="anchoring-roots" className="cursor-pointer" onClick={() => setSelectedPart('anchoring')}>
                {/* 10 thick straight roots shooting down */}
                <path d="M 185,270 Q 150,290 120,335" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 190,270 Q 165,300 145,350" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 195,270 Q 180,310 175,365" stroke="#9a3412" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                <path d="M 205,270 Q 200,310 202,370" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 215,270 Q 218,310 225,368" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 220,270 Q 235,310 245,360" stroke="#9a3412" strokeWidth="3.2" fill="none" strokeLinecap="round" />
                <path d="M 225,270 Q 255,300 270,345" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 230,270 Q 275,290 300,325" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 175,270 Q 140,285 105,310" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 235,270 Q 285,280 320,305" stroke="#78350f" strokeWidth="2" fill="none" strokeLinecap="round" />
              </g>

              {/* 4. Absorption Roots (表层浅须根 - 密布) */}
              <g id="absorption-roots" className="cursor-pointer animate-pulse" onClick={() => setSelectedPart('absorption')}>
                {/* Horizontal radiating fine curves, particularly between Y 110 and 200 */}
                {/* Left side absorption */}
                <path d="M 148,135 Q 110,130 90,140" stroke="#b45309" strokeWidth="1" fill="none" />
                <path d="M 135,160 Q 95,170 85,160" stroke="#b45309" strokeWidth="1" fill="none" />
                <path d="M 115,210 Q 75,220 60,205" stroke="#b45309" strokeWidth="1" fill="none" />
                <path d="M 105,225 Q 60,240 50,230" stroke="#b45309" strokeWidth="1" fill="none" />
                <path d="M 115,260 Q 70,275 55,268" stroke="#b45309" strokeWidth="1" fill="none" />
                {/* Right side absorption */}
                <path d="M 225,145 Q 265,138 290,145" stroke="#b45309" strokeWidth="1" fill="none" />
                <path d="M 240,165 Q 285,160 310,172" stroke="#b45309" strokeWidth="1" fill="none" />
                <path d="M 280,210 Q 320,205 335,215" stroke="#b45309" strokeWidth="1" fill="none" />
                <path d="M 280,250 Q 325,245 340,258" stroke="#b45309" strokeWidth="1" fill="none" />
                {/* Topsoil root hair sprays */}
                <path d="M 210,130 Q 250,110 270,120" stroke="#d97706" strokeWidth="0.8" fill="none" />
                <path d="M 210,130 Q 170,110 150,115" stroke="#d97706" strokeWidth="0.8" fill="none" />
              </g>

              {/* Glowing Outline rings around selected part */}
              {selectedPart === 'tuber' && (
                <path d="M 105,225 C 100,160 140,118 210,130 C 285,140 295,200 286,258" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="6 4" className="stroke-emerald-500" />
              )}
              {selectedPart === 'anchoring' && (
                <path d="M 105,310 C 130,370 270,380 320,305" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 4" />
              )}
              {selectedPart === 'absorption' && (
                <g stroke="#ea580c" strokeWidth="2" strokeDasharray="5 3" fill="none">
                  <ellipse cx="210" cy="190" rx="140" ry="80" />
                </g>
              )}

              {/* PULSING DOT LABELS */}
              {parts.map(p => (
                <g 
                  key={p.id}
                  transform={`translate(${(p.markerX / 100) * 400}, ${(p.markerY / 100) * 400})`}
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPart(p.id);
                  }}
                >
                  <circle r="14" fill="#1e293b" fillOpacity="0.1" />
                  <circle r="8" fill={selectedPart === p.id ? '#10b981' : '#b45309'} className="transition-all duration-300" />
                  <circle r="4" fill="#ffffff" />
                </g>
              ))}
            </svg>
          </div>

          {/* Interactive footer with quick facts */}
          <div className="border-t border-stone-200/60 pt-2 flex justify-between items-center text-xs text-stone-500 font-sans">
            <span className="flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-stone-400" />
              点击图上黄色标记点或右侧卡片查看详情
            </span>
            <span className="font-mono text-emerald-800">100% 真实生物模型</span>
          </div>
        </div>

        {/* Informative description & detail cards */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="bg-[#FAF8F5] border border-stone-150 rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-stone-100 rounded-full translate-x-8 -translate-y-8 flex items-center justify-center">
                <span className="text-4xl text-stone-200/80 font-serif">印</span>
              </div>

              {parts.map(p => {
                if (p.id !== selectedPart) return null;
                return (
                  <motion.div 
                    key={p.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <span className="inline-block bg-stone-200 text-stone-800 text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full font-bold">
                      当前选中部位
                    </span>
                    <h3 className="text-lg font-bold text-stone-900 font-serif">
                      {p.name}
                    </h3>
                    <p className="text-sm text-stone-700 leading-relaxed font-sans">
                      {p.description}
                    </p>
                    {p.details && (
                      <div className="bg-white/80 p-3 rounded-lg border border-stone-100 text-xs text-stone-600 leading-relaxed italic">
                        <strong>农学要记：</strong>{p.details}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Quick reference toggles for Sectional Observation (剖面观察) & Palm Size Reference (大小参考) */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowSectionDetail(!showSectionDetail)}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold font-sans transition-all duration-200 ${
                  showSectionDetail 
                    ? 'bg-stone-900 text-stone-100 border-stone-900 shadow-sm' 
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {showSectionDetail ? <EyeOff className="w-4 h-4 text-emerald-400" /> : <Eye className="w-4 h-4 text-stone-500" />}
                剖面显微观察
              </button>

              <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-2.5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-stone-700 font-sans flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5 text-stone-500" />
                  块茎宽度参考:
                </span>
                <div className="flex items-center gap-1.5">
                  <input 
                    type="range" 
                    min="10" 
                    max="25" 
                    value={palmSize} 
                    onChange={(e) => setPalmSize(Number(e.target.value))}
                    className="w-16 accent-emerald-600 cursor-pointer h-1 bg-stone-200 rounded"
                  />
                  <span className="text-xs font-bold font-mono text-emerald-700">{palmSize}cm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Microscope Section Detail container */}
          <AnimatePresence>
            {showSectionDetail && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-stone-900 text-stone-200 rounded-2xl p-4 border border-stone-800 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5 font-bold">
                    <span>🔬</span> 剖面微观构造 (Microscopic Layers)
                  </h4>
                  <div className="space-y-2.5 max-h-[160px] overflow-y-auto pr-1">
                    {sections.map((sect, i) => (
                      <div key={i} className="text-xs border-l border-stone-700 pl-2.5 py-0.5 space-y-0.5">
                        <span className="font-bold text-stone-100">{sect.title}</span>
                        <p className="text-stone-400 font-sans leading-relaxed">{sect.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* PALM SIZE VISUAL OVERLAY CONTAINER */}
          <div className="bg-[#FCFBF9] border border-stone-200/80 rounded-2xl p-4 space-y-3">
            <h4 className="text-xs font-bold font-serif text-stone-700 flex items-center gap-1">
              <span>🖐️</span> 大小尺寸参考 (Scale Comparison)
            </h4>
            <p className="text-[11px] text-stone-500 font-sans leading-tight">
              佛手山药的形状奇特，一般宽度在 <strong>15 ~ 20cm</strong>，与普通成人的手掌摊开尺寸极其相近！
            </p>
            <div className="flex items-center justify-around bg-white p-3 rounded-xl border border-stone-100 relative h-28 overflow-hidden">
              {/* Human Palm Skeleton outline */}
              <div className="flex flex-col items-center justify-center opacity-40">
                <span className="text-2xl font-sans">🖐️</span>
                <span className="text-[9px] font-mono mt-1">成人手掌 (~18cm)</span>
              </div>
              
              <div className="w-px h-12 bg-stone-300"></div>

              {/* Configured Yam skeleton scale */}
              <motion.div 
                animate={{ scale: palmSize / 18 }}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-2xl filter saturate-[0.8]">🍠</span>
                <span className="text-[9px] font-mono mt-1 font-bold text-emerald-800">佛手山药等比例</span>
              </motion.div>
            </div>
            <div className="text-center text-[10px] font-mono text-stone-400">
              拖动上方滑块可调节佛手山药模型对比比例
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
