import React from "react"
import { Badge } from "antd"

import classNames from "classnames"

import { PresetColorType } from "antd/lib/_util/colors"

export declare const ColorStatusType: ["primary", "secondary", "success", "warning", "error", "off"]
export type TColorStatus = typeof ColorStatusType[number]

export interface IStatusProps {
	color: TColorStatus
	text: string
	size?: "default" | "middle" | "large"
}

const StatusComponent: React.FC<IStatusProps> = (props) => {
	const convertStatus: () => PresetColorType = () => {
		if (props.color === "primary" || props.color === "secondary" || props.color === "off") {
			return "default" as PresetColorType
		}
		return props.color as PresetColorType
	}

	const convertClassNames: () => string[] = () => {
		const clns = []

		if (props.color === "primary" || props.color === "secondary" || props.color === "off") {
			clns.push(`status-color-${props.color}`)
		}
		if (props.size && (props.size === "large" || props.size === "middle")) {
			clns.push(`status-size-${props.size}`)
		}
		return clns
	}

	const status = convertStatus()
	const className = classNames(convertClassNames)

	return <Badge className={className}>{props.text}</Badge>
}

export default StatusComponent
