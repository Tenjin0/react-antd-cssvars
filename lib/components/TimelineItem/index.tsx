import React from "react"
import { Timeline, TimelineItemProps } from "antd"

import classNames from "classnames"
import { PresetColorType } from "antd/lib/_util/colors"
import { LiteralUnion } from "antd/lib/_util/type"

export declare const ExtendTagTypes: ["primary", "secondary", "success", "error", "warning", "menu"]
export type IExtendTagType = typeof ExtendTagTypes[number]

export interface ITagProps extends Omit<TimelineItemProps, "color"> {
	color?: LiteralUnion<PresetColorType | IExtendTagType, string>
}

const { Item } = Timeline

const TimelineItemComponent: React.FC<ITagProps> = (props) => {
	const convertLegacyProps = () => {
		let color = props.color || undefined

		if (props.color === "primary") {
			color = "none"
		} else if (props.color === "secondary") {
			color = "none"
		} else if (props.color === "success") {
			color = "none"
		} else if (props.color === "error") {
			color = "none"
		} else if (props.color === "warning") {
			color = "none"
		}

		return {
			color: color,
			className: classNames(props.className, {
				"item-head-primary": props.color === "primary",
				"item-head-secondary": props.color === "secondary",
				"item-head-success": props.color === "success",
				"item-head-warning": props.color === "warning",
				"item-head-danger": props.color === "danger",
			}),
		}
	}

	const convertedProps = {
		...props,
		...convertLegacyProps(),
	}
	return <Item {...(convertedProps as TimelineItemProps)}>{props.children}</Item>
}

export default TimelineItemComponent
