import React, { useState } from "react"

import { Menu, Button } from "antd"

const { SubMenu } = Menu
// eslint-disable-next-line @typescript-eslint/ban-types

export interface IMenuComponent {
	collapse: boolean
}
const MenuComponent: React.FunctionComponent<IMenuComponent> = (props) => {
	return (
		<Menu
			defaultSelectedKeys={["1"]}
			defaultOpenKeys={[]}
			mode="inline"
			inlineCollapsed={props.collapse}
			style={{ height: "100%" }}
		>
			<Menu.Item key="1">Option 1</Menu.Item>
			<Menu.Item key="2">Option 2</Menu.Item>
			<Menu.Item key="3">Option 3</Menu.Item>
			<SubMenu key="sub1" title="Navigation One">
				<Menu.Item key="5">Option 5</Menu.Item>
				<Menu.Item key="6">Option 6</Menu.Item>
				<Menu.Item key="7">Option 7</Menu.Item>
				<Menu.Item key="8">Option 8</Menu.Item>
			</SubMenu>
			<SubMenu key="sub2" title="Navigation Two">
				<Menu.Item key="9">Option 9</Menu.Item>
				<Menu.Item key="10">Option 10</Menu.Item>
				<SubMenu key="sub3" title="Submenu">
					<Menu.Item key="11">Option 11</Menu.Item>
					<Menu.Item key="12">Option 12</Menu.Item>
				</SubMenu>
			</SubMenu>
		</Menu>
	)
}

export default MenuComponent
