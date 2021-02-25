import { Button, message, Tooltip } from 'antd';
import React, { useState } from 'react';

import Values from 'values.js'

export interface IColorPicker {
	color: string
	onClick?: (color: string) => void
}

const Palette: React.FunctionComponent<IColorPicker> = props => {

	const onClick = (e : React.MouseEvent<HTMLElement>) => {
		const hex = e.currentTarget.dataset.hex
		navigator.clipboard.writeText(e.currentTarget.dataset.hex).then(() => {
			message.config({
				duration: 0.8
			})
			message.success(
				{
					content:"Copy to clipboard: " + hex,
					style: {
						position: "absolute",
						right: "20px",
						left: "initial"
					}
				}
			)
		})

	}

	const color = new Values(props.color)

	const all = color.all()
	const base = Math.floor(all.length / 2)

	const tints = []
	const shades = []


	for (let i = 0; i < base; i++) {
		const element = all[i]
		tints.push(<Tooltip key={`tint-${i}`} title={`#${element.hex}`}><div data-weight={element.weight} data-hex={`#${element.hex}`} style={{ background: `#${element.hex}` }} onClick={onClick}/></Tooltip>)
	}

	for (let i = base + 1; i < all.length; i++) {
		const element = all[i]
		shades.push(<Tooltip key={`shade-${i}`}  title={`#${element.hex}`}><div data-weight={element.weight} data-hex={`#${element.hex}`} style={{ background: `#${element.hex}` }} onClick={onClick}/></Tooltip>)

	}

	return (
		<div className="tints-shades">
				<div className="tints">
					{tints}
				</div>
				<div className="shades">
					{shades}
				</div>
		</div>
	)
}

export default Palette;
