import type { Color } from '../types';

type CounterProps = {
	phase: string;
	color: Color;
	count: number;
	isPlaying: boolean;
};

function Counter({ phase, color, count, isPlaying }: CounterProps) {
	const content = isPlaying
		? `${count || 1} (${phase})`
		: 'Press Play to Start';

	return (
		<div
			className={`Counter prose shadow-md bg-${
				isPlaying && color ? color : 'white'
			}-400 border border-black p-4 text-center`}
			title={isPlaying && phase ? phase : 'Press Play to Start'}
		>
			<p>{content}</p>
		</div>
	);
}

export default Counter;
