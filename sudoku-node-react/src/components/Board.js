import React, {Component} from 'react';
import Square from "./Square";

class Board extends Component 
{
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
		};
		this.lines = [
	     7, 0, 1, 0, 8, 5, 4, 6, 3,
	  	];
	}

	handleClick(i)
	{
		const permisos = [
			 0, 1, 0, 1, 0, 0, 0, 0, 0,
		];

		const squares = this.lines;
		if (permisos[i] === 1 )
			if (squares[i] >= 9)
				squares[i] = 1;
			else
				squares[i]++;
		//squares[i] = i;
		//squares[i]++;
		this.setState({squares: squares});
	}

	calculateWinner(squares) {
	  var cont =0;
	  const fines = [
	     7, 9, 1, 2, 8, 5, 4, 6, 3,
	  ];
	  for (let i = 0; i < squares.length; i++) 
	  {
	  	if ( squares[i] === fines[i] )
	  		cont++;
	  }
	  if ( cont > 8 ) 
	      return fines;
	  else
	  	return null;
	}

	renderSquare(i)
	{
		return (
			<Square 
				//value = {this.state.squares[i]}
				value = {this.lines[i]!==0?this.lines[i]:" "}
				onClick = {() => this.handleClick(i)} 
			/>
		);
	}

	render() {
		
		const winner = this.calculateWinner(this.lines);
	    let status;
	    if (winner) {
	      status = 'Winner: ' + winner;
	    } else {
	      status = 'Next player: ';
	    }

		return (
			<div>

				<div className = "board-row" >
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>

				<div className = "board-row" >
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>

				<div className = "board-row" >
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
				
				<div className = "status" >
					{status}
				</div>
				
			</div>
		);
	}
}

export default Board;