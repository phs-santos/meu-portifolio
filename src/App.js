import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Routes from './router/Routes'

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes />

			<Footer />
		</BrowserRouter>

	);
}

export default App;
