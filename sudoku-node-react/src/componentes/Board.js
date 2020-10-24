import React from 'react';
import Square from './Square';
import SquareR from './SquareR';

class Board extends React.Component
{
	constructor(props) {
		super(props);
		this.lines = [
	     7, 0, 1, 0, 8, 5, 4, 6, 3,
	     3, 8, 6, 7, 4, 1, 0, 5, 0,
	     5, 0, 4, 6, 0, 3, 0, 0, 1,
	     4, 7, 0, 0, 6, 0, 1, 3, 5,
	     0, 1, 3, 4, 5, 0, 0, 8, 6,
	     0, 6, 5, 1, 3, 0, 9, 0, 4,
	     9, 3, 2, 5, 7, 4, 6, 1, 0,
	     6, 5, 7, 9, 1, 0, 3, 4, 2,
	     1, 4, 8, 3, 2, 6, 5, 0, 0,
	  	];
	}

	handleClick(i) 
	{ 
		const permisos = [
		 0, 1, 0, 1, 0, 0, 0, 0, 0,
		 0, 0, 0, 0, 0, 0, 1, 0, 1,
		 0, 1, 0, 0, 1, 0, 1, 1, 0,
		 0, 0, 1, 1, 0, 1, 0, 0, 0,
		 1, 0, 0, 0, 0, 1, 1, 0, 0,
		 1, 0, 0, 0, 0, 1, 0, 1, 0,
		 0, 0, 0, 0, 0, 0, 0, 0, 1,
		 0, 0, 0, 0, 0, 1, 0, 0, 0,
		 0, 0, 0, 0, 0, 0, 0, 1, 1,
		];

		const squares = this.lines;
		if (permisos[i] === 1 )
			if (squares[i] >= 9)
				squares[i] = 1;
			else
				squares[i]++;
		//this.setState({squares: squares});

		//const squares = this.state.squares;
		//squares[i] = this.lines[i];
		this.setState({squares: squares});
	}

	calculateWinner(squares) 
	{
	  const fines = [
	     7, 9, 1, 2, 8, 5, 4, 6, 3,
	     3, 8, 6, 7, 4, 1, 2, 5, 9,
	     5, 2, 4, 6, 9, 3, 8, 7, 1, 
	     4, 7, 9, 8, 6, 2, 1, 3, 5,
	     2, 1, 3, 4, 5, 9, 7, 8, 6,
	     8, 6, 5, 1, 3, 7, 9, 2, 4,
	     9, 3, 2, 5, 7, 4, 6, 1, 8,
	     6, 5, 7, 9, 1, 8, 3, 4, 2,
	     1, 4, 8, 3, 2, 6, 5, 9, 7,

	  ];
	  var cont =0;
	  for (let i = 0; i < squares.length; i++) 
	  {
	  	if ( squares[i] === fines[i] )
	  		cont++;
	  }
	  if ( cont > 80 ) 
	      return fines;
	  else
	  	return null;
	}

	renderSquare(i)
	{
		return( 
			<Square
				value = {this.lines[i]!==0?this.lines[i]:" "} 
				//value = {i!==0?i:" "}
				onClick = {() => this.handleClick(i)} 
			/>
		);
	}

	renderSquareR(i)
	{
		return( 
			<SquareR
				value = {this.lines[i]!==0?this.lines[i]:" "} 
				//value = {i!==0?i:" "}
				onClick = {() => this.handleClick(i)} 
			/>
		);
	}
	
	render()
	{
		const winner = this.calculateWinner(this.lines);
	    let status;
	    if (winner) {
	      status = 'Ganador: tienes una mente Sentax \n';
	    } else {
	      status =	'Completa el sudoku:';
	    }
	    
		return(

			<div>
				<div className="status">{status}</div>

				<div className="board-row">
					
					{this.renderSquare(0)}
					{this.renderSquareR(1)}
					{this.renderSquare(2)}

					<div className="board-row2">	
					</div>
						
					{this.renderSquareR(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}

					<div className="board-row2"/>

					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}

				</div>

				<div className="board-row">
					{this.renderSquare(9)}
					{this.renderSquare(10)}
					{this.renderSquare(11)}
					{this.renderSquare(12)}
					{this.renderSquare(13)}
					{this.renderSquare(14)}
					{this.renderSquareR(15)}
					{this.renderSquare(16)}
					{this.renderSquareR(17)}
				</div>

                <div className="board-row">
					{this.renderSquare(18)}
					{this.renderSquareR(19)}
					{this.renderSquare(20)}
					{this.renderSquare(21)}
					{this.renderSquareR(22)}
					{this.renderSquare(23)}
					{this.renderSquareR(24)}
					{this.renderSquareR(25)}
					{this.renderSquare(26)}
				</div>

				<div className="board-row1">

				</div>
				
				<div className="board-row">
					{this.renderSquare(27)}
					{this.renderSquare(28)}
					{this.renderSquareR(29)}
					{this.renderSquareR(30)}
					{this.renderSquare(31)}
					{this.renderSquareR(32)}
					{this.renderSquare(33)}
					{this.renderSquare(34)}
					{this.renderSquare(35)}
				</div>

				<div className="board-row">
					{this.renderSquareR(36)}
					{this.renderSquare(37)}
					{this.renderSquare(38)}
					{this.renderSquare(39)}
					{this.renderSquare(40)}
					{this.renderSquareR(41)}
					{this.renderSquareR(42)}
					{this.renderSquare(43)}
					{this.renderSquare(44)}
				</div>

                <div className="board-row">
					{this.renderSquareR(45)}
					{this.renderSquare(46)}
					{this.renderSquare(47)}
					{this.renderSquare(48)}
					{this.renderSquare(49)}
					{this.renderSquareR(50)}
					{this.renderSquare(51)}
					{this.renderSquareR(52)}
					{this.renderSquare(53)}
				</div>

				<div className="board-row1">
					
				</div>

				<div className="board-row">
					{this.renderSquare(54)}
					{this.renderSquare(55)}
					{this.renderSquare(56)}
					{this.renderSquare(57)}
					{this.renderSquare(58)}
					{this.renderSquare(59)}
					{this.renderSquare(60)}
					{this.renderSquare(61)}
					{this.renderSquareR(62)}
				</div>

				<div className="board-row">
					{this.renderSquare(63)}
					{this.renderSquare(64)}
					{this.renderSquare(65)}
					{this.renderSquare(66)}
					{this.renderSquare(67)}
					{this.renderSquareR(68)}
					{this.renderSquare(69)}
					{this.renderSquare(70)}
					{this.renderSquare(71)}
				</div>

                <div className="board-row">
					{this.renderSquare(72)}
					{this.renderSquare(73)}
					{this.renderSquare(74)}
					{this.renderSquare(75)}
					{this.renderSquare(76)}
					{this.renderSquare(77)}
					{this.renderSquare(78)}
					{this.renderSquareR(79)}
					{this.renderSquareR(80)}
				</div>
				
			</div>

		);
	}
}

export default Board;