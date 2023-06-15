const firebaseConfig = {

    apiKey: "AIzaSyChLQKhtAXuTmVdg2JpvaFn97xZZ38FcNc",

    authDomain: "formwwev.firebaseapp.com",

    databaseURL: "https://formwwev-default-rtdb.firebaseio.com",

    projectId: "formwwev",

    storageBucket: "formwwev.appspot.com",

    messagingSenderId: "42674119971",

    appId: "1:42674119971:web:28fffadb37044c943cd896"

  };

// initialize firebase

firebase.initializeApp(firebaseConfig);

// reference your database

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {

  e.preventDefault();

  var name = getElementVal("name");

  var emailid = getElementVal("emailid");

  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert

  document.querySelector(".alert").style.display = "block";

  //   remove the alert

  setTimeout(() => {

    document.querySelector(".alert").style.display = "none";

  }, 3000);

  //   reset the form

  document.getElementById("contactForm").reset();

}

const saveMessages = (name, emailid, msgContent) => {

  var newContactForm = contactFormDB.push();

  newContactForm.set({

    name: name,

    emailid: emailid,

    msgContent: msgContent,

  });

};

const getElementVal = (id) => {

  return document.getElementById(id).value;

};
