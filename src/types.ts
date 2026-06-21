export interface YamAnatomyPart {
  id: string;
  name: string;
  description: string;
  details?: string;
  markerX: number; // Percentage
  markerY: number; // Percentage
}

export interface SoilLayer {
  id: string;
  name: string;
  role: string;
  description: string;
  color: string;
}

export interface TimelineStep {
  id: string;
  months: string;
  title: string;
  description: string;
  farmingTasks: string[];
}

export interface BenefitCard {
  id: string;
  title: string;
  sub: string;
  description: string;
  iconName: string;
}

export interface TrellisPattern {
  id: string;
  title: string;
  description: string;
  illustrationType: 'slant' | 'cross' | 'horizontal' | 'strengthen' | 'tape' | 'reinforce' | 'tidy' | 'vines' | 'flourish';
}
