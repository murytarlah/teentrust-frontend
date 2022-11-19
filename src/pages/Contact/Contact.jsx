import React, {useState, useEffect} from 'react';
import Page from '../../components/Page'
import { Formik } from 'formik';
import styles from './Contact.module.css'
import * as Yup from 'yup'

const Contact = () => {
	
	const contactRegex = /((\+234)|[0])([7-9])([01])(\d{8})/g;
	const [message, setMessage] = useState('');
	useEffect(() => {
		setTimeout(() => {
			setMessage('')
		}, 15000)
	}, [message]);

	return (
		<Page title={'Contact | TeenTrust'}>
			<div className={styles.hero}>
				<div>
					<div>
						<h1>
							<span>Contact</span> Us
						</h1>
					</div>
				</div>
			</div>
			<div className={styles.contact_form}>
				{message && (
					<div className={styles.message}>
						<p>{message}</p>
					</div>
				)}
				<Formik
					initialValues={{
						fullname: '',
						subject: '',
						email: '',
						phone: '',
						enquiry_body: '',
					}}
					validationSchema={Yup.object({
						fullname: Yup.string().required('Required'),
						subject: Yup.string().required('Required'),
						email: Yup.string().email('Invalid email address').required('Required'),
						phone: Yup.string().matches(contactRegex, 'Phone number is not valid').required('Required'),
						enquiry_body: Yup.string().required('Required'),
					})}
					onSubmit={(values, { resetForm }) => {
						console.log(values);
						console.log(JSON.stringify(values));
						fetch('https://teenstrustfoundation.herokuapp.com/api/contact-us', {
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
								setMessage(result.flash_message);
								resetForm();
							})
							.catch((error) => console.log('error', error));
					}}
				>
					{({ values, errors, touched, handleChange, handleSubmit, getFieldProps, resetForm }) => (
						<form onSubmit={handleSubmit}>
							<div className={styles.form_control}>
								<label htmlFor="fullname">Full Name</label>
								<input
									{...getFieldProps('fullname')}
									value={values.fullname}
									onChange={handleChange}
									type="text"
									placeholder="John Doe"
									id="fullname"
								/>
								<div className={styles.error}>{errors.fullname}</div>
							</div>
							<div className={styles.form_control}>
								<label htmlFor="phoneNumber">Phone Number</label>
								<input
									{...getFieldProps('phone')}
									value={values.phone}
									onChange={handleChange}
									type="tel"
									placeholder="+2347054221334"
									id="phoneNumber"
								/>
								<div className={styles.error}>{errors.phone}</div>
							</div>
							<div className={styles.form_control}>
								<label htmlFor="email">Email</label>
								<input
									{...getFieldProps('email')}
									value={values.email}
									onChange={handleChange}
									type="email"
									placeholder="johndoe@gmail.com"
									id="email"
								/>
								<div className={styles.error}>{errors.email}</div>
							</div>
							<div className={styles.form_control}>
								<label htmlFor="subject">Subject</label>
								<input
									{...getFieldProps('subject')}
									value={values.subject}
									onChange={handleChange}
									type="text"
									placeholder="Deworming Project"
									id="subject"
								/>
								<div className={styles.error}>{errors.subject}</div>
							</div>
							<div className={styles.form_control}>
								<label htmlFor="enquiry">Enquiry Body</label>
								<textarea
									{...getFieldProps('enquiry_body')}
									value={values.enquiry_body}
									onChange={handleChange}
									name="enquiry_body"
									id="enquiry"
									cols="30"
									rows="10"
									placeholder=". . ."
								></textarea>
								<div className={styles.error}>{errors.enquiry_body}</div>
							</div>

							<button type={'submit'}>Send Message</button>
						</form>
					)}
				</Formik>
			</div>
		</Page>
	);
};

export default Contact;
