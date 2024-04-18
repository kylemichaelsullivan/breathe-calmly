import { PRESETS } from '../presets';

type PresetsProps = {
	// biome-ignore lint/suspicious/noExplicitAny: <Needs to be typed>
	handlePreset: any;
};

function Presets({ handlePreset }: PresetsProps) {
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
					<button
						type='button'
						className='transition-300 border border-black p-2 shadow-sm hover:bg-gray-300 hover:shadow-md'
						key={preset.label}
						title={`Apply ${preset.label}`}
						onClick={() => handlePreset(preset.values)}
					>
						{preset.label}
					</button>
				))}
			</div>
		</div>
	);
}

export default Presets;
