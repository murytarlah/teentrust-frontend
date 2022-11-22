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
		path: '/culture',
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
const Navbar = ({ isDesktop, isMobile }) => {
	const is_desktop = isDesktop;
	const [showMenu, setShowMenu] = useState(false);
	const { pathname } = useLocation();
	const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
	
	useEffect(() => {
		if (isMobile) {
			setShowMenu(false);
		}
	}, [isMobile]);
	useEffect(() => {
		if (isDesktop) {
			setShowMenu(true)
		}
	}, [isDesktop,showMenu]);

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
					<NavLink className={({ isActive }) => (isActive ? styles.active : '')} to={'/donate'}>
						Donate
					</NavLink>
				</button>
			</ul>
		</nav>
	);
	console.log(isDesktop,showMenu)
	
	return (
		<>
			<div className={'flex flex-col md:flex-row justify-between max-w-6xl mx-auto w-11/12 p-2 items-center h-max'}>
				<p className='text-xl font-semibold'>Ongoing School-Kits-Programme</p>
				<button className="my-4">
					<a
						href="https://zfrmz.com/1ipJXQH8a1rN7L050eZY"
						target={'_blank'}
						className={'bg-secondary-main p-3 px-5 text-white rounded-md font-semibold'}
					>
						Open
					</a>
				</button>
			</div>
			<header>
				<div className={styles.logo}>
					<img src="/assets/logo.png" alt="" />
				</div>
				{!isDesktop && showMenu && navElement}
				{isDesktop && showMenu && navElement}
				{!isDesktop && (
					<div className={styles.hamburger} onClick={() => setShowMenu(!showMenu)}>
						<Icon icon={showMenu ? 'ep:close' : 'quill:hamburger'} />
					</div>
				)}
			</header>
		</>
	);
};

// -------------------------------------------------------------

export default Navbar;
