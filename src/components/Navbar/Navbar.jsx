/**
 * @imports : react, css
 *
 */

import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, matchPath, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

// -------------------------------------------------------------

/**
 * @extras : config, styles
 *
 */

// let activeClassName = styles.active
const navigations = [
	{
		title: 'home',
		path: '/',
	},
	{
		title: 'about',
		path: '/about',
	},
	{
		title: 'how we work',
		path: '/mode',
	},
	{
		title: 'impacts & reports',
		path: '/impacts',
	},
	{
		title: 'people',
		path: '/people',
	},
	{
		title: 'contact',
		path: '/contact',
	},
];

// -------------------------------------------------------------

/**
 * @main : Navbar
 *
 */
const Navbar = ({ isDesktop }) => {
	const is_desktop = isDesktop;

	const [showMenu, setShowMenu] = useState(false);
	const { pathname } = useLocation();
	const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

	useEffect(() => {
		isDesktop ? setShowMenu(true) : setShowMenu(false);
	}, [is_desktop]);
	const navElement = (
		<nav>
			<ul>
				{navigations.map((item) => {
					return (
						<li key={item.title}>
							<NavLink
								onClick={() => setShowMenu(!showMenu)}
								end
								className={({ isActive }) => (isActive ? styles.active : '')}
								to={item.path}
							>
								{item.title}
							</NavLink>
						</li>
					);
				})}
				<button>
					<Link>Donate</Link>
				</button>
			</ul>
		</nav>
	);

	return (
		<header>
			<div className={styles.logo}>
				<img src="/assets/logo.png" alt="" />
			</div>
			{!is_desktop && showMenu && navElement}
			{is_desktop && showMenu && navElement}
			{!is_desktop && (
				<div className={styles.hamburger} onClick={() => setShowMenu(!showMenu)}>
					<Icon icon={showMenu ? 'ep:close' : 'quill:hamburger'} />
				</div>
			)}
		</header>
	);
};

// -------------------------------------------------------------

export default Navbar;
