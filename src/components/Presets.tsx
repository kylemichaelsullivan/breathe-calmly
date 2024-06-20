import type { Phase } from '../types';

import { PRESETS } from '../presets';
import Preset from './Preset';

type PresetsProps = {
	handleClick: (presetData: Phase[]) => void;
};

function Presets({ handleClick }: PresetsProps) {
	if (!PRESETS) {
		return null;
	}

	return (
		<div className='Presets flex flex-col flex-nowrap gap-4 border-t border-black pt-8'>
			<h2 className='prose text-center font-serif text-3xl font-bold'>
				Presets
			</h2>

			<div className='flex w-full flex-col justify-center gap-4 md:flex-row'>
				{PRESETS.map((preset) => (
					<Preset
						label={preset.label}
						values={[...preset.values]}
						handleClick={handleClick}
						key={preset.label}
					/>
				))}
			</div>
		</div>
	);
}

export default Presets;
