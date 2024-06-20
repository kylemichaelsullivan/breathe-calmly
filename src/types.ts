import type { COLORS } from './colors';

export type Color = (typeof COLORS)[number];

export type Phase = {
	phase: string;
	color: Color;
	max: number;
};

export type ModifyPhases = (arg: '+' | '-') => void;

export type MetaType = 'phase' | 'color';
