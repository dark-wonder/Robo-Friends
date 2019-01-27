import React from 'react';
import '../containers/card.css';


const Card = ({name, email, id}) => {
	return (
			<div id='robo_box' className='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
				<img src={`https://robohash.org/${id}?100x100`} alt='robots'/> {/*using backsticks*/}
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
	);
}

export default Card;