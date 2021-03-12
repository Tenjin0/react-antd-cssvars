import React from "react"
import { render } from "@testing-library/react"

import TagComponent, { ITagProps } from "."

describe("Test Component", () => {
	let props: ITagProps

	beforeEach(() => {
		props = {}
	})

	const renderComponent = () => render(<TagComponent data-testid="tag-component" {...props} />)

	it("should have secondary className with theme set as primary", () => {
		props.color = "primary"
		const { getByTestId } = renderComponent()

		const testComponent = getByTestId("tag-component")

		expect(testComponent).toHaveClass("tag-primary")
	})

	it("should have secondary className with theme set as primary", () => {
		props.color = "primary-bg"
		const { getByTestId } = renderComponent()

		const testComponent = getByTestId("tag-component")

		expect(testComponent).toHaveClass("tag-primary-bg")
	})

	it("should have secondary className with theme set as secondary", () => {
		props.color = "secondary"
		const { getByTestId } = renderComponent()

		const testComponent = getByTestId("tag-component")

		expect(testComponent).toHaveClass("tag-secondary")
	})
})
