import { useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth,  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile  } from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";
import { useEffect } from "react";
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