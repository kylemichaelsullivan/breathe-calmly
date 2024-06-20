import {
	useState,
	createContext,
	useContext,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from 'react';

import { DEFAULT_STAGE as STAGE, DEFAULT_COUNT as COUNT } from '../defaults';

type ControllerContextType = {
	stage: number;
	count: number;
	setStage: Dispatch<SetStateAction<number>>;
	setCount: Dispatch<SetStateAction<number>>;
};

const ControllerContext = createContext<ControllerContextType | undefined>(
	undefined
);

type ControllerProviderProps = {
	children: ReactNode;
};

export const ControllerProvider = ({ children }: ControllerProviderProps) => {
	const [stage, setStage] = useState(STAGE ?? 0);
	const [count, setCount] = useState(COUNT ?? 1);

	return (
		<ControllerContext.Provider
			value={{
				stage,
				count,
				setStage,
				setCount,
			}}
		>
			{children}
		</ControllerContext.Provider>
	);
};

export const useController = (): ControllerContextType => {
	const context = useContext(ControllerContext);
	if (!context) {
		throw new Error(
			'useController must be used within a <ControllerProvider />'
		);
	}
	return context;
};
