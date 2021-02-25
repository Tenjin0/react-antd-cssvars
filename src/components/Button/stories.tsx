import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, color } from '@storybook/addon-knobs';

import {Button, Theme, TThemeColorTypes } from '../../index';
import { TLegacyButton } from '.';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
export default {
  title: "Button"
};

const themes = {
  Primary: 'primary',
  secondary: 'secondary',
  default: 'default',
	link: 'link'
};


// const themes = {
//   Primary: 'primary',
//   secondary: 'secondary',
//   danger: 'danger',
//   default: 'default',
// 	link: 'link'
// };


const sizes = ['small','middle', 'large' ]

const computed = (key: TThemeColorTypes, value: string) => {

	console.log(key, value, Theme.ColorLuminance(value, 0.2))
	if (theme.has(key + '-hover')) {
		theme.set(key + '-hover' as TThemeColorTypes, Theme.ColorLuminance(value, 0.2))
	}
}
const theme = new Theme<TThemeColorTypes>(null, computed)

storiesOf('Button', module)
 .addDecorator(withKnobs)
 .add('with parameters', () => {
		const buttonType = select('theme', themes, "primary", 'GROUP-ID1') as TLegacyButton
		const uppercase = boolean('uppercase', false, 'GROUP-ID1')
		const size = select('size', sizes, "middle", 'GROUP-ID1') as SizeType
		const primaryColor = color('primary color', theme.get("primary-color"),  'GROUP-ID1')
		theme.set("primary-color", primaryColor)
		const secondaryColor = color('secondary color', theme.get("secondary-color"),  'GROUP-ID1')
		theme.set("secondary-color", secondaryColor)
		const dangerColor = color('danger color', theme.get("danger-color"),  'GROUP-ID1')
		theme.set("danger-color", dangerColor)

	 	return (
			<Button type={buttonType} uppercase={uppercase} size={size}>{buttonType}</Button>
		 )
 })

