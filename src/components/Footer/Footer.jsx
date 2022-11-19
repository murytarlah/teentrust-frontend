/**
 * 
 * @imports : react
 */
import { Icon } from '@iconify/react';
import React from 'react';
import styles from './Footer.module.css'

//--------------------------------------------------------------


/**
 * @name: Footer
 * @returns : node
 */
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<div>
					<div className={styles.logo}>
						<img src="/assets/logo.png" alt="" />
					</div>
					<p>&#169; TTFWebTeam</p>
				</div>
				<div className={styles.address}>
					<h3>Address</h3>
					<p>5, Princess Abiodun Osiyemi Street, Gbaga, Lagos, Nigeria.</p>
				</div>
				<div className={styles.contacts}>
					<div>
						<img src="/assets/gmail.svg" alt="" />
						<p>info@teenstrustfoundation.org</p>
					</div>
					<div className={styles.phone_number}>
						<img src="/assets/phone.svg" alt="" />
						<p>08121323321</p>
					</div>
					<div className={styles.socials}>
						<div>
							<img src="/assets/instagram.svg" alt="" />
						</div>
						<div>
							<img src="/assets/whatsapp.svg" alt="" />
						</div>
						<div>
							<img src="/assets/facebook.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
