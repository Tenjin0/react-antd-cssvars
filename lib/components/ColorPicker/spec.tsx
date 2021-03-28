import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"

import ColorPickerComponent, { IColorPicker } from "."

//  https://blog.sapegin.me/all/react-testing-3-jest-and-react-testing-library/
describe("Test Component", () => {
	let props: IColorPicker

	beforeEach(() => {
		props = {
			defaultColor: "#FFFFFFCC",
			type: "primary",
		}
	})

	const renderComponent = () =>
		render(<ColorPickerComponent {...props}>Primary Button</ColorPickerComponent>)

	it("should have primary className with set as default", () => {
		const { getByTestId } = renderComponent()

		const testComponent = getByTestId("colorpicker-component")
		expect(testComponent.childElementCount).toEqual(1)
		testComponent.firstChild

		const buttonComponent = screen.getByRole("button")
		fireEvent.click(buttonComponent)
		expect(testComponent.childElementCount).toEqual(2)

		const container = testComponent.children[1]
		expect(container).toHaveClass("color-picker-container")
		expect(container.childElementCount).toEqual(3)
	})
})
