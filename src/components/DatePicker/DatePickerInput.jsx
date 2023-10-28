import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PropTypes from "prop-types";

function DatePickerInput({ id, label, name, value, onDateChange, error, helperText }) {
  return (
    <DatePicker
      id={id}
      label={label}
      name={name}
      value={value}
      format="DD/MM/YYYY"
      slotProps={{
        textField: {
          error: !!error,
          helperText: helperText,
        },
      }}
      onChange={(date) => onDateChange(date, name)}
    />
  );
}

DatePickerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  onDateChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

export default DatePickerInput;
