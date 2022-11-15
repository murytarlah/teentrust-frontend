import React from 'react';
import styles from './Card.module.css'
// import pics from '../../../public/assets/Reactangle'

const Card = ({color, id, details}) => {
	return (
		<div className={color == 'green' ? styles.card_g : styles.card_p} onClick={() => id}>
			<div>
				<div>
					<img src={details.image} alt="" />
				</div>
				<h3>
					{details.full_name}
					{details.qualification && <span>{details.qualitification}</span>}
				</h3>
				<h6>{details.title}</h6>
			</div>
		</div>
	);
}

export default Card;
