import React from 'react';
import Page from '../../components/Page'
import { useFormik, FormikProvider, Form } from 'formik';
import styles from './Contact.module.css'
import * as Yup from 'yup'

const Contact = () => {

	const formik = useFormik({
		initialValues: {
			fullname: '',
			subject: '',
			email: '',
			phone: '',
			enquiry_body: '',
		},
		validationSchema: Yup.object({
			fullname: Yup.string().required('Required'),
			subject: Yup.string().required('Required'),
			email: Yup.string().email('Invalid email address').required('Required'),
			phone: Yup.string().required('Required'),
			enquiry_body: Yup.string().required('Required')
		}),
		onSubmit: (values) => {
			setLoading(true);
			fetch('http://teenstrustfoundation.herokuapp.com/api/contact-us', {
				method: 'POST',
				body: values,
				redirect: 'follow',
			})
				.then((response) => response.text())
				.then((result) => console.log(result))
				.catch((error) => console.log('error', error));
		},
	});

	const { values, errors, touched, handleChange, handleSubmit, getFieldProps } = formik;
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
				<FormikProvider value={formik}>
					<Form autoComplete={'off'} onSubmit={handleSubmit}>
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
								placeholder="...."
							></textarea>
						</div>

						<button type="submit">Send Message</button>
					</Form>
				</FormikProvider>
			</div>
		</Page>
	);
};

export default Contact;
