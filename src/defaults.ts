import type { Phase } from './types';

export const DEFAULT_STAGE = 0;
export const DEFAULT_COUNT = 1;

export const DEFAULT_DATA: Phase[] = [
	{ phase: 'Inhale', color: 'yellow', max: 4 },
	{ phase: 'Hold', color: 'red', max: 7 },
	{ phase: 'Exhale', color: 'green', max: 8 },
];
