import db from "../firebaseConfig";
import { collection, orderBy, query, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { convertDateToTimestamp, convertTimestampToDate } from "./formattingService";

async function addEmployeeToDatabase (employee) {
  try {
    employee.createdAt = serverTimestamp();
    employee.birthDate = convertDateToTimestamp(employee.birthDate);
    employee.joiningDate = convertDateToTimestamp(employee.joiningDate);

    await addDoc(collection(db, "employees"), employee);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
function subscribeToEmployees (onReceive) {
  const employeesCol = collection(db, "employees");
  const q = query(employeesCol, orderBy("createdAt", "desc"));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const employees = [];
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        employees.push({
          id: change.doc.id,
          ...convertTimestampToDate(change.doc.data())
        });
      }
    });
    onReceive(employees);
  });

  return unsubscribe;
}

export { addEmployeeToDatabase, subscribeToEmployees }
