import type { Phase } from '../types';

type PresetProps = {
	label: string;
	values: Phase[];
	handleClick: (presetData: Phase[]) => void;
};

function Preset({ label, values, handleClick }: PresetProps) {
	return (
		<button
			type='button'
			className='transition-300 border border-black p-2 shadow-sm hover:bg-gray-300 hover:shadow-md'
			key={label}
			title={`Apply ${label}`}
			onClick={() => handleClick(values)}
		>
			{label}
		</button>
	);
}

export default Preset;
