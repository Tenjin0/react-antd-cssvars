import React, { useState } from "react"
import { SketchPicker, ColorResult } from "react-color"
import { CloseOutlined } from "@ant-design/icons"

import classNames from "classnames"

import tinycolor from "@ctrl/tinycolor"

import Button, { IButtonProps } from "../Button"

import TintsAndShades from "./TintsAndShades"
import { hex } from "../../Theme"

export interface IColorPicker extends IButtonProps {
	defaultColor: string
	side?: "left" | "right"
	onPick?: (value: hex) => void
	onChangeColor?: (color: string) => void
}

interface IColorPickerState {
	open: boolean
	color: string | null
}

const ColorPickerChooser: React.FunctionComponent<IColorPicker> = (props) => {
	const [colorPickerState, setColorPickerState] = useState<IColorPickerState>({
		open: false,
		color: props.defaultColor,
	})

	const onClickButton = () => {
		setColorPickerState({ ...colorPickerState, open: !colorPickerState.open })
	}

	const innerOnChangeColor = (color: ColorResult) => {
		const value = tinycolor(color.hex)
		value.setAlpha(color.rgb.a)
		const sValue = color.rgb.a !== 1 ? value.toHex8String() : value.toHexString()
		if (colorPickerState.color !== sValue) {
			setColorPickerState({
				...colorPickerState,
				color: sValue,
			})
			if (props.onChangeColor) {
				props.onChangeColor(sValue)
			}
		}
	}

	const onClick = (value: hex) => {
		if (props.onPick) {
			props.onPick && props.onPick(value)
		} else {
			setColorPickerState({
				...colorPickerState,
				color: value,
			})
		}
	}
	const onClose = () => {
		setColorPickerState({ ...colorPickerState, open: !colorPickerState.open })
	}

	// const handleChange = (color, event) => {
	// 	const value = tinycolor(color.hex)
	// 	value.setAlpha(color.rgb.a)
	// 	console.log(value.toHex8String())
	// 	setColorPickerState({
	// 		...colorPickerState,
	// 		color: value.toHex8String(),
	// 	})

	// 	if (props.onChangeColor) {
	// 		props.onChangeColor(color.hex)
	// 	}
	// }
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { defaultColor, onChangeColor, onPick, ...othersProps } = props

	const containerCls = classNames(props.className, {
		"color-picker-container": true,
		right: props.side === "right",
	})

	return (
		<div data-testid="colorpicker-component" className="color-picker-chooser">
			<div onClick={onClickButton}>
				<Button {...othersProps} className="color-picker-button">
					{props.children}
				</Button>
			</div>
			{colorPickerState.open && colorPickerState.color && (
				<div className={containerCls}>
					<SketchPicker
						className="colorpicker-palette"
						color={colorPickerState.color}
						// onChange={handleChange}
						onChangeComplete={innerOnChangeColor}
					/>
					<Button
						className="color-picker-btn-close"
						shape="circle"
						size="small"
						type="text"
						onClick={onClose}
					>
						<CloseOutlined />
					</Button>
					<TintsAndShades color={colorPickerState.color} onPick={onClick} />
				</div>
			)}
		</div>
	)
}

export default ColorPickerChooser
