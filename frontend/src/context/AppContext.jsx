import React, { createContext, useMemo } from "react";;
import { doctors } from "../assets/assets";

export const AppContext = createContext();
// console.log(doctors);


const AppContextProvider = (props) => {
    const currencySymbol = '$'
    const value = React.useMemo(() => ({ doctors, currencySymbol }), []);


    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;