import React from "react"

import { PageHeader, Menu, Dropdown, Button } from "antd"
import { InfoCircleOutlined, EllipsisOutlined, SendOutlined, FileOutlined } from "@ant-design/icons"

import { Tag } from "../../lib/"

// eslint-disable-next-line @typescript-eslint/ban-types
const PageHeaderComponent: React.FunctionComponent<{}> = (props) => {
	const menu = (
		<Menu>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
					1st menu item
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
					2nd menu item
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
					3rd menu item
				</a>
			</Menu.Item>
		</Menu>
	)

	const DropdownMenu = () => (
		<Dropdown key="more" overlay={menu}>
			<Button
				style={{
					border: "none",
					padding: 0,
				}}
			>
				<EllipsisOutlined
					style={{
						fontSize: 20,
						verticalAlign: "top",
					}}
				/>
			</Button>
		</Dropdown>
	)

	const routes = [
		{
			path: "index",
			breadcrumbName: "First-level Menu",
		},
		{
			path: "first",
			breadcrumbName: "Second-level Menu",
		},
		{
			path: "second",
			breadcrumbName: "Third-level Menu",
		},
	]

	const IconLink = ({ icon, text }) => (
		<div className="example-icon">
			{icon}
			{text}
		</div>
	)

	return (
		<PageHeader
			title="Choose a color"
			className="site-page-header"
			subTitle={
				<a href="https://github.com/Tenjin0/react-antd-cssvars/tree/develop/lib/customize/1">
					click on the button below ( this example use some customization )
				</a>
			}
			ghost={false}
			tags={[
				<Tag key="tag-1" color="primary">
					Primary
				</Tag>,
				<Tag key="tag-2" color="primary-bg">
					Primary bg
				</Tag>,
				<Tag key="tag-3" color="secondary">
					Secondary
				</Tag>,
			]}
			extra={[<DropdownMenu key="more" />]}
			avatar={{ src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4" }}
			breadcrumb={{ routes }}
		>
			<br />
			<br />
			{props.children}
			<div className="example-icon-container">
				<IconLink icon={<SendOutlined />} text="Quick Start" />
				<IconLink icon={<InfoCircleOutlined />} text="Product Info" />
				<IconLink icon={<FileOutlined />} text="Product Doc" />
			</div>
		</PageHeader>
	)
}

export default PageHeaderComponent
