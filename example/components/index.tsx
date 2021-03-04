import React, { useState } from "react"

import { Layout } from "antd"

import Menu from "./menu"
import Content from "./content"

export interface IMyComponentState {
	collapse: boolean
}
// eslint-disable-next-line @typescript-eslint/ban-types
const MyComponent: React.FunctionComponent<{}> = () => {
	const [layoutState, setLayoutState] = useState<IMyComponentState>({
		collapse: false,
	})
	const onMouseOver = () => {
		setLayoutState({ collapse: false })
	}

	const onMouseLeave = () => {
		setLayoutState({ collapse: true })
	}
	return (
		<Layout
			style={{ height: "100vh", display: "flex", flexDirection: "row", position: "relative" }}
		>
			<Layout onMouseLeave={onMouseLeave} onMouseOver={onMouseOver}>
				<Menu collapse={layoutState.collapse} />
			</Layout>

			<Layout id="layout-content">
				<Content />
			</Layout>
		</Layout>
	)
}

export default MyComponent
