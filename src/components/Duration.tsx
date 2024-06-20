import type { ChangeEvent } from 'react';

import { COLORS } from '../colors';

import type { Color, MetaType } from '../types';

type DurationProps = {
	color: Color;
	phase: string;
	max: number;
	index: number;
	handleMetaChange: (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		index: number,
		type: MetaType
	) => void;
	handleDurationChange: (
		event: ChangeEvent<HTMLInputElement>,
		index: number
	) => void;
};

function Duration({
	color,
	phase,
	max,
	index,
	handleMetaChange,
	handleDurationChange,
}: DurationProps) {
	return (
		<div className={`Duration bg-${color}-400 border border-gray-400 p-4`}>
			<div className='flex justify-between gap-1 font-bold'>
				<input
					type='text'
					className='w-full flex-auto bg-transparent p-1'
					value={phase}
					onChange={(e) => handleMetaChange(e, index, 'phase')}
				/>
				<select
					className='cursor-pointer max-w-24 flex-1 bg-transparent text-right'
					value={color}
					onChange={(e) => handleMetaChange(e, index, 'color')}
				>
					{COLORS.map((color) => (
						<option key={color}>{color}</option>
					))}
				</select>
			</div>

			<div className='flex flex-col flex-nowrap gap-2 pt-1 sm:flex-row'>
				<input
					type='range'
					className='cursor-pointer w-full text-center sm:flex-auto'
					name={phase}
					min={1}
					max={15}
					value={max}
					onChange={(e) => handleDurationChange(e, index)}
				/>
				<input
					type='number'
					className='w-full min-w-16 border p-2 text-center sm:max-w-max sm:flex-1'
					name={phase}
					min={1}
					placeholder={phase}
					value={max}
					onChange={(e) => handleDurationChange(e, index)}
				/>
			</div>
		</div>
	);
}

export default Duration;
