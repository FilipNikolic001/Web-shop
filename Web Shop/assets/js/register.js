import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"

import app from './config.js'

const database = getDatabase(app)
const auth = getAuth()

const btnReg = document.getElementById("regBtn")

btnReg.addEventListener("click", e => {
    const addUserInputUI = document.getElementsByClassName("user-input")
    let newUser = {}
    if (
        addUserInputUI[0].value == null || addUserInputUI[0].value == '' ||
        addUserInputUI[1].value == null || addUserInputUI[1].value == '' ||
        addUserInputUI[2].value == null || addUserInputUI[2].value == '' ||
        addUserInputUI[3].value == null || addUserInputUI[3].value == '' ||
        addUserInputUI[4].value == null || addUserInputUI[4].value == '' ||
        addUserInputUI[5].value == null || addUserInputUI[5].value == '' ||
        addUserInputUI[6].value == null || addUserInputUI[6].value == '' ||
        addUserInputUI[7].value == null || addUserInputUI[7].value == '' ||
        addUserInputUI[8].value == null || addUserInputUI[8].value == '' ||
        addUserInputUI[9].value == null || addUserInputUI[9].value == '' ||
        addUserInputUI[10].value == null || addUserInputUI[10].value == ''  
    ){
        return false
    } else {
        for (let i = 0; i < addUserInputUI.length; i++){
            let keyData = addUserInputUI[i].getAttribute("data-key")
            let value = addUserInputUI[i].value
            newUser[keyData] = value
        }
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            set(ref(database, 'Customers/' + user.uid), newUser)
            setTimeout(() => {
                window.location = 'login.html'
            }, 1000)
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        });
    }
})