/**
 * @imports : react, pages, react-router
 *
 */
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useMediaQuery from './utils/useMediaQuery';
import Impacts from './pages/Impacts/Impacts';
import HowWeWork from './pages/HowWeWork/HowWeWork';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Peoples from './pages/People/People';
import Donate from './pages/Donate/Donate';
//--------------------------------------------------------------

/**
 * @main : App
 * @returns : node
 *
 */

function App() {
	const isDesktop = useMediaQuery(`(min-width: 800px)`);
	const isMobile = useMediaQuery(`(max-width: 800px)`);
	return (
		<Router>
			<div className="App">
				<Navbar isDesktop={isDesktop} isMobile={isMobile}></Navbar>
				<Routes>
					<Route exact path={'/'} element={<Home />}></Route>
					<Route exact path={'/about'} element={<About />}></Route>
					<Route exact path={'/contact'} element={<Contact />}></Route>
					<Route exact path={'/culture'} element={<HowWeWork />}></Route>
					<Route exact path={'/impacts'} element={<Impacts />}></Route>
					<Route exact path={'/about'} element={<About />}></Route>
					<Route exact path={'/people'} element={<Peoples />}></Route>
					<Route exact path={'/donate'} element={<Donate />}></Route>
				</Routes>
				<Footer></Footer>
			</div>
		</Router>
	);
}

//--------------------------------------------------------------

export default App;
