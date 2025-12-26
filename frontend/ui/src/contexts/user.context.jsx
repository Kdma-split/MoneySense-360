import { createContext, useContext, useState } from "react";

const userContext = createContext()

export const UserProvider = ({ children }) => {
    // const userSchema = {
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    // }
    // const [user, setUser] = useState(userSchema)
    const [user, setUser] = useState(null)

    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}

export const UserContext = () => {
    return useContext(userContext)
}