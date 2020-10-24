import React from 'react';

function Square(props)
{
	return(
		<button 
			className="square1"
			onClick = {props.onClick}
		>
			{props.value}
		</button>
	);
	
}

export default Square;