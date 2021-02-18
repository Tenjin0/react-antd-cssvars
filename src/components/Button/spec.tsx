import React from "react";
import { render } from "@testing-library/react";

import ButtonComponent, { IButtonProps } from ".";


describe("Test Component", () => {

	let props: IButtonProps;

	beforeEach(() => {
		props = {
			type: "default"
		};

	});

	const renderComponent = () => render(<ButtonComponent id="button-component" {...props} />);

	it("should have primary className with set as default", () => {

		const { getByTestId } = renderComponent();

		const testComponent = getByTestId("button-component");

		// expect(testComponent).toHaveClass("test-component-default");
	});

	it("should have secondary className with theme set as primary", () => {
		props.type = "primary";
		const { getByTestId } = renderComponent();

		const testComponent = getByTestId("button-component");

		// expect(testComponent).toHaveClass("test-component-secondary");
	});
})
