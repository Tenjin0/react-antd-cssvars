import React from "react"
import {Button, ButtonProps} from "antd"
import { ButtonType } from "antd/lib/button/button";

import classNames from 'classnames';

export declare const ExtendButtonTypes: ["danger", "secondary"];
export type IExtendButtonType = typeof ExtendButtonTypes[number];

export declare type TLegacyButton = ButtonType | IExtendButtonType
export interface IButtonProps extends Omit<ButtonProps, 'type'> {
	type?: TLegacyButton,
	uppercase?: boolean
}

const ButtonComponent: React.FC<IButtonProps> = props => {

	const convertLegacyProps: () =>  ButtonProps = () => {
		let type = props.type || undefined
		const danger = props.type === "danger";

		if (props.type === "danger") {
				type =  undefined;
		}
		if (props.type === "secondary") {
			type =  undefined;
		}

		return {
			type: type as ButtonType,
			danger,
			className: classNames(props.className, {"btn-secondary": props.type === "secondary", "btn-uppercase": props.uppercase })
		}
	}

	const convertedProps = {
		...props,
		uppercase: undefined,
		...convertLegacyProps()
	}

	return (
		<Button {...convertedProps as ButtonProps} >
			{props.children}
		</Button>
	)
}

export default ButtonComponent