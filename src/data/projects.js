import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const fetchProjectData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log('Fetched data:', data);
    return data;
  } catch (error) {
    console.error("Error fetching single project data:", error);
  } 
};

export const projectsData = await fetchProjectData();