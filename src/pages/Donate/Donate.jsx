import React from 'react';
import Page from '../../components/Page';
import styles from './Donate.module.css'

const Donate = () => {
	return (
		<Page title={'Donate | TeensTrust'}>
			<div className={styles.hero}>
				<div>
					<div>
						<h1>
							Donate <span>Now</span>
						</h1>
						<p>Join our network of donors and sponsors</p>
					</div>
				</div>
			</div>
			<div className="lg:grid lg:grid-rows-[repeat(2,minmax(0,auto))] lg:grid-cols-2 gap-5 w-11/12 max-w-6xl mx-auto my-16">
				<div className={styles.regular}>
					<div className="flex items-center">
						<div>
							<img src="/assets/d-regular.svg" alt="" />
						</div>
						<h3>Become a Regular Donor</h3>
					</div>
					<div>
						<img src="/assets/donations.png" alt="" />
					</div>
					<button>
						<a href="https://paystack.com/pay/ttf_donations" target={'_blank'}>
							Donate Now
						</a>
					</button>
				</div>
				<div className={styles.onetime}>
					<div className="flex items-center">
						<div>
							<img src="/assets/d-others.png" alt="" />
						</div>
						<h3>One Time Donation</h3>
					</div>
					<div>
						<img src="/assets/donations.png" alt="" />
					</div>
					<div className={styles.details}>
						<h4>Transfer (Account Details)</h4>
						<p>
							<span>Acount Number:</span>0715254845
						</p>
						<p>
							<span>Acount Name:</span>Teens Trust Foundation
						</p>
						<p>
							<span>Bank:</span>Guaranty Trust Bank
						</p>
					</div>
				</div>
				<div className={styles.specific}>
					<div className="flex items-center">
						<div>
							<img src="/assets/d-others.png" alt="" />
						</div>
						<h3>Donate to a Specific Project</h3>
					</div>
					<div>
						<div>
							<img src="/assets/donations.png" alt="" />
						</div>
						<h3>1. Street-to-School</h3>
						<div className={styles.details}>
							<h4>Transfer (Account Details)</h4>
							<p>
								<span>Acount Number:</span>0715254845
							</p>
							<p>
								<span>Acount Name:</span>Teens Trust Foundation
							</p>
							<p>
								<span>Bank:</span>Guaranty Trust Bank
							</p>
						</div>
					</div>
					<div>
						<div>
							<img src="/assets/donations.png" alt="" />
						</div>
						<h3>2. Deworming Project</h3>
						<div className={styles.details}>
							<h4>Transfer (Account Details)</h4>
							<p>
								<span>Acount Number:</span>0715254845
							</p>
							<p>
								<span>Acount Name:</span>Teens Trust Foundation
							</p>
							<p>
								<span>Bank:</span>Guaranty Trust Bank
							</p>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
}



export default Donate;
