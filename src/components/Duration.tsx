import { COLORS } from '../colors';
import type { Color } from '../types';

type DurationProps = {
	color: Color;
	phase: string;
	max: number;
	index: number;
	handleMetaChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		index: number,
		type: 'phase' | 'color'
	) => void;
	handleDurationChange: (
		event: React.ChangeEvent<HTMLInputElement>,
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
					className='max-w-24 flex-1 cursor-pointer bg-transparent text-right'
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
					className='w-full text-center sm:flex-auto'
					name={phase}
					min='1'
					max='9'
					value={max}
					onChange={(e) => handleDurationChange(e, index)}
				/>
				<input
					type='number'
					className='w-full min-w-16 border p-2 text-center sm:max-w-max sm:flex-1'
					name={phase}
					min='1'
					placeholder={phase}
					value={max}
					onChange={(e) => handleDurationChange(e, index)}
				/>
			</div>
		</div>
	);
}

export default Duration;
