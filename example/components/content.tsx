import React, { useContext, useState, useCallback } from "react"

import {
	Table,
	TablePaginationConfig,
	Checkbox,
	Radio,
	Input,
	Select,
	Timeline,
	Tabs,
	Progress,
	Switch,
	Slider,
	Steps,
	Collapse,
	message,
} from "antd"

import { AudioOutlined } from "@ant-design/icons"

import { Button, TimelineItem, ColorPicker } from "../../lib/index"
import ThemeContext from "../context"

import PageHeader from "./pageHeader"
import { hex } from "../../lib/Theme"

const { Search } = Input
const { Option } = Select
const { TabPane } = Tabs
const { Panel } = Collapse
const { Step } = Steps

// eslint-disable-next-line @typescript-eslint/ban-types
const MyComponent: React.FunctionComponent<{}> = () => {
	const theme = useContext(ThemeContext)

	const [uppercase, setUppercase] = useState<boolean>(true)

	const onCheckBoxChange = useCallback((e: any) => {
		setUppercase(e.target.checked as boolean)
	}, [])

	const suffix = (
		<AudioOutlined
			style={{
				fontSize: 16,
				color: "var(--primary-color)",
			}}
		/>
	)

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
		},
		{
			title: "Chinese Score",
			dataIndex: "chinese",
			sorter: {
				compare: (a, b) => a.chinese - b.chinese,
			},
		},
		{
			title: "Math Score",
			dataIndex: "math",
			sorter: {
				compare: (a, b) => a.math - b.math,
			},
		},
		{
			title: "English Score",
			dataIndex: "english",
			sorter: {
				compare: (a, b) => a.english - b.english,
			},
		},
	]

	const data = [
		{
			key: "1",
			name: "John Brown",
			chinese: 98,
			math: 60,
			english: 70,
		},
		{
			key: "2",
			name: "Jim Green",
			chinese: 98,
			math: 66,
			english: 89,
		},
		{
			key: "3",
			name: "Joe Black",
			chinese: 98,
			math: 90,
			english: 70,
		},
		{
			key: "4",
			name: "Jim Red",
			chinese: 88,
			math: 99,
			english: 89,
		},
	]

	const text = `
	A dog is a type of domesticated animal.
	Known for its loyalty and faithfulness,
	it can be found as a welcome guest in many households across the world.
	`
	const pagination: TablePaginationConfig = {
		total: data.length,
		pageSize: 2,
	}

	const onPrimaryChange = (color: string) => {
		theme.set("primary-color", color, true)
	}

	const onSecondaryChange = (color: string) => {
		theme.set("secondary-color", color, true)
	}

	const onSuccessChange = (color: string) => {
		theme.set("success-color", color, false)
	}
	const onWarningChange = (color: string) => {
		theme.set("warning-color", color, false)
	}

	const onMenuChange = (color: string) => {
		theme.set("menu-background", color, true)
	}
	const onPick = (value: hex) => {
		navigator.clipboard.writeText(value).then(() => {
			message.info({
				style: { left: "100px" },
				content: "Copy to clipboard: " + value,
			})
		})
	}

	return (
		<React.Fragment>
			<PageHeader>
				<div
					style={{
						display: "flex",
						justifyContent: "space-evenly",
						marginBottom: "15px",
					}}
				>
					<ColorPicker
						type="primary"
						defaultColor={theme.get("primary-color")}
						onChangeColor={onPrimaryChange}
						onPick={onPick}
					>
						Primary Color
					</ColorPicker>
					<ColorPicker
						type="secondary"
						defaultColor={theme.get("secondary-color")}
						onChangeColor={onSecondaryChange}
					>
						Secondary Color
					</ColorPicker>
					<ColorPicker
						type="menu"
						defaultColor={theme.get("menu-background")}
						onChangeColor={onMenuChange}
					>
						Menu Color
					</ColorPicker>
				</div>
				<div style={{ display: "flex", justifyContent: "space-evenly" }}>
					<ColorPicker
						type="success"
						defaultColor={theme.get("success-color")}
						onChangeColor={onSuccessChange}
					>
						Success Color
					</ColorPicker>
					<ColorPicker
						type="warning"
						defaultColor={theme.get("warning-color")}
						onChangeColor={onWarningChange}
					>
						Warning Color
					</ColorPicker>
					<ColorPicker
						type="primary"
						danger={true}
						defaultColor={theme.get("danger-color")}
						onChangeColor={onMenuChange}
					>
						Danger Color
					</ColorPicker>
				</div>
				<br />
				<br />
			</PageHeader>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<Button uppercase={uppercase}>Default Button</Button>
				<Button uppercase={uppercase} type="dashed">
					Dashed Button
				</Button>
				<Button uppercase={uppercase} type="text">
					Text Button
				</Button>
				<Button uppercase={uppercase} type="link">
					Link Button
				</Button>
			</div>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<div>
					<Checkbox checked={uppercase} onChange={onCheckBoxChange}>
						Button uppercase
					</Checkbox>
				</div>
				<div>
					<Switch checked={uppercase} />
				</div>
				<div>
					<Radio.Group defaultValue={4}>
						<Radio value={1}>A</Radio>
						<Radio value={2}>B</Radio>
						<Radio value={3}>C</Radio>
						<Radio value={4}>D</Radio>
					</Radio.Group>
				</div>
			</div>
			<br />
			<br />
			<Table columns={columns} dataSource={data} pagination={pagination} />
			<br />
			<br />

			<div
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<Timeline
					pending="Recording..."
					style={{
						background: "#fff",
						padding: "15px",
						marginRight: "15px",
					}}
				>
					<TimelineItem>example default</TimelineItem>
					<TimelineItem color="secondary">example secondary</TimelineItem>
					<TimelineItem color="success">example success</TimelineItem>
					<TimelineItem color="warning">example warning</TimelineItem>
				</Timeline>
				<Steps
					style={{
						padding: "15px",
					}}
					size="small"
					current={1}
				>
					<Step title="Finished" />
					<Step title="In Progress" />
					<Step title="Waiting" />
				</Steps>
			</div>

			<br />
			<br />
			<div>
				<Input placeholder="Basic usage" style={{ marginBottom: "15px" }} />
				<Search
					placeholder="input search text"
					enterButton="Search"
					size="large"
					suffix={suffix}
				/>
			</div>
			<div>
				<br />
				<br />
				<Select defaultValue="lucy" style={{ width: 120 }}>
					<Option value="jack">Jack</Option>
					<Option value="Yiminghe">yiminghe</Option>
				</Select>
			</div>
			<br />
			<br />
			<div>
				<Tabs defaultActiveKey="1">
					<TabPane tab="Tab 1" key="1">
						Content of Tab Pane 1
					</TabPane>
					<TabPane tab="Tab 2" key="2">
						Content of Tab Pane 2
					</TabPane>
					<TabPane tab="Tab 3" key="3">
						Content of Tab Pane 3
					</TabPane>
				</Tabs>
			</div>
			<br />
			<br />
			<div>
				<Collapse defaultActiveKey={["1"]}>
					<Panel header="This is panel header 1" key="1">
						<p>{text}</p>
					</Panel>
					<Panel header="This is panel header 2" key="2">
						<p>{text}</p>
					</Panel>
					<Panel header="This is panel header 3" key="3">
						<p>{text}</p>
					</Panel>
				</Collapse>
				,
			</div>
			<br />
			<br />
			<div>
				<Slider defaultValue={30} />
			</div>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<div>
					<Progress percent={30} size="small" />
					<Progress percent={50} size="small" status="active" />
					<Progress percent={70} size="small" status="exception" />
					<Progress percent={100} size="small" />
				</div>
				<div>
					<Progress type="circle" percent={70} status="exception" />
					<Progress type="circle" percent={100} />
					<Progress type="circle" percent={75} />
				</div>
			</div>
		</React.Fragment>
	)
}

export default MyComponent
