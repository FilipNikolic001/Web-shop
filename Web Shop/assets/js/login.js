import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import app from './config.js'
const auth = getAuth()

const btnLogin = document.getElementById("loginBtn")

btnLogin.addEventListener("click", e => {
    let email = document.getElementById("email").value
    let password = document.getElementById("pass").value

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        sessionStorage.setItem("keyUsername", email)
        sessionStorage.setItem("keyPassword", password)
        sessionStorage.setItem("daLiJeAktivnaSesija", true)
        location.href = "index.html"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        $("#messageError").text("Niste uneli adekvatne podatke za username i password")
        alert(errorMessage)
    });
})

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid
        console.log(user);
    } else {

    }
})