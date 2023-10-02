import {createUserWithEmailAndPassword, signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup,signOut} from 'firebase/auth'
import {auth} from '../firebaseConfig'


export const LoginAPI =(email, password ) =>{
try{
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
}catch(err){
    alert(err.error.message)
}
}

export const GoogleSignInAPI =( ) =>{
    try{
        let googleProvider = new GoogleAuthProvider();
        let response = signInWithPopup(auth, googleProvider);
        return response ;
    }catch(err){
        alert(err.error.message)
    }
    }

export const RegisterAPI =(email, password ) =>{
    try{
        let response = createUserWithEmailAndPassword(auth, email, password);
        return response;
    }catch(err){
        alert(err.error.message)
    }
    }

export const onLogout = () =>{
    try{
        signOut(auth);
    }catch(err) {
        return err;
    }
}