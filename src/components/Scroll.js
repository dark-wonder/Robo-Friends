import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', paddingTop:'2%',border:'0.5px solid black', height:'450px'}}>
			{props.children}
		</div>

	)

};

export default Scroll;