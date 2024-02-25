import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({children})=>{
    const data = {
        name:"Jkovic",
        age:21
    }
    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
}

// Coustom HOoks
const useGlobal = ()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobal}