import { PlayingProvider } from './context/Playing';
import { ControllerProvider } from './context/Controller';

import Main from './components/Main';

function App() {
	return (
		<div className='App'>
			<PlayingProvider>
				<ControllerProvider>
					<Main />
				</ControllerProvider>
			</PlayingProvider>
		</div>
	);
}

export default App;
