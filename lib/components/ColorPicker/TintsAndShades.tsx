import React from "react"
import { Tooltip } from "antd"

import Values from "values.js"

import { hex } from "../../Theme"

export interface IColorPicker {
	color: string
	onPick: (color: hex) => void
}

const Palette: React.FunctionComponent<IColorPicker> = (props) => {
	const onClick = (e: React.MouseEvent<HTMLElement>) => {
		const hex = e.currentTarget.dataset.hex as hex
		props.onPick(hex)
	}

	const color = new Values(props.color)

	const all = color.all()
	const base = Math.floor(all.length / 2)

	const tints = []
	const shades = []

	for (let i = 0; i < base; i++) {
		const element = all[i]
		tints.push(
			<Tooltip key={`tint-${i}`} title={`T[${element.weight}] #${element.hex}`}>
				<div
					data-weight={element.weight}
					data-hex={`#${element.hex}`}
					style={{ background: `#${element.hex}` }}
					onClick={onClick}
				/>
			</Tooltip>,
		)
	}

	for (let i = base + 1; i < all.length; i++) {
		const element = all[i]
		shades.push(
			<Tooltip key={`shade-${i}`} title={`S[${element.weight}] #${element.hex}`}>
				<div
					data-weight={element.weight}
					data-hex={`#${element.hex}`}
					style={{ background: `#${element.hex}` }}
					onClick={onClick}
				/>
			</Tooltip>,
		)
	}

	return (
		<div className="tints-shades">
			<div className="tints">{tints}</div>
			<div className="shades">{shades}</div>
		</div>
	)
}

export default Palette
