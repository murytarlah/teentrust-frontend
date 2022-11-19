import React, { createContext } from 'react';
import PropTypes from 'prop-types';



const ModalContext = createContext()

const ModalContextProvider = (props) => {
	const [open, setOpen] = useState(false);

	const toggleModal = () => {
		setOpen(!open)
	}
	return (
		<ModalContext.Provider value={{open,toggleModal}}>
			{props.children}
		</ModalContext.Provider>
	);
};


ModalContext.propTypes = {

};


export default ModalContext;
