/* eslint-disable react/jsx-filename-extension */
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
// components
import Loader from './components/Loader';
import MainRouts from './router/router';
// styles
import './App.css';

const App = () => {
	const [preloader, setPreloader] = useState(true);
	setTimeout(() => {
		setPreloader(false);
	}, 4000);

	return (
		<div className="App">
			<BrowserRouter>{preloader ? <Loader /> : <MainRouts />}</BrowserRouter>
		</div>
	);
};

export default App;
