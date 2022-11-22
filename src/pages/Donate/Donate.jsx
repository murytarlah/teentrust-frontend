import React from 'react';
import Page from '../../components/Page';
import styles from './Donate.module.css'
import { Formik } from 'formik';
import * as Yup from 'yup'
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
						<Formik
							initialValues={{
								email: '',
								amount: '',
							}}
							validationSchema={Yup.object({
								email: Yup.string().email('Invalid email address').required('Required'),
								amount: Yup.string()
									.min(1)
									.matches(/^[1-9][0-9]{1,}/g, 'Amount is not valid')
									.required('Required'),
							})}
							onSubmit={(values, { resetForm }) => {
								fetch('https://api.teenstrustfoundation.org/api/donate', {
									method: 'POST',
									headers: {
										'Content-Type': 'application/json',
									},
									body: JSON.stringify(values),
									redirect: 'follow',
								})
									.then((response) => response.json())
									.then((result) => {
										console.log(result);
										window.location.href = result.authorization_url
										resetForm();
									})
									.catch((error) => console.log('error', error));
							}}
						>
							{({ values, errors, touched, handleChange, handleSubmit, getFieldProps, resetForm }) => (
								<form onSubmit={handleSubmit}>
									<div className={styles.form_control}>
										<label htmlFor="email">Email</label>
										<input
											type="email"
											placeholder="johndoe@gmail.com"
											{...getFieldProps('email')}
											value={values.email}
											onChange={handleChange}
										/>
										<p className={styles.error}>{errors.email}</p>
									</div>
									<div className={styles.form_control}>
										<label htmlFor="amount">Amount</label>
										<input
											type="text"
											placeholder="5000"
											{...getFieldProps('amount')}
											value={values.amount}
											onChange={handleChange}
										/>
										<p className={styles.error}>{errors.email}</p>
									</div>
									<button type="submit">Donate Now</button>
								</form>
							)}
						</Formik>
						{/* <button>
							<a href="https://paystack.com/pay/ttf_donations" target={'_blank'}>
								Donate Now
							</a>
						</button> */}
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
