import { createContext, useState, } from "react";

export const NameContext = createContext();

export const UserRegProvider = ({ children }) => {
    const [userRegData, setUserRegData] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState();

    // to save the user register form data form the sign up page
    const saveUserData = (regData) => {
        setUserRegData(regData);
    }

    // to save the user selected plan form te plans page
    const saveUserPlanData = (plan) => {
        setSelectedPlan(plan);
    }

    // to save the users registerd data with user selected plan

    const completeUserData =()=>{
        const  FullUserData ={
            ...userRegData,
            plan:selectedPlan,
        };
        return FullUserData;
    }


    return (

        <NameContext.Provider value={{ userRegData, selectedPlan,completeUserData, saveUserData, saveUserPlanData }}>
            {children}
        </NameContext.Provider>

    );
}
