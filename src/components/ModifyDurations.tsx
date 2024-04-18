import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

type ModifyDurationsProps = {
	modifyPhases: (arg: '+' | '-') => void;
};

function ModifyDurations({ modifyPhases }: ModifyDurationsProps) {
	return (
		<div className='ModifyDurations flex justify-between px-2 pb-4'>
			<button
				type='button'
				className='transition-300 min-w-8 rounded-full p-2 hover:bg-gray-300'
				title='Remove Last Phase'
				onClick={() => modifyPhases('-')}
			>
				<FontAwesomeIcon icon={faMinus} />
			</button>

			<button
				type='button'
				className='transition-300 min-w-8 rounded-full p-2 hover:bg-gray-300'
				title='Add Phase to End'
				onClick={() => modifyPhases('+')}
			>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</div>
	);
}

export default ModifyDurations;
