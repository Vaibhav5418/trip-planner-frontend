// frontend/firebase.js
const firebaseConfig = {
    apiKey: "AIzaSyAavcxc2GL5QqsUoKQNU47XFEsXNXhvcSI",
    authDomain: "trip-planner-ai-a96eb.firebaseapp.com",
    projectId: "trip-planner-ai-a96eb",
    storageBucket: "trip-planner-ai-a96eb.appspot.com",
    messagingSenderId: "615971832074",
    appId: "1:615971832074:web:9f4b5558352131cb47baf3"
  };
  
  // Initialize Firebase (compat)
  firebase.initializeApp(firebaseConfig);

  const backendURL = "https://trip-planner-backend-wlvx.onrender.com";
  window.backendURL = backendURL;