import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home";
import React from "react";

describe("Home", () => {
  it("should have olá text", () => {
    render(<Home />); // Arrange

    const element = screen.getByText("olá"); // Act

    expect(element).toBeInTheDocument(); // Assert
  });

  it("should have given sentence", () => {
    render(<Home />); // Arrange

    const element = screen.getByText("tudo bem?"); // Act

    expect(element).toBeInTheDocument(); // Assert
  });
});
