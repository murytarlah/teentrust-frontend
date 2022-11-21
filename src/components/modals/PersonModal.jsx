import { useState, useEffect } from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import styles from './Person.module.css';
import { BoardOfTrustees } from '../../_mocks/data';
import { Icon } from '@iconify/react';
import Card from '../Card/Card';

const Modal = NiceModal.create(({id}) => {

	const [boardTrust, setBoardTrust] = useState(BoardOfTrustees);

	const [currentMember, setCurrentMember] = useState(boardTrust.filter((member) => member.id == id)[0]);

	const modal = useModal();
	return (
		<div className={styles.background}>
			<div className={styles.modal}>
				<Icon
					icon={'material-symbols:close-rounded'}
					fontSize={'2rem'}
					onClick={() => {
						document.querySelector('.App').style -= `position: fixed; top: 0; left: 0; right: 0;`;
						modal.remove();
					}}
				/>
				{currentMember && console.log(currentMember)}
				{currentMember && (
					<div className={styles.modal_content}>
						{currentMember && <Card color={'purple'|| 'green'} details={currentMember} id={currentMember.id} />}
						<div>
							<p>
								{currentMember.about.split('\n').map((paragraph) => {
									return <p style={{marginBlock: "15px"}}>{paragraph}</p>;
								})}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
});

export default Modal;