import * as React from "react"
/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

function Image({ src, onRemove,isVisible }) {
	return (
		<>
		{
			isVisible &&	
			<div className="image">
			<img src={src} alt="ImageLink"/>
			<button className="remove" onClick={() => {onRemove()}}>X</button>
		</div> 
		}
	</>
	);
}

export function ImageGallery({ links }) {
	const [isVisible,SetIsVisible] = React.useState(true)
	const onRemove = () =>
	{
		SetIsVisible(false)
	}

	return (
		<div>
			{/* Implement here the Image Gallery using <Image /> component */}

			<Image src={links} onRemove={onRemove} isVisible={isVisible}/>
		</div>
	);
}
