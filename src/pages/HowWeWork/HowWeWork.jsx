import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import styles from './HowWeWork.module.css';

const HowWeWork = () => {
	return (
		<Page title={'How We Work | TeenTrust'}>
			<div className={styles.main}>
				<h1>
					<span>How</span> We Work
				</h1>
				<div className={styles.m_content}>
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
				<div>
					<img src="/assets/howWeWork.png" alt="" />
				</div>
			</div>
			<div className={styles.hww_content_1}>
				<div>
					<p>
						Health Cases (HC) marked as “severe” during request submission are processed within twenty-four hours of
						receipt and funded. All other cases of health requests are normally processed within forty-eight hours. In
						view of our target, we are only able to entertain and support cases involving less privileged children and
						teenagers. Depending on availability of funding, we provided costs covering hospital bills, drugs, surgery
						and other treatment requirements.
					</p>
					<p>
						Education Cases (EC) are normally processed within 72 hours of receipt or more depending on the nature of
						the case and type of support required. Education support includes school kits, textbooks, notebooks,
						stationery, new school enrolment and other educational requests.
					</p>
				</div>
				<div>
					<img src="/assets/howWeWork2.png" alt="" />
				</div>
				<div>
					<p>
						All cases of requests, whether education or health based, are screened and verified before funding is
						provided.
					</p>
					<p>
						You can submit an education or health support request by clicking <Link to={'mailto:'}>here</Link>. For
						enquiries on health or education support please reach out to{' '}
						<span>health.support@teenstrustfoundation.org </span> or{' '}
						<span>
							education.support@ <br /> teenstrustfoundation.org
						</span>{' '}
						respectively.
					</p>
				</div>
			</div>
			<div className={styles.hww_content_2}>
				<div>
					<div>
						<div>
							<img src="/assets/eh-projects.png" alt="" />
						</div>
						<h3>Education and Health Intervention Projects</h3>
					</div>
					<p>
						We implement, from time to time, various projects aimed at mass education or health intervention for
						children and teenagers. Our Health and education support offices conceive, design and implement various
						projects targeting various identified localities and providing mass intervention.
					</p>
				</div>
				<div>
					<img src="/assets/howWeWork3.png" alt="" />
				</div>
				<div>
					<p>
						Our health projects are often aimed at preventive health intervention and mass treatment. Such projects
						sometimes also are implemented to mark various world health days. Please check the details of our current
						health projects under Projects & Initiatives.
					</p>
					<p>
						Our Education Support office plans and implement projects aimed at mass education support provided for less
						privileged pupils in government owned schools. These supports are often targeted at providing aids directly
						to these children or in some instances indirectly by providing hitherto unavailable school requirements that
						facilitates learning. Please check the details of our current projects under{' '}
						<Link to={''}>Projects & Initiatives.</Link>
					</p>
				</div>
			</div>
			<div className={styles.hww_content_3}>
				<div>
					<div>
						<div>
							<img src="/assets/partnership.png" alt="" />
						</div>
						<h3>Fostering Partnership </h3>
					</div>
					<p>
						Our foundation fosters partnership with other foundations or individuals pursuing goals that align with our
						mission, vision and objectives. We also partner with other establishments pursuing corporate socials
						responsibility projects that are in agreement with what we do. For us, our partners are either regular
						partners, project partners or administrative partners.
					</p>
				</div>
				<div>
					<img src="/assets/howWeWork4.png" alt="" />
				</div>
				<div>
					<p>
						Regular partners are our day-to-day partners who have or run regular activities that are similar to what we
						do every day: giving education or health support. We work together with our project partners in implementing
						intervention projects whether we are the projects owners or they are. Our administrative partners are
						companies that provide us with their services required by us for free or at huge discounts. With these
						partners, we are able to reduce administrative expenses and thus save more funds to be used in giving direct
						support or implementing our projects. Our administrative partners thus form part of our network or sponsors
						and donors.
					</p>
				</div>
			</div>
			<div className={styles.p_apps}>
				<div>
					<img src="/assets/google-for-nonprofits-twitter.png" alt="" />
				</div>
				<div>
					<img src="/assets/kobi.png" alt="" />
				</div>
				<div>
					<img src="/assets/slack-for-nonprofits-twitter.png" alt="" />
				</div>
				<div>
					<img src="/assets/techsoup.png" alt="" />
				</div>
				<div>
					<img src="assets/aimoc 1.png" alt="" />
				</div>
			</div>
			<div className={styles.ms_vs}>
				<div>
					<div className={styles.mission}>
						<div>
							<img src="/assets/es-request.svg" alt="" />
						</div>
						<h3>Submit Education Support Request</h3>
						<p>
							Kindly click the link <Link to={''}>here</Link> to submit; your support request
						</p>
					</div>
					<div className={styles.vission}>
						<div>
							<img src="/assets/hs-request.svg" alt="" />
						</div>
						<h3>Submit Health Support Request</h3>
						<p>
							Kindly click the link <Link to={''}>here</Link> to submit; your support request
						</p>
					</div>
				</div>
			</div>
		</Page>
	);
};

export default HowWeWork;
