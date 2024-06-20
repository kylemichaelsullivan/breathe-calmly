import {
	useState,
	useEffect,
	createContext,
	useContext,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from 'react';

type PlayingContextType = {
	isPlaying: boolean;
	setIsPlaying: Dispatch<SetStateAction<boolean>>;
};

const PlayingContext = createContext<PlayingContextType | undefined>(undefined);

type PlayingProviderProps = {
	children: ReactNode;
};

export const PlayingProvider = ({ children }: PlayingProviderProps) => {
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setIsPlaying(false);
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<PlayingContext.Provider value={{ isPlaying, setIsPlaying }}>
			{children}
		</PlayingContext.Provider>
	);
};

export const usePlaying = (): PlayingContextType => {
	const context = useContext(PlayingContext);
	if (!context) {
		throw new Error('usePlaying must be used within a <PlayingProvider />');
	}
	return context;
};
