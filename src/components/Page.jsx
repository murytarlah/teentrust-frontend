import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { forwardRef } from 'react';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', ...other }, ref) => (
	<HelmetProvider>
		<div ref={ref} {...other}>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			{children}
		</div>
	</HelmetProvider>
));

Page.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
};

export default Page;