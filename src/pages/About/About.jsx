import React from 'react';
import Page from '../../components/Page';
import styles from './About.module.css'

const About = () => {
	return (
		<Page title={'About | TeenTrust'}>
			<div className={styles.hero}>
				<div>
					<h1>
						<span>Who</span> we are
					</h1>
					<div>
						<img src="/assets/who-we-are.png" alt="" />
					</div>
				</div>
			</div>
			<div className={styles.content_1}>
				<div>
					<p>
						Teens Trust Foundation is a Nigeria-based non-governmental organization playing significant role in
						enhancing access to education and health for the less privileged African children and teenagers with an
						initial focus on Nigeria.
					</p>
					<p>
						Nigeria is a country of the young with almost half the entire 180 million strong population, 46%, currently
						under the age of 15. The current total for children under the age of 5 stands at nearly 31 million while
						each year at least 7 million babies are born. Despite this large proportion of children in the country, the
						United Nations Children’s Fund (UNICEF) estimates that Nigeria accounts for more than one in five
						out-of-school children anywhere in the world.
					</p>
					<p>
						The global body also noted that despite concerted global efforts in curtailing the preventable childhood
						deaths, progress in sub-Saharan Africa is lagging behind that of developed countries. Specifically,
						childhood mortality remains a major social and public health problem in Nigeria, making the country the
						second largest contributor to under-five deaths globally.
					</p>
				</div>
			</div>
			<div className={styles.content_2}>
				<div className={styles.content}>
					<div>
						<div>
							<img src="/assets/eh-funding.png" alt="" />
						</div>
						<h3>Education and Health Support/Funding</h3>
					</div>
					<p>
						We receive health support requests for children through the public, our health support team and through
						primary health centers. These requests are screened, on a case-by-case basis, by our health support office
						and legal team concurrently. Cases that pass these screening are then passed to our finance team who
						recommends funds accordingly. Final approval for funding is given by Office of the Executive Director for
						cases requiring small to medium funding. Management approval is required for cases requiring maximum
						funding.
					</p>
				</div>
				<h2>
					Together we can build a <span>better future</span> for the African child!
				</h2>
				<div>
					<img src="/assets/better_f.png" alt="" />
				</div>
			</div>
			<div className={styles.ms_vs}>
				<div>
					<div className={styles.mission}>
						<div>
							<img src="/assets/mission.svg" alt="" />
						</div>
						<h3>Our Mission</h3>
						<p>
							“creating a formidable health and education support systems and structures to enable a responsible future
							for the less privileged children and teenagers in Africa”.
						</p>
					</div>
					<div className={styles.vission}>
						<div>
							<img src="/assets/vission.svg" alt="" />
						</div>
						<h3>Our Vission</h3>
						<p>
							“to enhance successful transition of children from childhood and teenage age to responsible youths who
							nurture great aspirations that can change the world for better.”
						</p>
					</div>
				</div>
			</div>
			<div className={styles.aims_obj}>
				<div className={styles.ao_image}>
					<img src="/assets/target 1.png" alt="" />
				</div>
				<div className={styles.ao_content}>
					<h2>Aims & Objective</h2>
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
						<li>
							To identify and give comprehensive support to African less privileged teenagers with urgent health needs.
						</li>
						<li>To give a general education and health support to the less privileged African child.</li>
					</ul>
				</div>
			</div>
		</Page>
	);
};


export default About;
