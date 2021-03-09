import React, { useEffect, useState } from "react"

import { Layout } from "antd"

import Menu from "./menu"
import Content from "./content"

export interface IMyComponentState {
	collapse: boolean
}
// eslint-disable-next-line @typescript-eslint/ban-types
const MyComponent: React.FunctionComponent<{}> = () => {
	const [layoutState, setLayoutState] = useState<IMyComponentState>({
		collapse: true,
	})

	useEffect(() => {
		if (localStorage.getItem("open")) {
			setLayoutState({ collapse: false })
		}
	}, [])

	const onMouseOver = () => {
		if (!localStorage.getItem("open")) {
			setLayoutState({ collapse: false })
		}
	}

	const onMouseLeave = () => {
		if (!localStorage.getItem("open")) {
			setLayoutState({ collapse: true })
		}
	}

	return (
		<div id="layout">
			<Layout id="layout-menu" onMouseLeave={onMouseLeave} onMouseOver={onMouseOver}>
				<Menu collapse={layoutState.collapse} />
			</Layout>
			<Layout id="layout-content">
				<Content />
			</Layout>
		</div>
	)
}

export default MyComponent
