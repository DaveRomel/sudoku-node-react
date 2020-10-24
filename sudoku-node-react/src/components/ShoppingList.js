class ShoppingList extends React.Component 
{
	render() 
	{
		return (
			
			<div className = "shopping-List">
				<h1>Lista de compras para {this.props.name}</h1>
				<ul>
		          <li>Instagram</li>
		          <li>WhatsApp</li>
		          <li>Oculus</li>
        		</ul>
			</div>

		);
	}
}

export default ShoppingList;