import { Timestamp } from 'firebase/firestore';

function convertTimestampToDate (employeeData) {
  return {
    ...employeeData,
    birthDate: employeeData.birthDate.toDate().toLocaleDateString(),
    joiningDate: employeeData.joiningDate.toDate().toLocaleDateString(),
  }
}

function convertDateToTimestamp (dateString) {
  const [day, month, year] = dateString.split('/');
  const isoDateString = `${year}-${month}-${day}`;

  if (isNaN(Date.parse(isoDateString))) {
    throw new Error('Invalid date');
  }

  const newDate = new Date(isoDateString);
  return Timestamp.fromDate(newDate);
}

export { convertTimestampToDate, convertDateToTimestamp }
