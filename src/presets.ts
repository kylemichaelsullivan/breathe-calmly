import type { Color } from './types';

type Preset = Readonly<{
	label: string;
	values: ReadonlyArray<{
		phase: string;
		color: Color;
		max: number;
	}>;
}>;

export const PRESETS: ReadonlyArray<Preset> = [
	{
		label: 'Default',
		values: [
			{ phase: 'Inhale', color: 'yellow', max: 4 },
			{ phase: 'Hold', color: 'red', max: 7 },
			{ phase: 'Exhale', color: 'green', max: 8 },
		],
	},
	{
		label: 'Box Breathing',
		values: [
			{ phase: 'Inhale', color: 'yellow', max: 4 },
			{ phase: 'Hold', color: 'red', max: 4 },
			{ phase: 'Exhale', color: 'green', max: 4 },
			{ phase: 'Hold', color: 'red', max: 4 },
		],
	},
	{
		label: '7-11 Breathing',
		values: [
			{ phase: 'Inhale', color: 'yellow', max: 7 },
			{ phase: 'Exhale', color: 'green', max: 11 },
		],
	},
	{
		label: '4-4-6-2 Breathing',
		values: [
			{ phase: 'Inhale', color: 'yellow', max: 4 },
			{ phase: 'Hold', color: 'red', max: 4 },
			{ phase: 'Exhale', color: 'green', max: 6 },
			{ phase: 'Hold', color: 'red', max: 2 },
		],
	},
	{
		label: '6-2-4-2 Breathing',
		values: [
			{ phase: 'Inhale', color: 'yellow', max: 6 },
			{ phase: 'Hold', color: 'red', max: 2 },
			{ phase: 'Exhale', color: 'green', max: 4 },
			{ phase: 'Hold', color: 'red', max: 2 },
		],
	},
] as const;
