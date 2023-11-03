import db from "../firebaseConfig";
import { getDocs, where, collection, orderBy, query, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { convertDateToTimestamp, convertTimestampToDate } from "./formattingService";

async function doesEmployeeExist (employee) {
  const employeesCol = collection(db, "employees");
  const q = query(employeesCol,
    where("firstName", "==", employee.firstName),
    where("lastName", "==", employee.lastName),
    where("birthDate", "==", convertDateToTimestamp(employee.birthDate)));

  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}

async function addEmployeeToDatabase (employee) {
  try {
    employee.createdAt = serverTimestamp();
    employee.birthDate = convertDateToTimestamp(employee.birthDate);
    employee.joiningDate = convertDateToTimestamp(employee.joiningDate);

    await addDoc(collection(db, "employees"), employee);

    return true
  } catch (error) {
    console.error("Error adding document: ", error);
    return false
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

export { doesEmployeeExist, addEmployeeToDatabase, subscribeToEmployees }
