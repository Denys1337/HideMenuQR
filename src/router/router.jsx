import React from 'react';
import { Route, Routes } from 'react-router-dom';
// components
import Menu from '../components/Menu';
import Bar from '../pages/Bar';
import Food from '../pages/Food';
// helpers
import { ROUTE } from '../core/routers';

const MainRouts = () => (
	<Routes>
		<Route path="/" element={<Menu />} />
		<Route path={ROUTE.base.bar} element={<Bar />} />
		<Route path={ROUTE.base.food} element={<Food />} />
	</Routes>
);

export default MainRouts;
