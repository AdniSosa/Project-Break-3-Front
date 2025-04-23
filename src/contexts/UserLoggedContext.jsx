import { createContext, useContext, useEffect, useState } from "react"
import { GoogleAuthProvider, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";

export const UserLoggedContext = createContext();

export const UserLoggedProvider = ({children}) => {

    const [userLogged, setUserLogged] = useState(() => {
        return localStorage.getItem('token') || null;
    });

      const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
      }

    const isUserLogin = (token) => {
        setUserLogged(token)
        localStorage.setItem('token', token);
    }

    const userLogout = () => {
        setUserLogged(null)
        localStorage.removeItem('token');
        signOut(auth);
    }

    return (
        <UserLoggedContext.Provider value={{userLogged, isUserLogin, userLogout}}>
            {children}
        </UserLoggedContext.Provider>
    )
}