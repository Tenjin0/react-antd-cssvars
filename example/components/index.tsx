import React, { useEffect, useState } from "react"

import { Layout } from "antd"

import Menu from "./menu"
import Content from "./content"
import collapse from "antd/lib/collapse"
export type TMenuTheme = "light" | "dark"

export interface IMyComponentState {
	collapse: boolean
	menuTheme: TMenuTheme
}

// eslint-disable-next-line @typescript-eslint/ban-types
const MyComponent: React.FunctionComponent<{}> = () => {
	const [layoutState, setLayoutState] = useState<IMyComponentState>({
		collapse: true,
		menuTheme: "dark",
	})

	useEffect(() => {
		if (localStorage.getItem("open")) {
			setLayoutState({ ...layoutState, collapse: false })
		}
	}, [])

	const onMouseOver = () => {
		if (!localStorage.getItem("open")) {
			setLayoutState({ ...layoutState, collapse: false })
		}
	}

	const onMouseLeave = () => {
		if (!localStorage.getItem("open")) {
			setLayoutState({ ...layoutState, collapse: true })
		}
	}

	const dispatch = (values: Partial<IMyComponentState>) => {
		setLayoutState({ ...layoutState, ...values })
	}
	return (
		<div id="layout">
			<Layout id="layout-menu" onMouseLeave={onMouseLeave} onMouseOver={onMouseOver}>
				<Menu collapse={layoutState.collapse} menuTheme={layoutState.menuTheme} />
			</Layout>
			<Layout id="layout-content">
				<Content
					menuTheme={layoutState.menuTheme}
					collapse={layoutState.collapse}
					dispatch={dispatch}
				/>
			</Layout>
		</div>
	)
}

export default MyComponent
