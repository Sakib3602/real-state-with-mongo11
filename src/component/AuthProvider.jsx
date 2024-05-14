import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "./Authentication/firebase.init";
export const AuthContext = createContext(null)
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";



const Githubprovider = new GithubAuthProvider();
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

  const [loading,setLoading] = useState(true)

    const [person,setPerson] = useState(null)
    // sign up email pass
    const signWithEP = (email,password)=>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in email pass
    const signInEmailPassword = (email,password)=>{
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    function logout() {
      setLoading(true)
        
        return signOut(auth);
      }

    //   github
    function github() {
      setLoading(true)
        
        return signInWithPopup(auth, Githubprovider)
      }

    //   google

    function google(){
      setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // update
    function update(name, photo) {
      // setLoading(true)
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    }

    // onAuth
    useEffect(() => {
        const DeleteIt = onAuthStateChanged(auth, (user) => {
          
          if (user) {
            setPerson(user);
            console.log("on auth", user);
          } 
          setLoading(false)
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
        loading,
        update,
       
      };
  
    return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
  };

export default AuthProvider;