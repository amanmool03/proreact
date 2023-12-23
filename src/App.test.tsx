import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

it("should have hello world", () => {
  render(<App />);
  const message = screen.getByRole("heading", {
    name: /hello world!!!!/i,
  });
  expect(message).toBeVisible();
});

it("should increment the count when clicking the button", () => {
  render(<App />);

  // Find the button based on its text content
  const buttonEl = screen.getByText(/count is 0/i);

  // Check if the button is found
  expect(buttonEl).toBeInTheDocument();

  // Click the button
  fireEvent.click(buttonEl);

  // Check if the count updates
  expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
});
