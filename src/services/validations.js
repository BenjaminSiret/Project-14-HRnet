function validateInput (inputType, inputValue) {
  const validations = {
    firstName: { regex: /^[A-Za-z][A-Za-z-' ]{0,29}$/, name: "First name" },
    lastName: { regex: /^[A-Za-z][A-Za-z-' ]{0,49}$/, name: "Last name" },
    city: { regex: /^[a-zA-ZÀ-ÿ\s\-']{2,}$/, name: "City" },
    street: { regex: /^[0-9a-zA-ZÀ-ÿ\s\-',.]+(\s[0-9a-zA-ZÀ-ÿ\-',.]+)*$/, name: "Street" },
    zipCode: { regex: /^[0-9]{5}$/, name: "Zip code" },
    state: { name: "state" },
    department: { name: "department" },
  }

  const validation = validations[inputType];

  if (!validation) return;

  if (!inputValue.trim()) {
    return `${validation.name || inputType} is required`;
  }

  if (validation.regex && !validation.regex.test(inputValue)) {
    return `${validation.name || inputType} is invalid`;
  }
}


function validateBirthDate (date, maxYears = 100, minYears = 18) {
  const birthDate = new Date(date);
  const currentDate = new Date();
  const minDate = new Date(currentDate).setFullYear(
    currentDate.getFullYear() - minYears
  );
  const maxDate = new Date(currentDate).setFullYear(
    currentDate.getFullYear() - maxYears
  );

  if (!date) {
    return "Birth date is required";
  }
  if (birthDate > minDate) {
    return `Birth date must be before ${new Date(minDate).toLocaleDateString(
      "fr-FR"
    )}`;
  }
  if (birthDate < maxDate) {
    return `Birth date must be after ${new Date(maxDate).toLocaleDateString(
      "fr-FR"
    )}`;
  }
  return null;
}

function validateJoiningDate (date) {
  const currentDate = new Date();
  const joiningDate = new Date(date);

  if (!date) {
    return "Joining date is required";
  }

  if (joiningDate > currentDate) {
    return "Joining date must be before today";
  }
  return null;
}

export { validateInput, validateBirthDate, validateJoiningDate };
