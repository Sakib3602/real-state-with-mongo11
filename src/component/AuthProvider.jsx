import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./Authentication/firebase.init";
export const AuthContext = createContext(null)
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";



const Githubprovider = new GithubAuthProvider();
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [person,setPerson] = useState(null)
    // sign up email pass
    const signWithEP = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // sign in email pass
    const signInEmailPassword = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    function logout() {
        
        return signOut(auth);
      }

    //   github
    function github() {
        
        return signInWithPopup(auth, Githubprovider)
      }

    //   google

    function google(){
        return signInWithPopup(auth, provider)
    }

    // onAuth
    useEffect(() => {
        const DeleteIt = onAuthStateChanged(auth, (user) => {
          
          if (user) {
            setPerson(user);
            console.log("on auth", user);
          } 
          
        });
    
        return () => {
          DeleteIt();
        };
      }, []);

    const info = {
        signWithEP,
        signInEmailPassword,
        logout,
        google,
        person,
        github,
       
      };
  
    return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
  };

export default AuthProvider;