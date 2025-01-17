import type { ChangeEvent } from 'react';

import type { Phase, ModifyPhases, MetaType } from '../types';

import Duration from './Duration';
import ModifyDurations from './ModifyDurations';

type DurationsProps = {
	data: Phase[];
	modifyPhases: ModifyPhases;
	handleMetaChange: (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		index: number,
		type: MetaType,
	) => void;
	handleDurationChange: (
		e: ChangeEvent<HTMLInputElement>,
		index: number,
	) => void;
};

function Durations({
	data,
	modifyPhases,
	handleMetaChange,
	handleDurationChange,
}: DurationsProps) {
	let i = 0;

	return (
		<div className='Durations flex flex-col gap-4 border border-black bg-gray-100 shadow-md'>
			{data.map((duration: Phase, index: number) => (
				<Duration
					phase={duration.phase}
					color={duration.color}
					max={duration.max}
					index={index}
					key={i++}
					handleMetaChange={handleMetaChange}
					handleDurationChange={handleDurationChange}
				/>
			))}
			<ModifyDurations modifyPhases={modifyPhases} />
		</div>
	);
}

export default Durations;
