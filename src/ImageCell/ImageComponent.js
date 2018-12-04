import React, { Component } from "react";
import {
	Image
} from "react-native";
import PropTypes from "prop-types";
import Injector from "./Injector";

export default class ImageComponent extends Component {
	static propTypes = {
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		gutter: PropTypes.number.isRequired,
		source: PropTypes.any.isRequired,
		imageContainerStyle: PropTypes.object,
		customImageComponent: PropTypes.object,
		customImageProps: PropTypes.object
	}

	render() {
		const {
			width,
			height,
			gutter,
			source,
			imageContainerStyle,
			customImageComponent,
			customImageProps
		} = this.props;
		const imageProps = {
			source: source,
			resizeMethod: "auto",
			style: {
				width: width,
				height: height,
				margin: gutter / 2,
				...imageContainerStyle
			}
		};

		return (
			<Injector
				defaultComponent={Image}
				defaultProps={imageProps}
				injectant={customImageComponent}
				injectantProps={customImageProps}
			/>
		);
	}
}