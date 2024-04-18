import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import type { HandleClick } from '../types';

type TogglerProps = {
	isPlaying: boolean;
	handleClick: HandleClick;
};

function Toggler({ isPlaying, handleClick }: TogglerProps) {
	return (
		<div className='Toggler width-full flex justify-center py-8'>
			<button
				type='button'
				className='min-w-12 border border-black px-4 py-2 shadow-sm duration-200 hover:bg-gray-300 hover:shadow-md'
				title={isPlaying ? 'Stop' : 'Play'}
				onClick={(e) => handleClick(e)}
				id='toggler-button'
			>
				<FontAwesomeIcon
					icon={isPlaying ? faStop : faPlay}
					className='cursor-pointer self-center transition duration-300 hover:bg-gray-300'
				/>
			</button>
		</div>
	);
}

export default Toggler;
