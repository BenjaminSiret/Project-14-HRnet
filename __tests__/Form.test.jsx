import { render, screen } from "@testing-library/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Form from "../src/components/Form/Form";

test("render Form component", () => {
  render(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Form />
    </LocalizationProvider>
  );
  expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Birth date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Joining date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Department/i)).toBeInTheDocument();
});
