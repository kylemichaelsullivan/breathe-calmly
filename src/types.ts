import type { COLORS } from './colors';

export type Color = (typeof COLORS)[number];

export type Phase = {
	phase: string;
	color: Color;
	max: number;
};

export type HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => void;
