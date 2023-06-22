import { useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth,  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile  } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";
import { useEffect } from "react";
import axios from "axios";
const auth = getAuth(app);

export  const AuthContext = createContext()

const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
const [user, setUser]= useState(null)
const [loading, setLoading]= useState(true)

const googleSignIn = ()=> {
  return signInWithPopup(auth, provider)
}


const updateUserProfile = (name, photo)=> {
  return updateProfile(auth.currentUser, {
    displayName: name, photoURL: photo
  })
}







const createUser = (email, password)=> {
  setLoading(true)
 return  createUserWithEmailAndPassword (auth, email, password)
 
}
const signIn = (email, password)=> {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}
const logOut = ()=> {
  setLoading(true)
 return  signOut(auth)
}

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{

    if(currentUser){
      axios.post('http://localhost:5000/jwt', {email: currentUser.email})
      .then(data => {
        console.log(data.data.token)
        localStorage.setItem('access-token', data.data.token)
      })
    }
    else{
      localStorage.removeItem('access-token')
    }

    setUser(currentUser)
    setLoading(false)
  
  })

  return ()=> {
    unSubscribe()
  }
},[])


 const authInfo = {
  user,
  loading,
  createUser,
  signIn,
  logOut,
  updateUserProfile,
  googleSignIn
 }
  return (
    <AuthContext.Provider value ={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;