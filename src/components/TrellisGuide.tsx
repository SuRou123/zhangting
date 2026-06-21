import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Hammer, Eye, RefreshCw, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import { TrellisPattern } from '../types';

export default function TrellisGuide() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [interactiveMode, setInteractiveMode] = useState<boolean>(true);

  const guideSteps: TrellisPattern[] = [
    {
      id: 'step1',
      title: '第一步：斜插单边立杆 (Incline Insertion)',
      description: '在垄面的一角倾斜插入竹支撑木。竹竿前端削尖，用力直插土下25~30cm，使其稳固并具有15~20度的内倾斜度。此为架构的最基础受力支柱。',
      illustrationType: 'slant'
    },
    {
      id: 'step2',
      title: '第二步：斜插对立反向杆 (Opposite Insertion)',
      description: '在对侧垄边，以等距和相同的斜度反向插入另一根竹竿。使两支竹竿在顶端形成一个夹交叉状，高度大约距土面1.5~1.8米。如此即可构成A型的整体力学框限。',
      illustrationType: 'cross'
    },
    {
      id: 'step3',
      title: '第三步：架设纵向连贯横担 (Horizontal Pole Setup)',
      description: '在所有交叉立杆的顶端汇合线上，纵向水平摆放一根较长、韧性良好的粗竹。这就是横担，把所有各自独立的A型剪刀架串联成一个刚性的整体拱廊。',
      illustrationType: 'horizontal'
    },
    {
      id: 'step4',
      title: '第四步：加装末端斜撑强化 (Diagonal Reinforcement)',
      description: '在田垄的两端终点、以及整行之间，额外成30度倾斜角斜向插入两到三根强化受力斜杆。这能强效承托纵向所产生的强大拉力（抗压、抗前后倾倒）。',
      illustrationType: 'strengthen'
    },
    {
      id: 'step5',
      title: '第五步：缠绕绑系拉绳胶带 (Tape and Tie Wrapping)',
      description: '使用专用的农用防紫外线扎带或绑扎麻绳。环绕交叉支撑与纵向横担进行缠绕受力包裹，确保任何剪刀风都无法让杆件滑动错力。',
      illustrationType: 'tape'
    },
    {
      id: 'step6',
      title: '第六步：交叉汇合部位密实加固 (Joint Hardening)',
      description: '对处于主要受风侧、或者坡段关键转弯点的交叉扣进行密集交错捆绑固定，增加节点刚度。俗话说“架牢则叶茂，架倒则全毁”。',
      illustrationType: 'reinforce'
    },
    {
      id: 'step7',
      title: '第七步：侧轴整齐度校验 (Tidy Lateral Alignment)',
      description: '从垄道的侧面水平观察，支架结构整齐划一呈标准一条线最为理想。不齐的突起极易撕裂风中的叶网。整齐也使得田间除草、采摘活动更为流畅。',
      illustrationType: 'tidy'
    },
    {
      id: 'step8',
      title: '第八步：人工引蔓上架 (Guide Vines Climbing)',
      description: '待幼苗吐心生长、蔓长至25-30cm时，人工进行“牵蔓上架”。逆时针环绕绑绳缠绕竹竿一到两圈，并使用细绳轻轻扎定，使其顺天理、向上攀爬。',
      illustrationType: 'vines'
    },
    {
      id: 'step9',
      title: '第九步：枝繁叶茂与丰收高产 (Flourishing Stage)',
      description: '在充足阳光照拂和合理的肥料供给下，茎叶迅速布满棚架，光合作用效率达到极限。叶肉厚实、浓绿通透，供给根系极多糖度，地下块茎迅速膨大，迎来品质极佳的大丰收！',
      illustrationType: 'flourish'
    }
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev < guideSteps.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : guideSteps.length - 1));
  };

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-stone-100 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2 font-serif">
            <span className="p-1 bg-emerald-50 rounded-lg text-emerald-700">🎋</span>
            搭架方式及植株引蔓
          </h2>
          <p className="text-xs text-stone-500 font-mono">SUPPORTIVE TRELLIS SETUP METHODOLOGY</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setInteractiveMode(!interactiveMode)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold font-sans border transition-all ${
              interactiveMode 
                ? 'bg-stone-900 text-stone-100 border-stone-900 shadow-sm' 
                : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
            }`}
          >
            {interactiveMode ? '🎬 点击查看步骤流程模式' : '🎋 点击显示并列画册'}
          </button>
        </div>
      </div>

      {interactiveMode ? (
        /* INTERACTIVE STEPPING CONSTRUCTOR */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Canvas of Trellis Setup */}
          <div className="lg:col-span-6 bg-[#FAF9F5] border border-stone-100 rounded-2xl p-6 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-emerald-900 text-emerald-100 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-mono font-bold">
                竹架力学组装仿真
              </span>
            </div>

            {/* Simulated interactive trellis builder (3D SVG overlay layers) */}
            <div className="w-full h-64 flex items-center justify-center relative mt-4">
              <svg viewBox="0 0 400 300" className="w-[85%] h-[85%] max-w-[340px]">
                {/* Ground */}
                <rect x="10" y="220" width="380" height="20" fill="#E8DEC9" rx="5" />
                <line x1="10" y1="220" x2="390" y2="220" stroke="#C8BEAC" strokeWidth="2" />
                <text x="20" y="235" fill="#a8a29e" className="text-[10px] font-mono text-stone-400">垄面 (Ridge Surface)</text>

                {/* Draw trellis scaffolding dynamically according to current step */}
                {/* Step 1: Slanted Pole Left */}
                {currentStep >= 0 && (
                  <line 
                    x1="120" y1="220" x2="210" y2="60" 
                    stroke="#a3a363" strokeWidth="6" strokeLinecap="round"
                    className="transition-all duration-300"
                    opacity={currentStep === 0 ? "1" : "0.7"}
                  />
                )}

                {/* Step 2: Slanted Pole Right */}
                {currentStep >= 1 && (
                  <line 
                    x1="280" y1="220" x2="190" y2="60" 
                    stroke="#a3a363" strokeWidth="6" strokeLinecap="round"
                    className="transition-all duration-300"
                    opacity={currentStep === 1 ? "1" : "0.7"}
                  />
                )}

                {/* Step 3: Horizontal Beam */}
                {currentStep >= 2 && (
                  <line 
                    x1="50" y1="68" x2="350" y2="68" 
                    stroke="#7c7c3c" strokeWidth="5" strokeLinecap="round"
                    className="transition-all duration-300"
                    opacity={currentStep === 2 ? "1" : "0.7"}
                  />
                )}

                {/* Step 4: End Reinforced slant */}
                {currentStep >= 3 && (
                  <line 
                    x1="60" y1="220" x2="200" y2="68" 
                    stroke="#65651c" strokeWidth="4" strokeLinecap="round" strokeDasharray={currentStep === 3 ? "none" : "none"}
                    className="transition-all duration-300"
                    opacity={currentStep === 3 ? "1" : "0.6"}
                  />
                )}

                {/* Step 5: Wrapping Ties (Tape, circles around overlap area) */}
                {currentStep >= 4 && (
                  <g>
                    <circle cx="200" cy="68" r="10" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="3 2" className="animate-spin" />
                    <text x="220" y="62" fill="#2563eb" className="text-[9px] font-mono font-bold">密贴捆系</text>
                  </g>
                )}

                {/* Step 6: Joint reinforcement rings */}
                {currentStep >= 5 && (
                  <g>
                    <path d="M 190,68 L 210,68" stroke="#ef4444" strokeWidth="3" />
                    <circle cx="200" cy="68" r="14" fill="none" stroke="#ef4444" strokeWidth="1.5" />
                  </g>
                )}

                {/* Step 7: Alignment lines */}
                {currentStep >= 6 && (
                  <g>
                    {/* Perspective line check */}
                    <line x1="50" y1="50" x2="350" y2="50" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
                    <text x="200" y="44" fill="#10b981" className="text-[9px] font-mono font-bold" textAnchor="middle">高度水准线: 整齐度100%</text>
                  </g>
                )}

                {/* Step 8: Growing climbing Green vine */}
                {currentStep >= 7 && (
                  <path 
                    d="M 120,220 C 130,190 145,170 155,140 S 175,90 200,68" 
                    stroke="#16a34a" strokeWidth="3.5" fill="none" strokeLinecap="round"
                    className="animate-pulse"
                  />
                )}

                {/* Step 9: Dense leaves covering */}
                {currentStep >= 8 && (
                  <g>
                    {/* Vine 2 */}
                    <path d="M 280,220 C 270,190 240,160 210,110 S 200,80 200,68" stroke="#22c55e" strokeWidth="2.5" fill="none" />
                    {/* Small leaf circles */}
                    <circle cx="140" cy="180" r="12" fill="#15803d" />
                    <circle cx="160" cy="140" r="14" fill="#166534" />
                    <circle cx="180" cy="100" r="16" fill="#14532d" />
                    <circle cx="200" cy="68" r="18" fill="#16803d" opacity="0.9" />
                    <circle cx="240" cy="150" r="12" fill="#15803d" />
                    <text x="210" y="110" fill="#fef08a" className="text-[12px] font-bold">🍠</text>
                  </g>
                )}
              </svg>
            </div>

            {/* Action buttons to step through */}
            <div className="flex md:flex-row justify-between items-center gap-4 border-t border-stone-200/60 pt-3">
              <span className="text-[11px] font-mono text-stone-500 font-bold">
                步骤进度: {currentStep + 1} / {guideSteps.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded bg-stone-950 text-white hover:bg-stone-800 transition"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Step Explanatory Card */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-5 md:p-6 space-y-4 flex-1">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                  {currentStep + 1}
                </span>
                <span className="text-xs font-bold text-stone-400 font-sans tracking-widest uppercase">
                  ACTIVE CONSTRUCTION PHASE
                </span>
              </div>

              <div className="space-y-3">
                <motion.h3 
                  key={currentStep}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg font-bold text-stone-900 font-serif"
                >
                  {guideSteps[currentStep].title}
                </motion.h3>
                <motion.p 
                  key={Math.random()}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-stone-700 leading-relaxed font-sans"
                >
                  {guideSteps[currentStep].description}
                </motion.p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-stone-150 space-y-2 mt-2">
                <span className="text-[10px] font-bold font-mono text-amber-700 uppercase flex items-center gap-1">
                  💡 农家搭架贴士 (Pro Farm Tips):
                </span>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  其由于佛手山药中后期叶丛繁茂，自身重心高、受风面极广。若搭架马虎，遇上夏秋梅雨台风极易连片吹垮，导致光合率锐减。因此<strong>抗前后风拉力</strong>（添加末端斜立柱）是稳产高产的核心秘密！
                </p>
              </div>
            </div>

            {/* Quick selector of steps */}
            <div className="grid grid-cols-5 md:grid-cols-9 gap-1.5 pt-1">
              {guideSteps.map((st, i) => (
                <button
                  key={st.id}
                  onClick={() => setCurrentStep(i)}
                  className={`py-2 rounded text-[10px] font-bold font-sans border transition ${
                    currentStep === i 
                      ? 'bg-emerald-600 text-white border-emerald-600' 
                      : 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* GRID GALLERY MODE FOR EXCELELNT VISUAL SCANNING */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {guideSteps.map((st, i) => (
            <div 
              key={st.id} 
              className="bg-[#FAF8F5] border border-stone-150 rounded-2xl p-4 flex flex-col justify-between space-y-3 shadow-none hover:shadow transition"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-baseline gap-2">
                  <span className="bg-emerald-50 text-emerald-800 text-[10px] font-bold font-mono px-2 py-0.5 rounded border border-emerald-200">
                    步骤 {i + 1}
                  </span>
                  <span className="text-[9px] font-mono text-stone-400">STRUCTURE METHOD</span>
                </div>
                <h3 className="font-bold text-xs text-stone-800 line-clamp-1 font-serif">
                  {st.title.replace(/第[一二三四五六七八九]步：/, '')}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans line-clamp-3">
                  {st.description}
                </p>
              </div>

              {/* Graphic icon/small representation */}
              <div className="bg-white border border-stone-100 rounded-lg p-3 text-center text-stone-400 text-[10px] uppercase font-mono">
                {st.illustrationType === 'slant' && '🎋 /_ 单侧插支撑'}
                {st.illustrationType === 'cross' && '🎋 /\\ 剪刀相交'}
                {st.illustrationType === 'horizontal' && '🎋 ══ 顶端连贯'}
                {st.illustrationType === 'strengthen' && '🎋 \\_ 斜向受力拉撑'}
                {st.illustrationType === 'tape' && '🎀 ◌◌ 连扣捆系扎带'}
                {st.illustrationType === 'reinforce' && '💎 ◌ 核心交点刚化'}
                {st.illustrationType === 'tidy' && '⚖ ══ 水平齐整轴向'}
                {st.illustrationType === 'vines' && '🌿 ◌ 引藤逆旋攀爬'}
                {st.illustrationType === 'flourish' && '🍠 🌱 茂密产薯连绵'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
