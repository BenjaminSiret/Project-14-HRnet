import { render, screen } from "@testing-library/react";
import App from "../src/App";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  RouterProvider: () => <div data-testid="routerProviderMock" />,
}));

jest.mock("@mui/x-date-pickers", () => ({
  // eslint-disable-next-line react/prop-types
  LocalizationProvider: ({ children }) => (
    <div data-testid="localizationProviderMock">{children}</div>
  ),
  AdapterDayjs: jest.fn(),
}));

test("renders App component without crashing", () => {
  render(<App router={{}} />);
});

test("renders RouterProvider and LocalizationProvider", () => {
  render(<App router={{}} />);
  const routerProviderElement = screen.getByTestId("routerProviderMock");
  const localizationProviderElement = screen.getByTestId("localizationProviderMock");
  expect(routerProviderElement).toBeInTheDocument();
  expect(localizationProviderElement).toBeInTheDocument();
});
