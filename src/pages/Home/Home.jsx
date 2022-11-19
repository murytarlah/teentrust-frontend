import React, { useState } from 'react';
import styles from './Home.module.css';
import { BoardOfTrustees, pApps } from '../../_mocks/data';
import Card from '../../components/Card/Card';
import Page from '../../components/Page';
import NiceModal from '@ebay/nice-modal-react';
import Modal from '../../components/modals/pAppModal';

const Home = () => {

	const [email, setEmail] = useState('');
	const [Board,setBoard] = useState(BoardOfTrustees)


	const emailSubscribe = () => {
		
	}
	const people = () => {
		for (let i = 0; i < 4; i++) {
			<Card color={"purple"} details={Board[i]} id={Board[i].id} />
				
		}
	}
	const [windowOffset, setWindowOffset] = useState(0);

	const showAddModal = (id) => {
		setWindowOffset(window.scrollY);
		document.querySelector('.App').style = `position: fixed; top: -${windowOffset}px; left: 0; right: 0;`;
		NiceModal.show(Modal, { id });
	};

	return (
		<Page title={'Home | TeenTrust'}>
			<div className={styles.hero}>
				<div className={styles.hero_content}>
					<h3>Get started today!</h3>
					<h1>Enhancing access to education and health</h1>
					<p>
						Join us to enhance pre-primary, primary and secondary education as well as prompt access to health services
						for the less privileged Nigerian children and teen population.
					</p>
				</div>
				<div className={styles.hero_image}>
					<img src="/assets/hero-image1.png" alt="" />
				</div>
				<button>Get Started</button>
			</div>
			<div className={styles.who_we_are}>
				<div>
					<div className={styles.wwa_image}>
						<img src="/assets/who-we-are.png" alt="" />
					</div>
					<div className={styles.wwa_content}>
						<h2>who we are...</h2>
						<p>
							Teens Trust Foundation is a Nigeria-based non-governmental organization playing significant role in
							enhancing access to education and health for the less privileged African children and teenagers with an
							initial focus on Nigeria.
						</p>
						<button>Learn more</button>
					</div>
				</div>
			</div>
			<div className={styles.our_goal}>
				<div className={styles.og_image}>
					<img src="/assets/target 1.png" alt="" />
				</div>
				<div className={styles.og_content}>
					<h2>We Aim....</h2>
					<ul>
						<li>To enhance the achievement of the world’s target of better health among less privileged teenagers.</li>
						<li>
							To enhance the achievement of the world’s target of basic and secondary education among less privileged
							teenagers.
						</li>
						<li>
							To identify and give comprehensive support to African less privileged teenagers with genuine need for
							primary and/or secondary education support.
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.how_we_work}>
				<div>
					<h2>How we work</h2>
					<div className={styles.eh_funding}>
						<div>
							<div>
								<img src="/assets/eh-funding.png" alt="" />
							</div>
							<h3>Education and Health Support/Funding</h3>
							<p>
								We receive health support requests for children through the public, our health support team and through
								primary health centers. These requests are screened, on a case-by-case basis, by our health support
								office and legal team concurrently.
							</p>
						</div>
					</div>
					<div className={styles.eh_projects}>
						<div>
							<div>
								<img src="/assets/eh-projects.png" alt="" />
							</div>
							<h3>Education and Health Intervention Projects</h3>
							<p>
								We implement, from time to time, various projects aimed at mass education or health intervention for
								children and teenagers. Our Health and education support offices conceive, design and implement various
								projects targeting various identified localities and providing mass intervention.
							</p>
						</div>
					</div>
					<div className={styles.partnership}>
						<div>
							<div>
								<img src="/assets/partnership.png" alt="" />
							</div>
							<h3>Fostering Partnership </h3>
							<p>
								Our foundation fosters partnership with other foundations or individuals pursuing goals that align with
								our mission, vision and objectives. We also partner with other establishments pursuing corporate socials
								responsibility projects that are in agreement with what we do. For us, our partners are either regular
								partners, project partners or administrative partners.
							</p>
							<div className={styles.p_apps}>
								{
									// console.log(pApps);
									pApps.map((ele) => (
										<div id={ele.id} ey={ele.id} onClick={() => showAddModal(ele.id)}>
											<img src={ele.image} alt="" />
										</div>
									))
								}
							</div>
						</div>
					</div>
					<div>
						<button>Learn More</button>
					</div>
				</div>
			</div>
			<div className={styles.stats}>
				<div>
					<div className={styles.beneficiaries}>
						<p>Number of Beneficiaries</p>
						<div>
							<img src="/assets/beneficiaries.svg" alt="" />
						</div>
						<p>100</p>
						<p>Beneficiaries</p>
					</div>
					<div className={styles.support}>
						<p>Amount of Support</p>
						<div>
							<img src="/assets/support.svg" alt="" />
						</div>
						<p>600k+</p>
						<p>Support</p>
					</div>
					<div className={styles.impact_record}>
						<p>Downloadable Impact Reports </p>
						<button>
							2021
							<span>
								<img src="/assets/records.svg" alt="" />
							</span>
						</button>
						<button>
							2022
							<span>
								<img src="/assets/records.svg" alt="" />
							</span>
						</button>
					</div>
				</div>
			</div>
			<div className={styles.people_section}>
				<h2>Our People</h2>
				<div className={styles.ps_content}>
					<p>We have a network of professionals working to ensure we deliver on our vision and mission.</p>
				</div>
				<div className={styles.people}>
					{Board.map((member, index) => {
						return index < 4 && <Card color={'purple'} details={member} id={member.id} />;
					})}
				</div>
				<button>See all</button>
			</div>
			<div className={styles.donations}>
				<div>
					<h2>
						<span>Donate</span> to Our cause
					</h2>
					<p>Join our network of donors and sponsors</p>
					<div>
						<div>
							<h3>Become a Regular Donor</h3>
							<button>Donate now</button>
						</div>
						<div>
							<h3>Become a One Time Donor</h3>
							<button>Donate now</button>
						</div>
						<div>
							<h3>Donate to a Specific Project</h3>
							<button>Donate now</button>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.newsletter}>
				<h2>
					<span>Subscribe</span> to our newsletter
				</h2>
				<form onSubmit={emailSubscribe}>
					<input type="email" placeholder="johndoe@gmail.com"  onChange={(e)=>setEmail(e.target.value)}/>
					<button type="submit">Subscribe</button>
				</form>
			</div>
		</Page>
	);
};

export default Home;
