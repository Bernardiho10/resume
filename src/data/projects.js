// import db from "../firebase";
// import { collection, getDocs } from "firebase/firestore";

// const projectsData = async () => {
//   const projectsRef = collection(db, "projects");
//   const projectsData = [];

//   try {
//     const snapshot = await getDocs(projectsRef);

//     snapshot.forEach((doc, index) => {
//       const newProjectsData = {
//         id: index,
//         title: doc.data().ProjectHeader.title,
//         category: doc.data().ProjectHeader.tags,
//         img: doc.data().ProjectImages,
//         ProjectHeader: doc.data().ProjectHeader,
//       };
//       projectsData.push(newProjectsData);
//     });

//     console.log(projectsData); // Now you can access the populated data.
//   } catch (error) {
//     console.error("Error fetching projects data:", error);
//   }
// };
// export default projectsData;

// // export const projectsData = [
// //   {
// //     id: 1,
// //     title: "Efiko Freelance",
// //     category: "Web Application",
// //     img: WebImage2,
// //     ProjectHeader: {
// //       title: "Front End Development",
// //       publishDate: "Jul 26, 2018",
// //       tags: "UI / Frontend",
// //     },
// //   },
// //   {
// //     id: 2,
// //     title: "Phoenix Digital Agency",
// //     category: "Mobile Application",
// //     img: MobileImage2,
// //   },
// //   {
// //     id: 3,
// //     title: "Project Management UI",
// //     category: "UI/UX Design",
// //     img: UIImage1,
// //   },
// //   {
// //     id: 4,
// //     title: "Cloud Storage Platform",
// //     category: "UI/UX Design",
// //     img: UIImage2,
// //   },
// //   {
// //     id: 5,
// //     title: "React Social App",
// //     category: "Mobile Application",
// //     img: MobileImage1,
// //   },
// //   {
// //     id: 6,
// //     title: "Apple Design System",
// //     category: "Web Application",
// //     img: WebImage1,
// //   },
// // ];
