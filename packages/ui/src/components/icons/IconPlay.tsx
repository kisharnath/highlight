import React from 'react'
import { IconProps } from './types'

type Props = IconProps & {
	color?: string
	size?: number | string
	width?: number | string
	height?: number | string
}

export const IconPlay: React.FC<Props> = ({ size, color, width, height }) => {
	if (size) {
		width = size
		height = size
	}
	width = width ?? 20
	height = height ?? 20
	color = color ?? 'currentColor'
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16.1394 11.5719C17.451 10.8657 17.451 8.98431 16.1394 8.27806L6.75733 3.22619C5.51114 2.55516 4 3.45775 4 4.87313V14.9769C4 16.3922 5.51113 17.2948 6.75733 16.6238L16.1394 11.5719Z"
				fill={color}
			/>
		</svg>
	)
}