import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import { Button } from './Button';

describe("Component: Button", () => {
  test("renders successfully", () => {
    const { getByRole } = render(<Button />);

    expect(getByRole("button")).toBeInTheDocument();
  });

  it("applies any additional classNames provided", () => {
    const { getByRole } = render(<Button className="example" />);
    expect(getByRole("button")).toHaveClass("button");
    expect(getByRole("button")).toHaveClass("example");
  });
});
