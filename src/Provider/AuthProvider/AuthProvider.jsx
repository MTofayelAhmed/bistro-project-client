import { useState } from "react";
import { createContext } from "react";

import { getAuth,  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile  } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";
import { useEffect } from "react";
const auth = getAuth(app);

export  const AuthContext = createContext()


const AuthProvider = ({children}) => {
const [user, setUser]= useState(null)
const [loading, setLoading]= useState(true)

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
  updateUserProfile
 }
  return (
    <AuthContext.Provider value ={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;