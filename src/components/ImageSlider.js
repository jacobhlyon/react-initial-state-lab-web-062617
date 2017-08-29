
import React from 'react'
// import PropTypes from 'prop-type'

class ImageSlider extends React.Component {
	constructor() {
		super()

		this.state = {
			currentSlideIndex: 0
		}
	}

	render() {
		var currentSlide = this.state.currentSlideIndex
		return (
			<div>I am on slide {currentSlide}</div>
		)
	}
}

export default ImageSlider