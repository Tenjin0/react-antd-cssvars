import React from "react"

import { Menu } from "antd"
import {
	AppstoreOutlined,
	PieChartOutlined,
	DesktopOutlined,
	ContainerOutlined,
	MailOutlined,
} from "@ant-design/icons"

const { SubMenu } = Menu

export interface IMenuComponent {
	collapse: boolean
}

const MenuComponent: React.FunctionComponent<IMenuComponent> = (props) => {
	return (
		<Menu
			defaultSelectedKeys={["1"]}
			defaultOpenKeys={[]}
			theme="dark"
			mode="inline"
			inlineCollapsed={props.collapse}
			collapsedWidth={50}
			style={{ height: "100%" }}
		>
			<Menu.Item key="1" icon={<PieChartOutlined />}>
				Option 1
			</Menu.Item>
			<Menu.Item key="2" icon={<DesktopOutlined />}>
				Option 2
			</Menu.Item>
			<Menu.Item key="3" icon={<ContainerOutlined />}>
				Option 3
			</Menu.Item>
			<SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
				<Menu.Item key="5">Option 5</Menu.Item>
				<Menu.Item key="6">Option 6</Menu.Item>
				<Menu.Item key="7">Option 7</Menu.Item>
				<Menu.Item key="8">Option 8</Menu.Item>
			</SubMenu>
			<SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
				<Menu.Item key="9">Option 9</Menu.Item>
				<Menu.Item key="10">Option 10</Menu.Item>
			</SubMenu>
		</Menu>
	)
}

export default MenuComponent
