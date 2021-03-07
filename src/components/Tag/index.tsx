import React from "react"
import { Tag, TagProps } from "antd"

import classNames from "classnames"
import { PresetColorType, PresetStatusColorType } from "antd/lib/_util/colors"
import { LiteralUnion } from "antd/lib/_util/type"

export declare const ExtendTagTypes: ["primary", "primary-bg", "secondary"]
export type IExtendTagType = typeof ExtendTagTypes[number]

export interface ITagProps extends Omit<TagProps, "color"> {
	color?: LiteralUnion<PresetColorType | PresetStatusColorType | IExtendTagType, string>
}

const TagComponent: React.FC<ITagProps> = (props) => {
	const convertLegacyProps = () => {
		let color = props.color || undefined

		if (props.color === "primary") {
			color = undefined
		}
		if (props.color === "primary-bg") {
			color = undefined
		}
		if (props.color === "secondary") {
			color = undefined
		}
		return {
			color: color,
			className: classNames(props.className, {
				"tag-primary": props.color === "primary",
				"tag-secondary": props.color === "secondary",
				"tag-primary-bg": props.color === "primary-bg",
			}),
		}
	}

	const convertedProps = {
		...props,
		...convertLegacyProps(),
	}

	return <Tag {...(convertedProps as TagProps)}>{props.children}</Tag>
}

export default TagComponent
