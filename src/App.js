/* eslint-disable react/jsx-filename-extension */
/* eslint-disable arrow-body-style */
import { useState } from 'react';
// components
import Header from './components/Header';
// styles
import './App.css';
import Loader from './components/Loader';

const App = () => {
	const [preloader, setPreloader] = useState(true);
	setTimeout(() => {
		setPreloader(false);
	}, 4000);

	return <div className="App">{preloader ? <Loader /> : <Header />}</div>;
};

export default App;
