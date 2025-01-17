import { useCallback, useEffect, useState, type ChangeEvent } from 'react';

import type { Color, MetaType, Phase } from '../types';

import { useController } from '../context/Controller';

import Title from './Title';
import Counter from './Counter';
import Durations from './Durations';
import Toggler from './Toggler';
import Presets from './Presets';

import {
	DEFAULT_STAGE as STAGE,
	DEFAULT_COUNT as COUNT,
	DEFAULT_DATA as DATA,
} from '../defaults';

function Main() {
	const [isPlaying, setIsPlaying] = useState(false);
	const { stage, count, setStage, setCount } = useController();

	const [data, setData] = useState<Phase[]>(DATA);

	const newHoldPhase: Phase = {
		phase: 'Hold',
		color: 'red',
		max: 4,
	};

	const initializeStage = useCallback(() => {
		setStage(STAGE);
	}, [setStage]);

	const initializeCount = useCallback(() => {
		setCount(COUNT);
	}, [setCount]);

	const reset = useCallback(() => {
		initializeStage();
		initializeCount();
	}, [initializeStage, initializeCount]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prevCount: number) => {
				if (!isPlaying) {
					reset();
					return 1;
				}

				const max = data[stage].max;

				if (prevCount < max) {
					return prevCount + 1;
				}

				setStage((prevStage: number) => (prevStage + 1) % data.length);
				return 1;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [data, isPlaying, stage, setCount, setStage, reset]);

	const handleMetaChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		index: number,
		meta: MetaType,
	) => {
		const value = e.target.value;

		setData((prevData: Phase[]) => {
			const nextData = [...prevData];
			nextData[index] = {
				...nextData[index],
				[meta]: meta === 'color' ? (value as Color) : value,
			};

			return nextData;
		});
	};

	const handleDurationChange = (
		e: ChangeEvent<HTMLInputElement>,
		index: number,
	) => {
		const value = e.target.value;

		setData((prevData: Phase[]) => {
			const nextData = [...prevData];
			nextData[index].max = Number.parseInt(value);
			return nextData;
		});
	};

	const modifyPhases = (action: '-' | '+') => {
		setData((prevData: Phase[]) => {
			const nextData = [...prevData];
			if (action === '-') {
				nextData.pop();
				if (nextData.length === 0) {
					nextData.push(newHoldPhase);
				}
			} else {
				nextData.push(newHoldPhase);
			}
			return nextData;
		});
	};

	const handleTogglerClick = () => {
		if (isPlaying) {
			setIsPlaying(false);
			reset();
		} else {
			setIsPlaying(true);
			window.scrollTo(0, 0);
		}
	};

	const handlePresetClick = (presetData: Phase[]) => {
		setData([]);
		reset();
		setData(presetData);
	};

	return (
		<main className='Main mx-auto flex max-w-screen-md flex-col flex-nowrap gap-4 p-4'>
			<Title title='Breathe Calmly' />

			<Counter
				isPlaying={isPlaying}
				phase={data[stage].phase}
				color={data[stage].color}
				count={count}
			/>

			<Durations
				data={data}
				handleMetaChange={handleMetaChange}
				handleDurationChange={handleDurationChange}
				modifyPhases={modifyPhases}
			/>

			<Toggler isPlaying={isPlaying} handleClick={handleTogglerClick} />

			<Presets handleClick={handlePresetClick} />
		</main>
	);
}

export default Main;
