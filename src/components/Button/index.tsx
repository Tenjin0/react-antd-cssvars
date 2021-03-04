import React from "react"
import { Button } from "antd"
import { ButtonType, BaseButtonProps } from "antd/lib/button/button"

import classNames from "classnames"

export declare const ExtendButtonTypes: ["secondary", "danger"]
export type IExtendButtonType = typeof ExtendButtonTypes[number]

export declare type TLegacyButton = ButtonType | IExtendButtonType
export interface IButtonProps extends Omit<BaseButtonProps, "type"> {
	type?: TLegacyButton
	uppercase?: boolean
}

const ButtonComponent: React.FC<IButtonProps> = (props) => {
	const convertLegacyProps: () => BaseButtonProps = () => {
		let type = props.type || undefined

		if (props.type === "secondary") {
			type = undefined
		}

		return {
			type: type as ButtonType,
			className: classNames(props.className, {
				"ant-btn-secondary": props.type === "secondary",
				"btn-uppercase": props.uppercase,
			}),
		}
	}

	const convertedProps = {
		...props,
		uppercase: undefined,
		...convertLegacyProps(),
	}

	return <Button {...(convertedProps as BaseButtonProps)}>{props.children}</Button>
}

export default ButtonComponent
