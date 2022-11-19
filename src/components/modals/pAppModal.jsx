import { useState, useEffect } from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import styles from './pAppModal.module.css';
import { pApps } from '../../_mocks/data';
import { Icon } from '@iconify/react';

const Modal = NiceModal.create(({ id }) => {

	const [currentApp, setcurrentApp] = useState(pApps.filter((member) => member.id == id)[0]);

	const modal = useModal();
	return (
		<div className={styles.background}>
			<div className={styles.modal}>
				<Icon
					icon={'material-symbols:close-rounded'}
					fontSize={'2rem'}
					style={{cursor:"pointer"}}
					onClick={() => {
						document.querySelector('.App').style -= `position: fixed; top: 0; left: 0; right: 0;`;
						modal.remove();
					}}
				/>
				{console.log(currentApp)}
				{currentApp && (
					<div className={styles.modal_content}>
						<div>
							<img src={currentApp.image} alt="" />
						</div>
						<div>
							<p>
								{currentApp.about}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
});

export const CustomModal = () => {
	const [state, setstate] = useState(initialState);
	return (
		<>
		</>
	)
}

export default Modal;
