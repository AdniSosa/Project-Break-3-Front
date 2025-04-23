import { createContext, useState } from "react"


export const UserLoggedContext = createContext();

export const UserLoggedProvider = ({children}) => {

    const [userLogged, setUserLogged] = useState(() => {
        return localStorage.getItem('token') || null;
    });

    const isUserLogin = (token) => {
        setUserLogged(token)
        localStorage.setItem('token', token);
    }

    const userLogout = () => {
        setUserLogged(null)
        localStorage.removeItem('token');
    }

    return (
        <UserLoggedContext.Provider value={{userLogged, isUserLogin, userLogout}}>
            {children}
        </UserLoggedContext.Provider>
    )
}