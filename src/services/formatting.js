function convertTimestampToDate (employeeData) {
  return {
    ...employeeData,
    birthDate: employeeData.birthDate.toDate().toLocaleDateString(),
    joiningDate: employeeData.joiningDate.toDate().toLocaleDateString(),
  }
}

export default convertTimestampToDate;
