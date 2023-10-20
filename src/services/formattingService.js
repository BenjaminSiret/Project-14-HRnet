import { Timestamp } from 'firebase/firestore';

function convertTimestampToDate (employeeData) {
  return {
    ...employeeData,
    birthDate: employeeData.birthDate.toDate().toLocaleDateString(),
    joiningDate: employeeData.joiningDate.toDate().toLocaleDateString(),
  }
}

function convertDateToTimestamp (dateString) {
  const newDate = new Date(dateString);
  return Timestamp.fromDate(newDate)
}

export { convertTimestampToDate, convertDateToTimestamp }
