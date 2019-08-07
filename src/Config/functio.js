
import firebase from "./Firebase"
function SignupFunc (data){
console.log("cha; rha ha", data);
return new Promise (function(resolve,reject){
firebase.auth().createUserWithEmailAndPassword(data.email , data.password)
.then(function(user) {
    resolve(user.user)
})
.catch(function(err) {
reject(err)
})
})
}



function LoginFunc (data){
    console.log("cha; rha ha", data);
    return new Promise (function(resolve,reject){
    firebase.auth().signInWithEmailAndPassword(data.email , data.password)
    .then(function(user) {
        resolve(user.user)
    })
    .catch(function(err) {
    reject(err)
    })
    })
    }


export {
    SignupFunc,LoginFunc
}