/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect,  useState } from "react";
import "./ListItemsForNavigation.css"

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = Array(10).fill({name:"David",edad:27
	/** Add the properties you consider, there are no specific requirements related to what you have to render. Be creative :) */
});

export default function ListItemsForNavigation(props) {

	const [selectedIndex,setSelectedIndex] = useState(null);
	const [hovered, setHovered] = useState(undefined);

	useEffect(() => {
		if (itemsList.length && hovered) {
			setSelectedIndex(hovered);
		}
	  }, [hovered]);

	function handleKeyDown(event) {
		if (event.keyCode === 38 || event.keyCode === 39 )
		{
			setSelectedIndex(prevState => (prevState > 0 ? prevState - 1 : prevState));
		}else if (event.keyCode === 37 || event.keyCode === 40  )
		{
			setSelectedIndex(prevState =>prevState < itemsList.length - 1 ? prevState + 1 : prevState);
		}
		// Add the proper logic to calculate the index that correspond to the item that should be focused.
	}

	return (
		<ul tabIndex={1} >
			{itemsList.map((data,index) => {
				return(
					<li tabIndex={-1} onClick={() => setHovered(index)}  role="button" onKeyDown={handleKeyDown}  className={selectedIndex === index ? "actived" : ""}>{data.name} : {data.edad}</li>
				)
			})
				
				}
			{/** Render itemsList as you wish, probably you want to render <li></li> with the proper attributes */}
			{/** If you have issues focusing an element, it is probably because the element is not focusable originally. Try with tabIndex={0} */}
			{/** Do not forget to pass the reference to the selected item */}
		</ul>
	);
}
