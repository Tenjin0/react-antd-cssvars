import React, { useContext, useState, useCallback } from "react"

import {
	Spin,
	Alert,
	Badge,
	Cascader,
	Calendar,
	Comment,
	Carousel,
	DatePicker,
	Descriptions,
	Divider,
	Dropdown,
	Table,
	TablePaginationConfig,
	Card,
	Avatar,
	Checkbox,
	Form,
	Radio,
	Input,
	InputNumber,
	Select,
	List,
	Rate,
	Space,
	Timeline,
	TimePicker,
	TreeSelect,
	Tree,
	Tabs,
	Progress,
	Popconfirm,
	Switch,
	Slider,
	Statistic,
	Popover,
	Transfer,
	Tooltip,
	Steps,
	Collapse,
	message,
	Modal,
	Menu,
	Mentions,
	Result,
	RadioChangeEvent,
	AutoComplete,
	Row,
	Col,
	notification,
	BackTop,
} from "antd"

import {
	AudioOutlined,
	DownOutlined,
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from "@ant-design/icons"

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
const { Meta } = Card
const { TreeNode } = TreeSelect

export interface MyComponentProps {
	dispatch: (values: Partial<IMyComponentState>) => void
	menuTheme: TMenuTheme
	collapse: boolean
}

export interface MyComponentState {
	uppercase: boolean
	selectedRowKeys: Key[]
	visible: boolean
}

export interface IData {
	key: string
	name: string
	chinese: number
	math: number
	english: number
}

function getListData(value) {
	let listData
	switch (value.date()) {
		case 8:
			listData = [
				{ type: "warning", content: "This is warning event." },
				{ type: "success", content: "This is usual event." },
			]
			break
		case 10:
			listData = [
				{ type: "warning", content: "This is warning event." },
				{ type: "success", content: "This is usual event." },
				{ type: "error", content: "This is error event." },
			]
			break
		case 15:
			listData = [
				{ type: "warning", content: "This is warning event" },
				{ type: "success", content: "This is very long usual event。。...." },
				{ type: "error", content: "This is error event 1." },
				{ type: "error", content: "This is error event 2." },
				{ type: "error", content: "This is error event 3." },
				{ type: "error", content: "This is error event 4." },
			]
			break
		default:
	}
	return listData || []
}

function dateCellRender(value) {
	const listData = getListData(value)
	return (
		<ul className="events">
			{listData.map((item) => (
				<li key={item.content}>
					<Badge status={item.type} text={item.content} />
				</li>
			))}
		</ul>
	)
}

function getMonthData(value) {
	if (value.month() === 8) {
		return 1394
	}
}

function monthCellRender(value) {
	const num = getMonthData(value)
	return num ? (
		<div className="notes-month">
			<section>{num}</section>
			<span>Backlog number</span>
		</div>
	) : null
}

const mockData = []
for (let i = 0; i < 20; i++) {
	mockData.push({
		key: i.toString(),
		title: `content${i + 1}`,
		description: `description of content${i + 1}`,
	})
}

const treeData = [
	{
		title: "parent 1",
		key: "0-0",
		children: [
			{
				title: "parent 1-0",
				key: "0-0-0",
				disabled: true,
				children: [
					{
						title: "leaf",
						key: "0-0-0-0",
						disableCheckbox: true,
					},
					{
						title: "leaf",
						key: "0-0-0-1",
					},
				],
			},
			{
				title: "parent 1-1",
				key: "0-0-1",
				children: [{ title: "sss", key: "0-0-1-0" }],
			},
		],
	},
]

const options = [
	{
		value: "zhejiang",
		label: "Zhejiang",
		children: [
			{
				value: "hangzhou",
				label: "Hangzhou",
				children: [
					{
						value: "xihu",
						label: "West Lake",
					},
				],
			},
		],
	},
	{
		value: "jiangsu",
		label: "Jiangsu",
		children: [
			{
				value: "nanjing",
				label: "Nanjing",
				children: [
					{
						value: "zhonghuamen",
						label: "Zhong Hua Men",
					},
				],
			},
		],
	},
]

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

const dataList = [
	{
		title: "Ant Design Title 1",
	},
	{
		title: "Ant Design Title 2",
	},
	{
		title: "Ant Design Title 3",
	},
	{
		title: "Ant Design Title 4",
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

const dateFormat = "YYYY/MM/DD"
const monthFormat = "YYYY/MM"

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"]

const customFormat = (value) => `custom format: ${value.format(dateFormat)}`
const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`

const initialTargetKeys = mockData.filter((item) => +item.key > 10).map((item) => item.key)

// eslint-disable-next-line @typescript-eslint/ban-types
const MyComponent: React.FunctionComponent<MyComponentProps> = (props) => {
	const theme = useContext(ThemeContext)

	const [state, setState] = useState<MyComponentState>({
		uppercase: true,
		selectedRowKeys: [],
		visible: false,
	})
	const [isModalVisible, setIsModalVisible] = useState(false)

	const showModal = () => {
		setIsModalVisible(true)
	}

	const handleOk = () => {
		setIsModalVisible(false)
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}

	const [targetKeys, setTargetKeys] = useState(initialTargetKeys)
	const [selectedKeys, setSelectedKeys] = useState([])
	const onChange = (nextTargetKeys, direction, moveKeys) => {
		setTargetKeys(nextTargetKeys)
	}

	const onTransfertSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
		setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys])
	}

	const handleVisibleChange = (visible = false) => {
		setState({ ...state, visible })
	}
	const onCheckBoxChange = useCallback((e: any) => {
		setState({
			...state,
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
	const onDangerChange = useCallback((color: string) => {
		theme.set("danger-color", color, false)
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
		setState({ ...state, selectedRowKeys })
	}, [])

	const openNotificationWithIcon = (type) => {
		notification[type]({
			duration: 0,
			message: "Notification Title",
			description:
				"This is the content of the notification. This is the content of the notification. This is the content of the notification.",
		})
	}

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

	const getTarget = () => document.getElementById("layout-content")

	return (
		<React.Fragment>
			<div style={{ display: "flex", justifyContent: "center", marginBottom: "1em" }}>
				<Spin />
			</div>
			<PageHeader>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
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
				<Divider />
				<div style={{ display: "flex", justifyContent: "space-between" }}>
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
						onChangeColor={onDangerChange}
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
				<Button uppercase={state.uppercase}>Default Button</Button>
				<Button uppercase={state.uppercase} type="dashed">
					Dashed Button
				</Button>
				<Button uppercase={state.uppercase} type="text">
					Text Button
				</Button>
				<Button uppercase={state.uppercase} type="link">
					Link Button
				</Button>
			</div>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<div>
					<Checkbox checked={state.uppercase} onChange={onCheckBoxChange}>
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
					selectedRowKeys: state.selectedRowKeys,
					onChange: onSelectChange,
				}}
				columns={columns}
				dataSource={data}
				pagination={pagination}
			/>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
				<span>Notification:</span>
				<Button type="success" onClick={() => openNotificationWithIcon("success")}>
					Success
				</Button>
				<Button type="primary" onClick={() => openNotificationWithIcon("info")}>
					Info
				</Button>
				<Button type="warning" onClick={() => openNotificationWithIcon("warning")}>
					Warning
				</Button>
				<Button
					type="primary"
					danger={true}
					onClick={() => openNotificationWithIcon("error")}
				>
					Error
				</Button>
			</div>
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
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<Mentions defaultValue="@afc163">
						<Mentions.Option value="afc163">afc163</Mentions.Option>
						<Mentions.Option value="zombieJ">zombieJ</Mentions.Option>
						<Mentions.Option value="yesmeck">yesmeck</Mentions.Option>
					</Mentions>
				</div>
				<div>
					<Cascader options={options} placeholder="Please select" />
				</div>
				<div>
					<Select defaultValue="lucy" style={{ width: 120 }}>
						<Option value="jack">Jack</Option>
						<Option value="Yiminghe">yiminghe</Option>
					</Select>
				</div>

				<div>
					<Dropdown overlay={menu}>
						<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
							Hover me <DownOutlined />
						</a>
					</Dropdown>
				</div>
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
					<Card
						style={{ width: 300 }}
						title="card example"
						actions={[
							<SettingOutlined key="setting" />,
							<EditOutlined key="edit" />,
							<EllipsisOutlined key="ellipsis" />,
						]}
					>
						<Meta
							avatar={
								<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
							}
							title="Card title"
							description="This is the description"
						/>
					</Card>
				</div>
				<div>
					<Badge status="success" text="Success" />
					<br />
					<Badge status="error" text="Error" />
					<br />
					<Badge status="default" text="Default" />
					<br />
					<Badge status="processing" text="Processing" />
					<br />
					<Badge status="warning" text="Warning" />
					<br />
					<Status size="large" color="secondary">
						status
					</Status>
				</div>
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
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<Popover
					content="Hover me"
					title="Title"
					trigger="click"
					visible={state.visible}
					onVisibleChange={handleVisibleChange}
				>
					Popover
				</Popover>
				<Tooltip title="prompt text">Tooltip</Tooltip>
				<Popconfirm title="Are you sure to delete this task?" okText="Yes" cancelText="No">
					Popconfirm
				</Popconfirm>
			</div>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<Result status="success" title="Success" />
				<Result status="info" title="Info" />
				<Result status="error" title="Error" />
				<Result status="warning" title="Warning" />
			</div>
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<Descriptions title="User Info">
					<Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
					<Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
					<Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
					<Descriptions.Item label="Remark">empty</Descriptions.Item>
				</Descriptions>
			</div>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly" }}></div>
			<Comment
				author={<a>Han Solo</a>}
				avatar={
					<Avatar
						src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
						alt="Han Solo"
					/>
				}
				content={
					<p>
						We supply a series of design principles, practical patterns and high quality
						design resources (Sketch and Axure), to help people create their product
						prototypes beautifully and efficiently.
					</p>
				}
				datetime={<span>2021-03-21 20:46:05</span>}
			/>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<Form name="basic" initialValues={{ remember: true }}>
					<Form.Item
						label="Username"
						name="username"
						rules={[{ required: true, message: "Please input your username!" }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true, message: "Please input your password!" }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>

				<Row gutter={16}>
					<Col span={12}>
						<Statistic title="Active Users" value={112893} />
					</Col>
					<Col span={12}>
						<Statistic title="Account Balance (CNY)" value={112893} precision={2} />
					</Col>
					<Col span={12}>
						<Statistic title="Active Users" value={112893} loading />
					</Col>
				</Row>
			</div>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
			</div>
			<br />
			<br />
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
				}}
			>
				<div>
					<Space direction="vertical" size={12}>
						<DatePicker format={dateFormat} />
						<DatePicker format={dateFormatList} />
						<DatePicker format={monthFormat} picker="month" />
						<DatePicker.RangePicker format={dateFormat} />
						<DatePicker format={customFormat} />
					</Space>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-evenly",
					}}
				>
					<div>
						<TimePicker.RangePicker />
					</div>
					<div>
						<TimePicker
							renderExtraFooter={() => (
								<Button size="small" type="primary">
									Ok
								</Button>
							)}
						/>
					</div>
					<div>
						<Button type="primary" onClick={showModal}>
							Open Modal
						</Button>
						<Modal
							title="Basic Modal"
							visible={isModalVisible}
							onOk={handleOk}
							onCancel={handleCancel}
						>
							<p>Some contents...</p>
							<p>Some contents...</p>
							<p>Some contents...</p>
						</Modal>
					</div>
				</div>
			</div>
			<br />
			<br />
			<div>
				<List
					itemLayout="horizontal"
					dataSource={dataList}
					renderItem={(item) => (
						<List.Item>
							<List.Item.Meta
								avatar={
									<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
								}
								title={<a href="https://ant.design">{item.title}</a>}
								description="Ant Design, a design language for background applications, is refined by Ant UED Team"
							/>
						</List.Item>
					)}
				/>
			</div>
			<br />
			<br />
			<div>
				<Carousel
					style={{
						height: "160px",
						lineHeight: "160px",
						textAlign: "center",
					}}
				>
					<div>
						<h3>1</h3>
					</div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
				</Carousel>
			</div>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
				<AutoComplete
					options={[{ value: "a" }, { value: "aa" }, { value: "aaa" }]}
					placeholder="enter a"
				/>
				<InputNumber min={1} max={10} defaultValue={3} />
				<Rate style={{ background: "#fff", padding: "5px" }} />
			</div>
			<br />
			<br />
			<div>
				<Row gutter={24}>
					<Col xs={12}>
						<Tree
							checkable
							defaultExpandedKeys={["0-0-0", "0-0-1"]}
							defaultSelectedKeys={["0-0-0", "0-0-1"]}
							defaultCheckedKeys={["0-0-0", "0-0-1"]}
							treeData={treeData}
						/>
					</Col>
					<Col xs={12}>
						<TreeSelect
							showSearch
							style={{ marginLeft: "1em", width: "100%" }}
							dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
							placeholder="Please select"
							allowClear
							treeDefaultExpandAll
						>
							<TreeNode value="parent 1" title="parent 1">
								<TreeNode value="parent 1-0" title="parent 1-0">
									<TreeNode value="leaf1" title="leaf1" />
									<TreeNode value="leaf2" title="leaf2" />
								</TreeNode>
								<TreeNode value="parent 1-1" title="parent 1-1">
									<TreeNode value="leaf3" title="leaf3" />
								</TreeNode>
							</TreeNode>
						</TreeSelect>
					</Col>
				</Row>
			</div>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
				<Transfer
					dataSource={mockData}
					titles={["Source", "Target"]}
					targetKeys={targetKeys}
					selectedKeys={selectedKeys}
					onChange={onChange}
					onSelectChange={onTransfertSelectChange}
					render={(item) => item.title}
				/>
			</div>
		</React.Fragment>
	)
}

export default MyComponent
