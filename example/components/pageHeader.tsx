import React from "react"

import { PageHeader, Menu, Dropdown, Button, Typography, Row } from "antd"
import { InfoCircleOutlined, EllipsisOutlined, SendOutlined, FileOutlined } from "@ant-design/icons"

import { Tag } from "../../src/"
const { Paragraph } = Typography

// eslint-disable-next-line @typescript-eslint/ban-types
const PageHeaderComponent: React.FunctionComponent<{}> = () => {
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

	const content = (
		<>
			<Paragraph>
				Ant Design interprets the color system into two levels: a system-level color system
				and a product-level color system.
			</Paragraph>
			<Paragraph>
				Ant Design&#x27;s design team preferred to design with the HSB color model, which
				makes it easier for designers to have a clear psychological expectation of color
				when adjusting colors, as well as facilitate communication in teams.
			</Paragraph>
			<div className="example-icon-container">
				<IconLink icon={<SendOutlined />} text="Quick Start" />
				<IconLink icon={<InfoCircleOutlined />} text="Product Info" />
				<IconLink icon={<FileOutlined />} text="Product Doc" />
			</div>
		</>
	)

	const Content = ({ children, extraContent }) => (
		<Row>
			<div style={{ flex: 1 }}>{children}</div>
			<div className="image">{extraContent}</div>
		</Row>
	)
	return (
		<PageHeader
			title="Title"
			className="site-page-header"
			subTitle="This is a subtitle"
			ghost={false}
			tags={[
				<Tag key="tag-1" color="primary">
					Primary
				</Tag>,
				<Tag key="tag-1" color="primary-bg">
					Primary bg
				</Tag>,
				<Tag key="tag-2" color="secondary">
					Secondary
				</Tag>,
			]}
			extra={[
				<Button key="2">Operation</Button>,
				<Button key="1" type="primary">
					Primary
				</Button>,
				<DropdownMenu key="more" />,
			]}
			avatar={{ src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4" }}
			breadcrumb={{ routes }}
		>
			<Content
				extraContent={
					<img
						src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
						alt="content"
						width="100%"
					/>
				}
			>
				{content}
			</Content>
		</PageHeader>
	)
}

export default PageHeaderComponent
