import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Sliders, CornerDownRight, CheckCircle2 } from 'lucide-react';
import { SoilLayer } from '../types';

export default function SoilGrowth() {
  const [activeLayer, setActiveLayer] = useState<string>('top');
  const [ridgeWidth, setRidgeWidth] = useState<number>(80); // 60-100cm
  const [ridgeHeight, setRidgeHeight] = useState<number>(35); // 30-40cm

  const layers: SoilLayer[] = [
    {
      id: 'top',
      name: '表层土 (Topsoil Upper Layer)',
      role: '疏松肥沃，保氧呼吸',
      description: '由150马力旋耕机多重碎土配比而成，结构极松散。这一层主要容纳山药的表层吸收根，提供充足的空气循环、微量有机质和早期的光温环境。活性最高。',
      color: 'bg-amber-100 border-amber-300 text-amber-900',
    },
    {
      id: 'middle',
      name: '中层土 (Midsoil Core)',
      role: '结构稳定，保水保肥',
      description: '此层质地适中，是块茎膨大伸展的主战场。武穴特有的红黄砂壤土配比具有适度的黏粒（15%~20%），既不积水导致烂干，又能长期锁定底肥中的磷钾等营养成分。',
      color: 'bg-orange-100 border-orange-300 text-orange-900',
    },
    {
      id: 'bottom',
      name: '底层土 (Subsoil Base)',
      role: '紧实牢靠，强力支撑',
      description: '原生态的紧实生土。不进行松耕，以保持硬度。硬度能有效抵挡由于台风、大雨对高架藤蔓所带来的剧烈剪切力，是整个山药块茎和根系网的可靠承重基础。',
      color: 'bg-[#EADBC8] border-stone-300 text-stone-900',
    }
  ];

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-stone-100 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2 font-serif">
            <span className="p-1 bg-emerald-50 rounded-lg text-emerald-700">⛰️</span>
            垄作立体生长示意图
          </h2>
          <p className="text-xs text-stone-500 font-mono">3D RIDGE ROUGHAGE & SOIL LAYERING</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Interactive 3D Perspective Graphic */}
        <div className="lg:col-span-7 bg-[#F7F5F0] border border-stone-100 rounded-2xl p-6 flex flex-col justify-between min-h-[380px] relative overflow-hidden">
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
            <span className="bg-stone-800 text-stone-100 text-[10px] uppercase tracking-wider px-2 py-1 rounded font-mono w-fit">
              立体栽培剖面
            </span>
          </div>

          {/* Interactive Ridge Visual Representation (SVG-based 3D simulation) */}
          <div className="w-full h-64 flex items-center justify-center relative mt-4">
            <svg viewBox="0 0 500 300" className="w-full h-full max-w-[460px]">
              {/* Dynamic width calculations based on inputs to simulate morphing */}
              {/* Calculate scaling proportions */}
              {/* W ranges 60-100, H ranges 30-40 */}
              {/* Standard 3 ridges */}
              
              {/* Grid guides */}
              <line x1="10" y1="240" x2="490" y2="240" stroke="#E6E3DC" strokeWidth="1" strokeDasharray="3 3" />
              
              <g transform="translate(10, 20)">
                {/* 3D Ridge 1 */}
                <g className="transition-all duration-300">
                  {/* Bottom Floor */}
                  <polygon points="50,220 450,220 420,240 20,240" fill="#D2C5B5" opacity="0.6" />

                  {/* SUB-SOIL Layer (Bottom grey block) */}
                  <polygon points="50,200 450,200 450,220 50,220" fill={activeLayer === 'bottom' ? '#C2B09F' : '#D0C1B4'} className="transition-colors cursor-pointer" onClick={() => setActiveLayer('bottom')} />
                  <text x="440" y="213" fill="#8F8073" fontSize="10" fontWeight="bold" textAnchor="end">底层土</text>

                  {/* MID-SOIL Layer (Middle orange block) */}
                  {/* Modulate the top point based on height slider */}
                  {/* Height ranges 30-40 -> y-pos ranges 160(for 40) - 175(for 30) */}
                  <polygon 
                    points={`50,${200 - (ridgeHeight - 15)} 450,${200 - (ridgeHeight - 15)} 450,200 50,200`} 
                    fill={activeLayer === 'middle' ? '#EA906C' : '#DFB69E'} 
                    className="transition-all duration-300 cursor-pointer" 
                    onClick={() => setActiveLayer('middle')} 
                  />
                  <text x="440" y={`${200 - (ridgeHeight / 3)}`} fill="#A16B54" fontSize="10" fontWeight="bold" textAnchor="end">中层土</text>

                  {/* TOPSOIL Layer (Top loose block) */}
                  {/* Height is ridgeHeight */}
                  <polygon 
                    points={`50,${200 - ridgeHeight} 450,${200 - ridgeHeight} 450,${200 - (ridgeHeight - 15)} 50,${200 - (ridgeHeight - 15)}`} 
                    fill={activeLayer === 'top' ? '#EAC79C' : '#ECD9C0'} 
                    className="transition-all duration-300 cursor-pointer" 
                    onClick={() => setActiveLayer('top')} 
                  />
                  <text x="440" y={`${200 - (ridgeHeight - 8)}`} fill="#A18057" fontSize="10" fontWeight="bold" textAnchor="end">表层土</text>

                  {/* Ridges Shapes Overlay (3 parallel raised humps) */}
                  {/* Width slider adjusts hump width. range: 60-100 */}
                  {/* Center of Hump 1: 120, Hump 2: 240, Hump 3: 360 */}
                  {[120, 240, 360].map((cx, idx) => {
                    const halfWidth = ridgeWidth / 2.5;
                    const peakY = 200 - ridgeHeight;
                    const baseY = 220;
                    
                    return (
                      <g key={idx}>
                        {/* 3D Front perspective faces */}
                        {/* Hump outline */}
                        <path 
                          d={`M ${cx - halfWidth - 10},${baseY} Q ${cx - halfWidth},${peakY + 15} ${cx - halfWidth + 8},${peakY} L ${cx + halfWidth - 8},${peakY} Q ${cx + halfWidth},${peakY + 15} ${cx + halfWidth + 10},${baseY} Z`} 
                          fill={activeLayer === 'top' ? '#EFE6DB' : '#E8DEC9'} 
                          stroke="#C8BEAC" 
                          strokeWidth="1.5" 
                          opacity="0.85"
                          className="transition-all duration-300 cursor-pointer"
                          onClick={() => setActiveLayer('top')}
                        />
                        {/* Draw Yam tubers growing inside the ridge */}
                        {/* Drawing inside middle and top layer elements */}
                        <g transform={`translate(${cx}, ${peakY + (ridgeHeight / 2) + 5}) scale(0.6)`}>
                          {/* Beautiful miniature branchy Yam tuber */}
                          <path d="M-10,-10 C-15,0 -20,10 -15,25 C-10,35 10,25 15,15 C20,5 5,-15 -10,-10 Z" fill="#D0BCA0" stroke="#8A765E" strokeWidth="1" />
                          <path d="M-5,10 C-15,15 -25,25 -20,32 C-15,40 0,30 5,20" fill="#D0BCA0" stroke="#8A765E" strokeWidth="1" />
                          <path d="M5,12 C15,14 25,24 22,30 C18,36 5,26 0,16" fill="#D0BCA0" stroke="#8A765E" strokeWidth="1" />
                          <circle cx="-5" cy="5" r="1.5" fill="#8A765E" />
                          <circle cx="5" cy="15" r="1.5" fill="#8A765E" />
                        </g>

                        {/* Plant stem going up */}
                        <path d={`M ${cx},${peakY} C ${cx - 5},${peakY - 15} ${cx + 5},${peakY - 30} ${cx - 2},${peakY - 50}`} stroke="#22C55E" strokeWidth="2.5" fill="none" />
                        {/* Small leaves */}
                        <path d={`M ${cx - 2},${peakY - 50} C ${cx - 10},${peakY - 52} ${cx - 8},${peakY - 45} ${cx - 2},${peakY - 50} Z`} fill="#15803D" />
                        <path d={`M ${cx - 2},${peakY - 35} Q ${cx + 10},${peakY - 40} ${cx + 8},${peakY - 30}`} stroke="#15803D" strokeWidth="1" fill="none" />
                      </g>
                    );
                  })}
                  
                  {/* Dimensions Annotations */}
                  {/* Ridge Height Label */}
                  <g transform={`translate(460, ${200 - (ridgeHeight / 2)})`}>
                    <line x1="-5" y1={`${-(ridgeHeight / 2)}`} x2="-5" y2={`${ridgeHeight / 2}`} stroke="#444" strokeWidth="1" />
                    <line x1="-8" y1={`${-(ridgeHeight / 2)}`} x2="-2" y2={`${-(ridgeHeight / 2)}`} stroke="#444" strokeWidth="1" />
                    <line x1="-8" y1={`${ridgeHeight / 2}`} x2="-2" y2={`${ridgeHeight / 2}`} stroke="#444" strokeWidth="1" />
                    <text x="3" y="4" fill="#1e293b" className="text-[10px] font-mono font-bold">垄高: {ridgeHeight}cm</text>
                  </g>

                  {/* Ridge Width Label */}
                  <g transform={`translate(240, ${200 - ridgeHeight - 15})`}>
                    <line x1={`${-(ridgeWidth / 2.5)}`} y1="0" x2={`${ridgeWidth / 2.5}`} y2="0" stroke="#444" strokeWidth="1" />
                    <line x1={`${-(ridgeWidth / 2.5)}`} y1="-3" x2={`${-(ridgeWidth / 2.5)}`} y2="3" stroke="#444" strokeWidth="1" />
                    <line x1={`${ridgeWidth / 2.5}`} y1="-3" x2={`${ridgeWidth / 2.5}`} y2="3" stroke="#444" strokeWidth="1" />
                    <text x="0" y="-5" fill="#1e293b" className="text-[10px] font-mono font-bold" textAnchor="middle">垄宽: {ridgeWidth}cm</text>
                  </g>

                  {/* Ridge spacing label */}
                  <g transform="translate(180, 248)">
                    <line x1="-60" y1="0" x2="60" y2="0" stroke="#78716c" strokeWidth="1" strokeDasharray="2 2" />
                    <polygon points="-60,0 -55,-3 -55,3" fill="#78716c" />
                    <polygon points="60,0 55,-3 55,3" fill="#78716c" />
                    <text x="0" y="-3" fill="#57534e" className="text-[10px] font-mono font-semibold" textAnchor="middle">间距: 120cm</text>
                  </g>
                </g>
              </g>
            </svg>
          </div>

          {/* Interactive footer with quick facts */}
          <div className="border-t border-stone-200/60 pt-2 flex justify-between items-center text-xs text-stone-500 font-sans">
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-stone-400" />
              点击不同泥土层或拖动右侧参数模拟土层形态变化
            </span>
            <span className="font-mono text-emerald-800">标准间距: 120cm</span>
          </div>
        </div>

        {/* Parametric controls and soil layer explanations */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Silder Controls */}
          <div className="bg-[#FAF8F5] border border-stone-150 rounded-2xl p-4.5 space-y-4">
            <h3 className="text-xs font-bold font-mono text-stone-700 flex items-center gap-1.5 uppercase tracking-wide">
              <Sliders className="w-4 h-4 text-emerald-700" />
              栽培规格调节参数 (Interactive Specs)
            </h3>

            <div className="space-y-3">
              {/* Width Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="font-semibold text-stone-700">垄宽 (Ridge Width):</span>
                  <span className="font-mono font-bold text-emerald-800">{ridgeWidth} cm</span>
                </div>
                <input 
                  type="range" 
                  min="60" 
                  max="100" 
                  value={ridgeWidth} 
                  onChange={(e) => setRidgeWidth(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-1.5 bg-stone-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                  <span>矮垄 (60cm)</span>
                  <span>推荐范围: 60-100cm</span>
                  <span>宽垄 (100cm)</span>
                </div>
              </div>

              {/* Height Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="font-semibold text-stone-700">垄高 (Ridge Height):</span>
                  <span className="font-mono font-bold text-emerald-800">{ridgeHeight} cm</span>
                </div>
                <input 
                  type="range" 
                  min="30" 
                  max="40" 
                  value={ridgeHeight} 
                  onChange={(e) => setRidgeHeight(Number(e.target.value))}
                  className="w-full accent-emerald-600 h-1.5 bg-stone-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                  <span>低垄 (30cm)</span>
                  <span>最佳规格: 30-40cm</span>
                  <span>高垄 (40cm)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Layer explanation */}
          <div className="space-y-3 flex-1 flex flex-col justify-end">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400">
              各土层农学功能说明
            </span>
            <div className="space-y-2">
              {layers.map(layer => {
                const isActive = activeLayer === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveLayer(layer.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex gap-3 ${
                      isActive 
                        ? `${layer.color} shadow-sm ring-1 ring-emerald-500` 
                        : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <div className="pt-0.5">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        isActive ? 'border-emerald-600 bg-emerald-600' : 'border-stone-400'
                      }`}>
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-baseline gap-2">
                        <span className="font-bold text-xs font-serif">{layer.name.split(' (')[0]}</span>
                        <span className="text-[10px] font-mono font-semibold opacity-80">{layer.role}</span>
                      </div>
                      {isActive && (
                        <p className="text-xs text-stone-700 leading-relaxed font-sans mt-1.5 transition-all">
                          {layer.description}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
