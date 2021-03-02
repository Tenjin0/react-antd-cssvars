import { Button } from "antd"
import React, { useState } from "react"
import { SketchPicker, ColorResult } from "react-color"
import { CloseOutlined } from "@ant-design/icons"

import TintsAndShades from "./TintsAndShades"

export interface IColorPicker {
	default: string
	onChange?: (color: string) => void
}

interface IColorPickerState {
	open: boolean
	color: string | null
}

const ColorPickerChooser: React.FunctionComponent<IColorPicker> = (props) => {
	const [colorPickerState, setColorPickerState] = useState<IColorPickerState>({
		open: false,
		color: props.default,
	})

	const onClickButton = () => {
		setColorPickerState({ ...colorPickerState, open: !colorPickerState.open })
	}

	const onChangeColor = (color: ColorResult) => {
		if (colorPickerState.color !== color.hex) {
			setColorPickerState({
				...colorPickerState,
				color: color.hex,
				open: !colorPickerState.open,
			})
			if (props.onChange) {
				props.onChange(color.hex)
			}
		}
	}

	const onClose = () => {
		setColorPickerState({ ...colorPickerState, open: !colorPickerState.open })
	}

	return (
		<div className="color-picker-chooser">
			<Button type="primary" onClick={onClickButton}>
				Primary Button
			</Button>
			{colorPickerState.open && colorPickerState.color && (
				<div className="color-picker-container">
					<SketchPicker color={colorPickerState.color} onChangeComplete={onChangeColor} />
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
			<TintsAndShades color={colorPickerState.color} />
		</div>
	)
}

export default ColorPickerChooser
