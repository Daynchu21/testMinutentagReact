import * as React from "react";

/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */


function Product(props) {
	const[update,setUpdate] = React.useState(false)
	function handlePlus(product) {
		// logic to vote a product
		product.votes=product.votes+1
		setUpdate(!update)
	}

	function handleMinus(product) {
		// logic to unvote a product
			product.votes=product.votes-1
			setUpdate(!update)
	}
	return (
		<div>
		{
			props.products.current !== null && props.products.current !== undefined && 
				props.products.current.map((data,index) => {
					return(
					<li key={index.toString()}>
					<span>
					   {data.name} - votes: {data.votes}
					</span>
					<button onClick={() => {handlePlus(data)}}>+</button>
				   <button onClick={() => {handleMinus(data)}}>-</button>
				</li>
				)
				})
		}
		</div>
		
	);
}


export default function Grocery({ products }) {
	// export default function Grocery() {
		const newProducts = React.useRef(products);
	return (
		<ul>
			{/* Render an array of products, which should call onVote when + or - is clicked */}
			<Product products={newProducts}/>
		</ul>
	);
}
