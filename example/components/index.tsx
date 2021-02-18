import React, { useContext } from 'react';

import { Table, TablePaginationConfig, Checkbox, Radio } from 'antd';
import { SketchPicker } from 'react-color'
import { Button } from '../../src/'
import { ThemeContext } from '../../src/'
export interface IMyComponent {

}

const MyComponent: React.FunctionComponent<IMyComponent> = props => {
	const theme = useContext(ThemeContext)
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
		},
		{
			title: 'Chinese Score',
			dataIndex: 'chinese',
			sorter: {
				compare: (a, b) => a.chinese - b.chinese,
				multiple: 3,
			},
		},
		{
			title: 'Math Score',
			dataIndex: 'math',
			sorter: {
				compare: (a, b) => a.math - b.math,
				multiple: 2,
			},
		},
		{
			title: 'English Score',
			dataIndex: 'english',
			sorter: {
				compare: (a, b) => a.english - b.english,
				multiple: 1,
			},
		},
	];

	const data = [
		{
			key: '1',
			name: 'John Brown',
			chinese: 98,
			math: 60,
			english: 70,
		},
		{
			key: '2',
			name: 'Jim Green',
			chinese: 98,
			math: 66,
			english: 89,
		},
		{
			key: '3',
			name: 'Joe Black',
			chinese: 98,
			math: 90,
			english: 70,
		},
		{
			key: '4',
			name: 'Jim Red',
			chinese: 88,
			math: 99,
			english: 89,
		},
	];

	const pagination: TablePaginationConfig = {
		total: data.length,
		pageSize: 2
	}
	return (
		<div>
			<Button type="primary">Primary Button</Button>
			<Button type="secondary">Secondary Button</Button>
			<Button type="danger">Danger Button</Button>
			<br />
			<br />
			<Button>Default Button</Button>
			<Button type="dashed">Dashed Button</Button>
			<Button type="text">Text Button</Button>
			<Button type="link">Link Button</Button>
			<br />
			<br />
			<div style={{ display: "flex"}}>
				<div><Checkbox>Checkbox</Checkbox></div>
				<div><Radio.Group>
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
		</div>
	)
}

export default MyComponent
