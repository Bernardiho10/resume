import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const fetchProjectData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    return error;
  } 
};

export const projectsData = await fetchProjectData();