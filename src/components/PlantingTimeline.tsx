import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Calendar, Calculator, Info, Grid, ChevronRight } from 'lucide-react';
import { TimelineStep } from '../types';

export default function PlantingTimeline() {
  const [activeStep, setActiveStep] = useState<string>('step2'); // Default to planting step
  const [fieldArea, setFieldArea] = useState<number>(100); // Default 100 square meters
  const [customSpacing, setCustomSpacing] = useState<number>(20); // Default 20cm plant spacing
  const [customRowSpacing, setCustomRowSpacing] = useState<number>(30); // Default 30cm row spacing

  const steps: TimelineStep[] = [
    {
      id: 'step1',
      months: '2-3月',
      title: '耕地施肥 · 整备地力',
      description: '整地深翻，施足底肥。通过深度松土增加透气性，每亩均匀施用腐熟有机肥3000-4000公斤并搭配三元复合肥，创造深厚疏松、保水保肥的底垫条件。',
      farmingTasks: ['150马力旋耕机开深沟', '播撒发酵有机菜饼肥', '对老土层进行生石灰杀菌澄清']
    },
    {
      id: 'step2',
      months: '3-4月',
      title: '播种定植 · 开沟覆土',
      description: '挑选无病害、饱满有芽眼的块茎作为种薯。根据标准株行距横向开种植浅沟，芽眼朝上或水平放入。入土深度适中，覆盖松软细土5-8cm，拍实防风并保持温湿。',
      farmingTasks: ['种芽切块与草木灰拌种伤口消毒', '株距20cm，行距30cm定株', '早春防寒地膜覆盖作业']
    },
    {
      id: 'step3',
      months: '5-6月',
      title: '除草施肥 · 接驳促长',
      description: '幼苗大量吐心叶，须根萌发。必须在晴天清晨及时除草，避免野草抢占氮肥与光照。结合浅中耕进行轻度追肥催苗，为后续藤蔓的快速爬高打硬底。',
      farmingTasks: ['浅土层人工精致中耕除草', '追施促苗高氮稀释水肥', '准备初期引蔓细绳索']
    },
    {
      id: 'step4',
      months: '7-9月',
      title: '藤蔓生长 · 块茎膨大',
      description: '气温升高，枝叶茂盛盖满架。光合作用进入黄金颠峰，地下的佛手山药块茎开始高速累积淀粉与多糖，进入关键膨大膨长期。防涝、排涝是重点，防止高温沤根。',
      farmingTasks: ['修剪基部过密侧叶改善通风', '重施硫酸钾高钾块茎膨大肥', '夏季暴雨后清沟排水']
    },
    {
      id: 'step5',
      months: '10-11月',
      title: '收获采掘 · 储运过冬',
      description: '霜降前后，叶片逐渐发黄变干，藤蔓逐渐枯死，表示地下块茎已然成熟，养分累满。选择晴天松软土质时开挖。使用竹铲等钝器小心采掘，严禁机械蛮力掘断手掌分叉。',
      farmingTasks: ['剪除上部枯萎枯黄秧蔓', '晴天无积水时纯人工细致起刨', '块茎表皮吹风晾干、地窖避光储藏']
    }
  ];

  // Dynamic calculations based on spacing sliders
  // In a standard 100cm ridge (1m broad)
  // Inside the ridge, Row Spacing is 30cm, Plant Spacing is 20cm.
  // We can fit roughly: (1 / rowWidth_meters) * (1 / plantWidth_meters) = plants per sqm
  const rowInMeters = customRowSpacing / 100;
  const plantInMeters = customSpacing / 100;
  
  // Adjusted density calculation:
  // Usually inside a 1m broad ridge, we place 3 rows spaced 30cm apart. Each row has plants spaced 20cm.
  // Effectively, density per square meter of ridge area is around:
  const plantsPerSqm = Math.round((1 / rowInMeters) * (1 / plantInMeters));
  const totalPlants = Math.round(fieldArea * plantsPerSqm * 0.85); // 85% land utilization rate
  const estimatedYieldKg = Math.round(totalPlants * 0.45); // Avg tuber weight is ~0.45kg
  const fertilizerNeededKg = Math.round(fieldArea * 0.12); // ~120g per sqm

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-8">
      {/* Grid Layout containing Timeline & Planting Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: THE TIMELINE */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2 font-serif">
              <span className="p-1 bg-emerald-50 rounded-lg text-emerald-700">📅</span>
              种植管理时间轴
            </h2>
            <p className="text-xs text-stone-500 font-mono">TIMELINE & CRITICAL SEASONS</p>
          </div>

          {/* Interactive Steper Cards */}
          <div className="relative border-l border-emerald-100 pl-4 space-y-4 py-2 ml-2">
            {steps.map((st, idx) => {
              const isActive = activeStep === st.id;
              return (
                <div key={st.id} className="relative group">
                  {/* Circular Timeline Indicator */}
                  <div 
                    onClick={() => setActiveStep(st.id)}
                    className={`absolute -left-[25px] top-1.5 w-4.5 h-4.5 rounded-full border-2 cursor-pointer transition-all duration-300 flex items-center justify-center ${
                      isActive 
                        ? 'bg-emerald-600 border-white ring-4 ring-emerald-100 scale-125' 
                        : 'bg-white border-stone-300 hover:border-emerald-500'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-white ${isActive ? 'inline-block' : 'hidden'}`} />
                  </div>

                  {/* Header Content */}
                  <div 
                    onClick={() => setActiveStep(st.id)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20 translate-x-1' 
                        : 'bg-stone-50 border-stone-150 hover:bg-stone-100/70 hover:border-stone-250'
                    }`}
                  >
                    <div className="flex justify-between items-center gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-emerald-700 font-serif font-black text-sm px-2 py-0.5 bg-emerald-50 border border-emerald-200/50 rounded">
                          {st.months}
                        </span>
                        <h4 className="font-bold text-sm text-stone-800 font-sans">
                          {st.title}
                        </h4>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-stone-400 transition-transform ${isActive ? 'rotate-90 text-emerald-600' : ''}`} />
                    </div>

                    {/* Expandable tasks & details */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden mt-3 pt-3 border-t border-stone-100 space-y-3"
                        >
                          <p className="text-xs text-stone-600 leading-relaxed font-sans">
                            {st.description}
                          </p>
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest block">
                              🔔 核心实操指令 (Agronomy Commands):
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {st.farmingTasks.map((t, idx) => (
                                <div key={idx} className="bg-stone-50 border border-stone-200/60 p-2 rounded-lg text-[11px] text-stone-600 font-medium flex items-center gap-1">
                                  <span className="text-emerald-500">✔</span>
                                  {t}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE GRIDS & SOWING CALCULATOR */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2 font-serif">
                <span className="p-1 bg-amber-50 rounded-lg text-amber-700">🧮</span>
                规格与栽培计算器
              </h2>
              <p className="text-xs text-stone-500 font-mono">SPACING SCHEMATIC & ESTIMATION</p>
            </div>

            {/* Simulated Top-view Grid */}
            <div className="bg-[#FAF9F5] border border-stone-200/80 rounded-2xl p-4 space-y-4">
              <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                <span className="text-xs font-bold text-stone-700 font-serif flex items-center gap-1.5">
                  <Grid className="w-4 h-4 text-stone-500" />
                  株距行距示意图 (俯视 Mock-Up Grid)
                </span>
                <span className="text-[10px] font-mono bg-stone-200 text-stone-800 px-1.5 py-0.5 rounded font-bold">
                  垄宽 100cm
                </span>
              </div>

              {/* Graphical representation of the spacing grid */}
              <div className="bg-stone-100 border border-stone-250 p-4 rounded-xl flex flex-col gap-4 relative justify-center items-center overflow-hidden h-36">
                {/* Simulated rows (two soil ridges lines horizontal) */}
                <div className="absolute top-4 left-0 right-0 h-10 bg-amber-200/30 border-y border-amber-300/40 flex justify-around items-center px-4">
                  {/* Sowing seed icons */}
                  <span className="text-xs">🌰</span>
                  <span className="text-xs">🌰</span>
                  <span className="text-xs">🌰</span>
                  <span className="text-xs">🌰</span>
                  <span className="text-xs">🌰</span>
                </div>
                <div className="absolute bottom-4 left-0 right-0 h-10 bg-amber-200/30 border-y border-amber-300/40 flex justify-around items-center px-4">
                  <span className="text-xs">🌰</span>
                  <span className="text-xs">🌰</span>
                  <span className="text-xs">🌰</span>
                  <span className="text-xs">🌰</span>
                  <span className="text-xs">🌰</span>
                </div>

                {/* Spacing lines & notes overlay */}
                <div className="z-10 bg-white/90 border border-stone-200 rounded p-1.5 text-[10px] space-y-1 font-mono text-center shadow-sm">
                  <div className="flex gap-4">
                    <span>株距 (植株间距): <strong>{customSpacing}cm</strong></span>
                    <span>行距 (并列开沟距): <strong>{customRowSpacing}cm</strong></span>
                  </div>
                  <div className="text-[9px] text-stone-500">
                    大面积多行对称布点，确保采光通透
                  </div>
                </div>
              </div>

              {/* Custom Sliders for Spacing */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 block">设计株距 / 间距 (20cm-30cm)</label>
                  <input 
                    type="range"
                    min="18"
                    max="28"
                    value={customSpacing}
                    onChange={(e) => setCustomSpacing(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-1 cursor-pointer bg-stone-200 rounded"
                  />
                  <span className="text-[11px] font-mono font-bold text-stone-600 block text-right">{customSpacing}cm</span>
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 block">设计行距 / 间行 (25cm-35cm)</label>
                  <input 
                    type="range"
                    min="25"
                    max="35"
                    value={customRowSpacing}
                    onChange={(e) => setCustomRowSpacing(Number(e.target.value))}
                    className="w-full accent-emerald-600 h-1 cursor-pointer bg-stone-200 rounded"
                  />
                  <span className="text-[11px] font-mono font-bold text-stone-600 block text-right">{customRowSpacing}cm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Output Widget */}
          <div className="bg-emerald-950 text-emerald-100 rounded-2xl p-5 border border-emerald-900 space-y-4">
            <div className="flex justify-between items-center border-b border-emerald-900 pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                <Calculator className="w-3.5 h-3.5" />
                智能种植负荷估算 (Agronomic Math)
              </span>
              <div className="flex items-center gap-1 text-xs">
                <span>面积:</span>
                <input 
                  type="number" 
                  value={fieldArea} 
                  onChange={(e) => setFieldArea(Math.max(1, Number(e.target.value)))}
                  className="w-14 bg-emerald-900 border border-emerald-800 rounded px-1.5 py-0.5 font-bold font-mono text-center text-white focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
                <span>m²</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-emerald-900/40 p-2.5 rounded-xl border border-emerald-900/80">
                <span className="text-[10px] text-emerald-300 block mb-0.5">预估种植株数</span>
                <span className="text-xl font-bold font-mono text-white block">{totalPlants}</span>
                <span className="text-[9px] text-emerald-400 font-sans">株佛手山药种薯</span>
              </div>
              <div className="bg-emerald-900/40 p-2.5 rounded-xl border border-emerald-900/80">
                <span className="text-[10px] text-emerald-300 block mb-0.5">預估总收获量</span>
                <span className="text-xl font-bold font-mono text-white block">~{estimatedYieldKg}</span>
                <span className="text-[9px] text-emerald-400 font-sans">千克 (优质薯)</span>
              </div>
              <div className="bg-emerald-900/40 p-2.5 rounded-xl border border-emerald-900/80">
                <span className="text-[10px] text-emerald-300 block mb-0.5">底肥配置需求</span>
                <span className="text-xl font-bold font-mono text-white block">~{fertilizerNeededKg}</span>
                <span className="text-[9px] text-emerald-400 font-sans">公斤有机堆肥</span>
              </div>
            </div>

            <div className="text-[10px] text-emerald-400 flex items-start gap-1 font-sans leading-tight">
              <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                估算模型基于鄂东产区实际测算参数，推荐最佳规格：垄高 <strong>35cm</strong>, 株距 <strong>20cm</strong>, 行距 <strong>30cm</strong>，该规格有利于产量最大化。
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
