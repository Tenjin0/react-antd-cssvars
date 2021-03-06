import React, { useContext } from "react"

import {
	Table,
	TablePaginationConfig,
	Checkbox,
	Radio,
	Input,
	Select,
	Tabs,
	Switch,
	Slider,
	Collapse,
} from "antd"
import { AudioOutlined } from "@ant-design/icons"

import ColorPickerChooser from "../../src/components/ColorPicker"

import { Button } from "../../src"
import { ThemeContext } from "../../src"
import PageHeader from "./pageHeader"

const { Search } = Input
const { Option } = Select
const { TabPane } = Tabs
const { Panel } = Collapse

// eslint-disable-next-line @typescript-eslint/ban-types
const MyComponent: React.FunctionComponent<{}> = () => {
	const theme = useContext(ThemeContext)
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
	const onDangerChange = (color: string) => {
		theme.set("danger-color", color, true)
	}

	return (
		<React.Fragment>
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<ColorPickerChooser
					type="primary"
					defaultColor={theme.get("primary-color")}
					onChangeColor={onPrimaryChange}
					tintsAndShades={true}
				>
					Primary Color
				</ColorPickerChooser>
				<ColorPickerChooser
					type="secondary"
					defaultColor={theme.get("secondary-color")}
					onChangeColor={onSecondaryChange}
				>
					Secondary Color
				</ColorPickerChooser>
				<ColorPickerChooser
					type="primary"
					danger={true}
					defaultColor={theme.get("danger-color")}
					onChangeColor={onDangerChange}
				>
					Danger Color
				</ColorPickerChooser>
			</div>
			<br />
			<br />
			<PageHeader />
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<Button>Default Button</Button>
				<Button type="dashed">Dashed Button</Button>
				<Button type="text">Text Button</Button>
				<Button type="link">Link Button</Button>
			</div>
			<br />
			<br />
			<div style={{ display: "flex", justifyContent: "space-evenly" }}>
				<div>
					<Checkbox>Checkbox</Checkbox>
				</div>
				<div>
					<Switch defaultChecked />
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
			<div>
				<Slider defaultValue={30} />
			</div>
			<br />
			<br />
			<div>
				<Table columns={columns} dataSource={data} pagination={pagination} />
			</div>
		</React.Fragment>
	)
}

export default MyComponent
