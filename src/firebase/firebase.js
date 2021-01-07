import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // firebase.database().ref("expenses").push({
// //   description: "Moved to Canada",
// //   note: "Funny move this",
// //   amount: 10000,
// //   createdAt: "Nov 2019",
// // });
// // firebase.database().ref("expenses").push({
// //   description: "Moved to New Place",
// //   note: "Good Move",
// //   amount: 1750,
// //   createdAt: "Aug 2020",
// // });
// // firebase.database().ref("expenses").push({
// //   description: "Bought TV",
// //   note: "Decent",
// //   amount: 400,
// //   createdAt: "Oct 2020",
// // });

// firebase
//   .database()
//   .ref("expenses")
//   .on("value", (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// // firebase
// //   .database()
// //   .ref()
// //   .on("value", (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// //   });

// // firebase
// //   .database()
// //   .ref()
// //   .set({
// //     name: "Prithvi",
// //     age: 30,
// //     stressLevel: 6,
// //     job: {
// //       title: "Software Developer",
// //       company: "Google",
// //     },
// //     location: {
// //       city: "Toronto",
// //       country: "Canada",
// //     },
// //   });

// // firebase.database().ref().update({
// //   stressLevel: 9,
// //   "job/company": "Amazon",
// //   "location/city": "Seattle",
// // });
