import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyDBQ_XqiwMM3fj4tMXTObi3xY9TZDKpTZs",
    authDomain: "chat1-app-cca9f.firebaseapp.com",
    databaseURL: "https://chat1-app-cca9f-default-rtdb.firebaseio.com",
    projectId: "chat1-app-cca9f",
    storageBucket: "chat1-app-cca9f.appspot.com",
    messagingSenderId: "774337278391",
    appId: "1:774337278391:web:93797060d24fafa47df832",
    measurementId: "G-8YYGBQJKDS"
  };

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const storage=getStorage(app);
export {app,auth,db,storage};