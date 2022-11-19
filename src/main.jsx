import React from 'react';
import ReactDOM from 'react-dom/client';
import NiceModal from '@ebay/nice-modal-react';
import App from './App';
import './index.css';
import "swiper/css/bundle";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<NiceModal.Provider />
	</React.StrictMode>,
);
