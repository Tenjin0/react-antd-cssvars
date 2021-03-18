import React, { useContext, useState, useCallback } from "react"

import {
	Spin,
	Alert,
	Dropdown,
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
	Menu,
	Result,
	RadioChangeEvent,
} from "antd"

import { AudioOutlined, DownOutlined } from "@ant-design/icons"

import { Button, TimelineItem, ColorPicker, Status } from "../../lib/index"
import ThemeContext from "../context"

import PageHeader from "./pageHeader"
import { hex } from "../../lib/Theme"
import { IMyComponentState, TMenuTheme } from "."
import { Key } from "antd/lib/table/interface"

const { Search } = Input
const { Option } = Select
const { TabPane } = Tabs
const { Panel } = Collapse
const { Step } = Steps

export interface MyComponentProps {
	dispatch: (values: Partial<IMyComponentState>) => void
	menuTheme: TMenuTheme
	collapse: boolean
}

export interface MyComponentState {
	uppercase: boolean
	selectedRowKeys: Key[]
}

export interface IData {
	key: string
	name: string
	chinese: number
	math: number
	english: number
}
// eslint-disable-next-line @typescript-eslint/ban-types
const MyComponent: React.FunctionComponent<MyComponentProps> = (props) => {
	const theme = useContext(ThemeContext)

	const [myComponentState, setMyComponentState] = useState<MyComponentState>({
		uppercase: true,
		selectedRowKeys: [],
	})

	const onCheckBoxChange = useCallback((e: any) => {
		setMyComponentState({
			...myComponentState,
			uppercase: e.target.checked as boolean,
		})
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
			filters: [
				{
					text: "Joe",
					value: "Joe",
				},
				{
					text: "Jim",
					value: "Jim",
				},
				{
					text: "Submenu",
					value: "Submenu",
					children: [
						{
							text: "Green",
							value: "Green",
						},
						{
							text: "Black",
							value: "Black",
						},
					],
				},
			],
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
			filters: [
				{
					text: "London",
					value: "London",
				},
				{
					text: "New York",
					value: "New York",
				},
			],
			filterMultiple: false,
			sorter: {
				compare: (a, b) => a.english - b.english,
			},
		},
	]

	const data: IData[] = [
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

	const onPrimaryChange = useCallback((color: string) => {
		theme.set("primary-color", color, true)
	}, [])

	const onSecondaryChange = useCallback((color: string) => {
		theme.set("secondary-color", color, true)
	}, [])

	const onSuccessChange = useCallback((color: string) => {
		theme.set("success-color", color, false)
	}, [])
	const onWarningChange = useCallback((color: string) => {
		theme.set("warning-color", color, false)
	}, [])

	const onMenuChange = useCallback((color: string) => {
		theme.set("menu-background", color, true)
	}, [])
	const onPick = useCallback((value: hex) => {
		navigator.clipboard.writeText(value).then(() => {
			message.info({
				style: { left: "100px" },
				content: "Copy to clipboard: " + value,
			})
		})
	}, [])

	const onRadioChange = (e: RadioChangeEvent) => {
		props.dispatch({
			menuTheme: e.target.value,
		})
	}

	const onSwitchChange = (checked: boolean) => {
		props.dispatch({
			collapse: !checked,
		})
	}

	const onSelectChange = useCallback((selectedRowKeys: Key[]) => {
		setMyComponentState({ ...myComponentState, selectedRowKeys })
	}, [])

	const menu = (
		<Menu>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
					1st menu item
				</a>
			</Menu.Item>
			<Menu.Item icon={<DownOutlined />} disabled>
				<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
					2nd menu item
				</a>
			</Menu.Item>
			<Menu.Item disabled>
				<a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
					3rd menu item
				</a>
			</Menu.Item>
			<Menu.Item danger>a danger item</Menu.Item>
		</Menu>
	)

	return (
		<React.Fragment>
			<div style={{ display: "flex", justifyContent: "center", marginBottom: "1em" }}>
				<Spin />
			</div>
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
						side="right"
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
						side="right"
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
				<Button uppercase={myComponentState.uppercase}>Default Button</Button>
				<Button uppercase={myComponentState.uppercase} type="dashed">
					Dashed Button
				</Button>
				<Button uppercase={myComponentState.uppercase} type="text">
					Text Button
				</Button>
				<Button uppercase={myComponentState.uppercase} type="link">
					Link Button
				</Button>
			</div>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<div>
					<Checkbox checked={myComponentState.uppercase} onChange={onCheckBoxChange}>
						Button uppercase
					</Checkbox>
				</div>
				<div>
					<Switch checked={!props.collapse} onChange={onSwitchChange} />
					&nbsp; Menu Open
				</div>
				<div>
					<Radio.Group
						defaultValue={props.menuTheme}
						onChange={onRadioChange}
						value={props.menuTheme}
					>
						<Radio value="dark">Dark</Radio>
						<Radio value="light">Light</Radio>
					</Radio.Group>
				</div>
			</div>
			<br />
			<br />
			<Table<IData>
				rowSelection={{
					selectedRowKeys: myComponentState.selectedRowKeys,
					onChange: onSelectChange,
				}}
				columns={columns}
				dataSource={data}
				pagination={pagination}
			/>
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
					<TimelineItem color="primary">example primary</TimelineItem>
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
				<Input size="large" placeholder="Basic usage" style={{ marginBottom: "15px" }} />
				<Search
					placeholder="input search text"
					enterButton="Search"
					size="large"
					suffix={suffix}
				/>
			</div>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<Select defaultValue="lucy" style={{ width: 120 }}>
					<Option value="jack">Jack</Option>
					<Option value="Yiminghe">yiminghe</Option>
				</Select>
				<Dropdown overlay={menu}>
					<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
						Hover me <DownOutlined />
					</a>
				</Dropdown>
				<Status size="large" color="primary">
					status
				</Status>
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
				<div>
					<Alert message="Success Text" type="success" />
					<Alert message="Info Text" type="info" />
					<Alert message="Warning Text" type="warning" />
					<Alert message="Error Text" type="error" />
				</div>
			</div>
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<Result status="success" title="Success" />
				<Result status="info" title="Info" />
				<Result status="error" title="Error" />
				<Result status="warning" title="Warning" />
			</div>
		</React.Fragment>
	)
}

export default MyComponent
