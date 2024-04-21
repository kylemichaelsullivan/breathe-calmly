import { useCallback, useEffect, useState } from 'react';

import Title from './Title';
import Counter from './Counter';
import Durations from './Durations';
import Toggler from './Toggler';
import Presets from './Presets';

import { DEFAULT_STAGE as STAGE, DEFAULT_COUNT as COUNT } from '../defaults';

import type { Color, Phase } from '../types';

function Main() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [stage, setStage] = useState(STAGE);
	const [count, setCount] = useState(COUNT);

	const [data, setData] = useState<Phase[]>([
		{ phase: 'Inhale', color: 'yellow', max: 4 },
		{ phase: 'Hold', color: 'red', max: 7 },
		{ phase: 'Exhale', color: 'green', max: 8 },
	]);

	const newHoldPhase: { phase: string; color: Color; max: number } = {
		phase: 'Hold',
		color: 'red',
		max: 4,
	};

	const initializeStage = useCallback(() => {
		setStage(STAGE);
	}, []);

	const initializeCount = useCallback(() => {
		setCount(COUNT);
	}, []);

	const reset = useCallback(() => {
		initializeStage();
		initializeCount();
	}, [initializeStage, initializeCount]);

	useEffect(() => {
		const interval = setInterval(() => {
			// biome-ignore lint/suspicious/noExplicitAny: <Needs to be typed>
			setCount((prevCount: any) => {
				if (isPlaying) {
					const max = data[stage].max;

					if (prevCount < max) {
						return prevCount + 1;
					}
					setStage((prevStage) => (prevStage + 1) % data.length);
					return 1;
				}
				reset();
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [data, isPlaying, stage, reset]);

	const handleMetaChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number,
		meta: string
	) => {
		const value = e.target.value;

		// biome-ignore lint/suspicious/noExplicitAny: <Needs to be typed>
		setData((prevData: any) => {
			const nextData = [...prevData];
			nextData[index][meta] = value;
			return nextData;
		});
	};

	const handleDurationChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const value = e.target.value;

		// biome-ignore lint/suspicious/noExplicitAny: <Needs to be typed>
		setData((prevData: any) => {
			const nextData = [...prevData];
			nextData[index].max = value;
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

			<Presets handlePreset={handlePresetClick} />
		</main>
	);
}

export default Main;
