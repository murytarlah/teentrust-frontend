import React, {useState} from 'react';
import Page from '../../components/Page';
import styles from './People.module.css'
import { BoardOfDirectors_Management, BoardOfTrustees, Volunteers, } from '../../_mocks/data';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';

const People = () => {

	const [BOfT, setBOfT] = useState(BoardOfTrustees);
	const [volunteers, setVolunteers] = useState(Volunteers);
	const [BOfD, setBOfD] = useState(BoardOfDirectors_Management);

	return (
		<Page title={'People | TeenTrust'}>
			<div className={styles.hero}>
				<div>
					<div>
						<h1>
							Our <span>People</span>
						</h1>
						<p>We have a network of professionals working to ensure we deliver on our vision and mission.</p>
					</div>
				</div>
			</div>
			<div className={styles.trustees}>
				<div>
					<div>
						<img src="/assets/trustees.svg" alt="" />
					</div>
					<h2>Board of Trustees</h2>
				</div>
				<div className={styles.members}>
					{BOfT.map((member) => {
						return <Card color={'purple'} details={member} key={member.id} id={member.id} />;
					})}
				</div>
			</div>
			<div className={styles.management}>
				<div>
					<div>
						<img src="/assets/s-t-s.svg" alt="" />
					</div>
					<h2>Board of Directors/Management</h2>
				</div>
				<div className={styles.members}>
					{BOfD.map((member) => {
						return <Card color={'green'} details={member} key={member.id} id={member.id} />;
					})}
				</div>
			</div>
			<div className={styles.volunteers}>
				<div>
					<div>
						<img src="/assets/volunteer.svg" alt="" />
					</div>
					<h2>Our Volunteers</h2>
				</div>
				<div className={styles.members}>
					{volunteers.map((member) => {
						return <Card color={'green'} details={member} key={member.id} id={member.id} />;
					})}
					<div>
						<h3>Volunteer with Us</h3>
						<p>Join hands with us in our quest to create a better life for the African child.</p>
						<button> <Link to={""}>Get Started</Link> </button>
					</div>
				</div>
			</div>
		</Page>
	);
}

export default People;
