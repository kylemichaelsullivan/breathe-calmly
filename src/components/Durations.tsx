import Duration from './Duration';
import ModifyDurations from './ModifyDurations';

import type { Phase } from '../types';

type DurationsProps = {
	// biome-ignore lint/suspicious/noExplicitAny: <Needs to be typed>
	data: any;
	// biome-ignore lint/suspicious/noExplicitAny: <Needs to be typed>
	modifyPhases: any;
	// biome-ignore lint/suspicious/noExplicitAny: <Needs to be typed>
	handleMetaChange: any;
	// biome-ignore lint/suspicious/noExplicitAny: <Needs to be typed>
	handleDurationChange: any;
};

function Durations({
	data,
	modifyPhases,
	handleMetaChange,
	handleDurationChange,
}: DurationsProps) {
	return (
		<div className='Durations flex flex-col gap-4 border border-black bg-gray-100 shadow-md'>
			{data.map((duration: Phase, index: number) => (
				<Duration
					phase={duration.phase}
					color={duration.color}
					max={duration.max}
					index={index}
					// biome-ignore lint/suspicious/noArrayIndexKey: <No ID>
					key={index}
					handleMetaChange={handleMetaChange}
					handleDurationChange={handleDurationChange}
				/>
			))}
			<ModifyDurations modifyPhases={modifyPhases} />
		</div>
	);
}

export default Durations;
