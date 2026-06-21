import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Flame, Bean, Award, ArrowUpRight, HelpCircle } from 'lucide-react';
import { BenefitCard } from '../types';

export default function HealthBenefits() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<string>('soup');

  const benefits: BenefitCard[] = [
    {
      id: 'spleen',
      title: '健脾益胃',
      sub: '促进吸收 · 调理脾胃虚寒',
      description: '佛手山药富含淀粉酶、多酚氧化酶等淀粉活性酶。这些物质有助于脾胃消化顺滑进行，是对抗慢性支气管炎、腹泻与营养摄入不良的温和天然调养剂。',
      iconName: 'heart',
    },
    {
      id: 'body',
      title: '滋补强身',
      sub: '免疫调节 · 抵抗疲劳',
      description: '富含十六种游离氨基酸、多胜肽以及丰富的活性黏液质。能明显促进白抗体及淋巴细胞的分化裂变，起到强身固体、延缓细胞衰老和显著抵抗长途劳作疲劳的功效。',
      iconName: 'shield',
    },
    {
      id: 'lungs',
      title: '润肺止咳',
      sub: '清咽润喉 · 缓解支气炎',
      description: '块茎黏液多糖与特有皂苷结合体，具有极强的物理润滑与细胞保护属性，能协同肺泡液平衡张力。民间常用来煲汤饮汁以润养干渴气管，化痰并止咳。',
      iconName: 'flame',
    },
    {
      id: 'sugar',
      title: '降低血糖',
      sub: '协助胰素 · 减速吸收',
      description: '其高黏性复合多糖可阻滞多余淀粉在肠道的水解速度，避免进食后糖指数发生剧烈跃变。富含可溶性膳食纤维，是糖尿病等糖代谢减低患者的极佳辅主食。',
      iconName: 'bean',
    },
    {
      id: 'origin',
      title: '药食同源',
      sub: '上乘山药 · 烹食皆宣',
      description: '《本草纲目》特列入“菜部”之首。不温不燥不寒，能做主食饱腹，也能入方剂煎熬。男女老幼均能长期四季无虞食用。',
      iconName: 'award',
    }
  ];

  const recipes = [
    {
      id: "soup",
      name: "佛手山药排骨汤 (Traditional Bone Soup)",
      difficulty: "简单",
      time: "45分钟",
      steps: "1. 佛手山药削皮，切滚刀厚块。 2. 排骨飞水去浮腥。 3. 炖锅入排骨与老姜片熬30分钟。 4. 下温软佛手山药块共沸15分钟即可。山药软烂、汤汁黏足、唇齿留香。"
    },
    {
      id: "steam",
      name: "原生态清蒸佛手山药 (Healthy Steamed Yam)",
      difficulty: "新手",
      time: "15分钟",
      steps: "1. 无需削皮，洗净表面砂壤土。2. 切成厚约3cm的原生态断指圆圈。3. 蒸锅水沸后放入，大火隔水清蒸15分钟。4. 直接蘸食有机白糖、蜜糖；粉糯可口、极富嚼劲与粘性。"
    },
    {
      id: "powder",
      name: "暖胃山药燕麦糊 (Energy Warm Yam Puree)",
      difficulty: "中等",
      time: "20分钟",
      steps: "1. 佛手山药蒸透。 2. 剥去薄衣，捣碎成软泥。 3. 加入温牛奶、燕麦片及少许干桂花。 4. 小火微沸慢搅均匀。特别适宜晨起暖胃、胃炎患者慢速保养。"
    }
  ];

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-stone-100 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2 font-serif">
            <span className="p-1 bg-amber-50 rounded-lg text-amber-700">🩺</span>
            营养成分与药食功效
          </h2>
          <p className="text-xs text-stone-500 font-mono">NUTRITIONAL COMPOSITION & MEDICAL VALUE</p>
        </div>
      </div>

      {/* Grid for Efficacy Cards containing interactive micro-details */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {benefits.map((benefit) => {
          const isSelected = activeCard === benefit.id;
          return (
            <motion.div
              key={benefit.id}
              onClick={() => setActiveCard(isSelected ? null : benefit.id)}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden h-44 ${
                isSelected 
                  ? 'bg-stone-900 text-stone-100 border-stone-950 shadow-md ring-1 ring-stone-700' 
                  : 'bg-[#FCFBF9] border-stone-200 text-stone-800 hover:bg-stone-50 hover:border-stone-300'
              }`}
            >
              {/* Highlight background text label */}
              <div className="absolute -bottom-6 -right-6 text-7xl font-bold font-serif opacity-[0.03] text-stone-400 select-none pointer-events-none">
                药
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-stone-800 text-amber-400' : 'bg-white border border-stone-150 text-emerald-700'}`}>
                    {benefit.iconName === 'heart' && <Heart className="w-5 h-5" />}
                    {benefit.iconName === 'shield' && <ShieldCheck className="w-5 h-5" />}
                    {benefit.iconName === 'flame' && <Flame className="w-5 h-5" />}
                    {benefit.iconName === 'bean' && <Bean className="w-5 h-5" />}
                    {benefit.iconName === 'award' && <Award className="w-5 h-5" />}
                  </div>
                  <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-45 text-amber-400' : 'text-stone-400'}`} />
                </div>

                <div className="space-y-0.5">
                  <h3 className={`font-serif font-black text-sm ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                    {benefit.title}
                  </h3>
                  <p className={`text-[10px] font-mono font-medium ${isSelected ? 'text-amber-400/80' : 'text-emerald-850/80'}`}>
                    {benefit.sub}
                  </p>
                </div>
              </div>

              {/* Interaction prompt text */}
              <div className={`text-[9px] font-mono tracking-widest ${isSelected ? 'text-stone-400 font-bold' : 'text-stone-450 font-semibold'}`}>
                {isSelected ? '点击关闭收起' : '点击查看成分原理'}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded detailed biochemistry panel */}
      {activeCard && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-stone-900 text-stone-200 rounded-2xl p-5 border border-stone-850 space-y-3"
        >
          {benefits.map(b => {
            if (b.id !== activeCard) return null;
            return (
              <div key={b.id} className="space-y-2">
                <div className="flex justify-between items-baseline gap-4">
                  <h4 className="text-sm font-bold text-amber-400 font-serif flex items-center gap-1.5">
                    <span>🔬</span> {b.title} 药理机理解析
                  </h4>
                  <span className="text-[10px] font-mono tracking-wider text-stone-400">BIOCHEMISTRY METABOLISM</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed font-sans">
                  {b.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      )}

      {/* Culinary Cooking Guide Section (食谱指南) */}
      <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-stone-200/50 pb-2">
          <span className="text-xs font-bold text-stone-800 font-serif flex items-center gap-1.5">
            <span>🍳</span> 药膳同源 · 佛手山药美味厨房 (Culinary Recipes)
          </span>
          <div className="flex gap-1.5">
            {recipes.map(rec => (
              <button
                key={rec.id}
                onClick={() => setSelectedRecipe(rec.id)}
                className={`px-2.5 py-1 rounded text-[10px] font-bold font-sans border transition ${
                  selectedRecipe === rec.id 
                    ? 'bg-emerald-600 text-white border-emerald-600' 
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {rec.name.split(' (')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe detail card */}
        {recipes.map(rec => {
          if (rec.id !== selectedRecipe) return null;
          return (
            <motion.div 
              key={rec.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="md:col-span-4 space-y-2 border-r border-stone-200/60 pr-4">
                <h4 className="font-bold text-sm text-stone-800 font-serif">{rec.name}</h4>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] bg-stone-200 text-stone-800 font-bold px-1.5 py-0.5 rounded font-mono">
                    难度: {rec.difficulty}
                  </span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-1.5 py-0.5 rounded font-mono">
                    时长: {rec.time}
                  </span>
                </div>
              </div>
              <div className="md:col-span-8">
                <span className="text-[10px] font-bold font-mono text-emerald-800 uppercase block mb-1">
                  🍳 烹饪步骤指导 (Step-by-step):
                </span>
                <p className="text-xs text-stone-600 leading-relaxed font-sans font-medium">
                  {rec.steps}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
