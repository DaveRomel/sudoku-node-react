import React from 'react';
import Board from './Board';
import logo from './logo.svg';

import './App.css';
class Game extends React.Component
{
	render()
	{	
		let status ="Rellena las casillas vacías con un solo número del 1 al 9,\n"+
					"toca los espacios vacíos para colocar el número que desees,\n"+
					"recuerda que en una misma fila, columna, o región(cuadros de 3 x 3),\n"+
					"no puede haber números repetidos. La solución de un sudoku es única.\n";
		return(

			<div className="App">

	        	<header className="App-header">
	        			<img src={logo} className="App-logo" alt="logo" />
	        	</header>

	        	<div className="Game">

					<div className="game-board">
						<Board/>
					</div>

				</div>

				<div className="game-info">
						<div className="Rules">{status}</div>
						<ol>{/*todo*/}</ol>
				</div>


			</div>
		);
	}
}

export default Game;