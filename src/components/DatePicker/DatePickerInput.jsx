import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PropTypes from "prop-types";

function DatePickerInput({ label, minDate, maxDate }) {
  return <DatePicker label={label} minDate={minDate} maxDate={maxDate} />;
}

DatePickerInput.propTypes = {
  label: PropTypes.string.isRequired,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
};

export default DatePickerInput;
