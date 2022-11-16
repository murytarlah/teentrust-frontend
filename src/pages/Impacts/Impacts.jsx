import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import styles from './Impacts.module.css'

const Impacts = () => {
	return (
		<Page title={'Impacts | TreenTrust'}>
			<div className={styles.hero}>
				<div>
					<h1>Impacts, Reports, Projects & Initiatives</h1>
					{/* <div>
						<img src="/assets/impacts.png" alt="" />
					</div> */}
				</div>
			</div>
			<div className={styles.statis}>
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
			</div>
			<div className={styles.projects}>
				<h2>Projects & Initiatives</h2>
				<div className={styles.project1}>
					<div className={styles.p_header}>
						<div>
							<img src="/assets/s-t-s.svg" alt="" />
						</div>
						<h3>Street-to-School Project</h3>
					</div>
					<div className={styles.project_info}>
						<div>
							<p>
								Nigeria is one of the countries with the highest statistics of out-of-school children in the world.
								Children who live on the streets and source for livelihood on the streets through hawking or begging are
								among the most neglected and often at the greatest risk of waywardness. Such children often them grow to
								become touts and thugs threatening the peace of the community in various ways.
							</p>
							<p>
								Although the Universal Basic Education (UBE) Act exists which is intended to provide free basic formal
								education for every Nigerian child till junior secondary school level, institutional action plan geared
								towards educating children on the streets is still a topic of consideration and discussion.
							</p>
						</div>
						<div>
							<img src="/assets/impact3.png" alt="" />
						</div>
						<div>
							<p>
								Sadly, in cases where the opportunities arise for these children to go to school, they are faced with
								the difficulty of being unable to easily integrate into the formal education system, often because they
								have never attended school or have been out of school for a long period of time. Quite contrastingly,
								events have shown that save the non-access to education, these children have great potentials to attain
								a great future and impact their world positively.
							</p>
						</div>
					</div>
					<div className={styles.p_details}>
						<div className={styles.content}>
							<p>
								Our Street-To-School (STS) Project is therefore specially focused on helping these children gain access
								to primary and secondary education. Through community engagements and partnership, we identify such
								children condemned to the streets, take them through initial Pre-school Enrollment Programme (PrEP)
								after which they are given Enrollment Scholarships (ENSC) for primary or secondary education or both.
							</p>
							<p>
								These children are the further engaged in Post Enrollment Programme (PoEP) during which they are
								provided leadership, academic and career mentoring. STS also adopts a preventive mechanism by providing
								Continuous School Scholarships (CSS) for children or teenagers about to drop-out of school due to one
								cogent reason such as orphans who do not have education funding opportunities. Our aim is to prevent a
								new street child in such scenarios.
							</p>
						</div>
						<div>
							<img src="/assets/impact4.png" alt="" />
						</div>
					</div>
				</div>
				<div className={styles.project2}>
					<div className={styles.p_header}>
						<div>
							<img src="/assets/deworm.svg" alt="" />
						</div>
						<h3>Deworming Project</h3>
					</div>
					<div className={styles.p_details}>
						<div className={styles.content}>
							<p>
								Our Street-To-School (STS) Project is therefore specially focused on helping these children gain access
								to primary and secondary education. Through community engagements and partnership, we identify such
								children condemned to the streets, take them through initial Pre-school Enrollment Programme (PrEP)
								after which they are given Enrollment Scholarships (ENSC) for primary or secondary education or both.
							</p>
							<p>
								These children are the further engaged in Post Enrollment Programme (PoEP) during which they are
								provided leadership, academic and career mentoring. STS also adopts a preventive mechanism by providing
								Continuous School Scholarships (CSS) for children or teenagers about to drop-out of school due to one
								cogent reason such as orphans who do not have education funding opportunities. Our aim is to prevent a
								new street child in such scenarios.
							</p>
						</div>
						<div>
							<img src="/assets/impact5.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
};

export default Impacts;
