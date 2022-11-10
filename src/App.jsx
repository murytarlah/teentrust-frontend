/**
 * @imports : react, pages, react-router
 *
 */
import './index.css';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useMediaQuery from './utils/useMediaQuery';
import Impacts from './pages/Impacts';
import HowWeWork from './pages/HowWeWork';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home/Home';

//--------------------------------------------------------------

/**
 * @main : App
 * @returns : node
 *
 */

function App() {
	const isDesktop = useMediaQuery(`(min-width: 750px)`);
	return (
		<Router>
			<div className="App">
				<Navbar isDesktop={isDesktop}></Navbar>
				<Routes>
					<Route exact path={'/'} element={<Home />}></Route>
					<Route exact path={'/about'} element={<About />}></Route>
					<Route exact path={'/contact'} element={<Contact />}></Route>
					<Route exact path={'/mode'} element={<HowWeWork />}></Route>
					<Route exact path={'/impacts'} element={<Impacts />}></Route>
					<Route exact path={'/about'} element={<About />}></Route>
				</Routes>
			</div>
		</Router>
	);
}

//--------------------------------------------------------------

export default App;
