import React, { useState } from "react"
import { SketchPicker, ColorResult } from "react-color"
import { CloseOutlined } from "@ant-design/icons"

import Button, { IButtonProps } from "../Button"

import TintsAndShades from "./TintsAndShades"

export interface IColorPicker extends IButtonProps {
	defaultColor: string
	tintsAndShades?: boolean
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
		if (colorPickerState.color !== color.hex) {
			setColorPickerState({
				...colorPickerState,
				color: color.hex,
				open: !colorPickerState.open,
			})
			if (props.onChangeColor) {
				props.onChangeColor(color.hex)
			}
		}
	}

	const onClose = () => {
		setColorPickerState({ ...colorPickerState, open: !colorPickerState.open })
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { defaultColor, onChangeColor, tintsAndShades, ...othersProps } = props
	return (
		<div data-testid="colorpicker-component" className="color-picker-chooser">
			<div onClick={onClickButton}>
				<Button {...othersProps} className="color-picker-button">
					{props.children}
				</Button>
			</div>
			{colorPickerState.open && colorPickerState.color && (
				<div className="color-picker-container">
					<SketchPicker
						color={colorPickerState.color}
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
				</div>
			)}
			{tintsAndShades && <TintsAndShades color={colorPickerState.color} />}
		</div>
	)
}

export default ColorPickerChooser
