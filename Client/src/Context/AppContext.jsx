import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const navigate = useNavigate();

    console.log(navigate); // Debug navigate context

    const [showLogin, setShowLogin] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [credit, setCredit] = useState(null);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const loadCreditData = async () => {
        if (!token) return;
        try {
            const { data } = await axios.post(
                `${backendUrl}/api/user/credits`,
                {},
                { headers: { token } }
            );
            if (data.success) {
                setCredit(data.credits);
                setUser(data.user);
            } else {
                toast.error("Failed to load credit data.");
            }
        } catch (error) {
            console.error("Error loading credit data:", error);
            toast.error("Unable to load credits. Please try again later.");
        }
    };

    const generateImage = async (prompt) => {
        try {
            const { data } = await axios.post(
                `${backendUrl}/api/image/generate-image`,
                { prompt },
                { headers: { token } }
            );
            if (data.success) {
                loadCreditData();
                return data.resultImage;
            } else {
                toast.error(data.message);
                loadCreditData();
                if (data.creditBalance === 0) {
                    console.log("Navigating to pricing page"); // Debug navigate
                    navigate('/pricing');
                }
            }
        } catch (error) {
            console.error("Error loading credit data:", error);
            toast.error("Unable to load credits. Please try again later.");
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        setCredit(null);
        toast.success("Logged out successfully.");
    };

    useEffect(() => {
        loadCreditData();
    }, [token]);

    const value = {
        showLogin,
        setShowLogin,
        user,
        setUser,
        credit,
        setCredit,
        token,
        setToken,
        backendUrl,
        loadCreditData,
        logout,
        generateImage
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
