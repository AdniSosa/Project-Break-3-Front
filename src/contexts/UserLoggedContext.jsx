import { createContext, useContext, useEffect, useState } from "react"
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export const UserLoggedContext = createContext();

export const UserLoggedProvider = ({children}) => {

    const [userLogged, setUserLogged] = useState(() => {
        return localStorage.getItem('token') || null;
      });

      const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
      }

    const isUserLogin = (token) => {
        setUserLogged(token)
        localStorage.setItem('token', token);
    }

    const userLogout = () => {
       /*  setUserLogged(null)
        localStorage.removeItem('token'); */
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserLogged(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <UserLoggedContext.Provider value={{userLogged, isUserLogin, userLogout, googleSignIn}}>
            {children}
        </UserLoggedContext.Provider>
    )
}

export const useLoggedUser = () => useContext(UserLoggedContext);