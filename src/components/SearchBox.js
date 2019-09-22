import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input
				className='w-40 bn pa3 ma4 br3 ba b--green bg-light-green'
				type ='Search' 
				placeholder ='search robots'
				onChange={searchChange}/>
		</div>
	);
}

export default SearchBox;