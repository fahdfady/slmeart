import { createContext, useReducer, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState();


    return (
        <AuthContext.Provider value={ { AuthContext, setAuth } } >

            { children }

        </AuthContext.Provider>
    )
}

export default AuthContext;