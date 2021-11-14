import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const Auth = createContext();

export function AuthProvider({children}){
    const { isUserLoggedIn, token: savedToken } = JSON.parse(localStorage?.getItem('login')) || { isUserLoggedIn: false, token: null };
    const [ login, setLogin ] = useState(isUserLoggedIn);
    const [ token, setToken ] = useState(savedToken);
    const [ spinner, setSpinner ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState("");
    const { state } = useLocation();
    const navigate = useNavigate();
    
    async function loginUserWithCredentials(email, password){
        setSpinner(true);
        try {
            const api = 'https://resume-builder.sauravkumar007.repl.co/user/login';
            const response = await axios.post(api, {user: { email, password }});
            if(response.status === 200){
                loginUser(response.data);
            }
        } catch (error){
            if(error.response.status === 404){
                setErrorMessage("User not found, Please SignUp!");
                setSpinner(false);
            }else if(error.response.status === 403){
                setErrorMessage("Incorrect Password, Try Again!");
                setSpinner(false);
            }else{
                setErrorMessage("Something went Wrong, Please Try Again!");
                setSpinner(false);
            }
        }
    }

    function loginUser({token}){
        setToken(token);
        setLogin(true);
        localStorage?.setItem('login', JSON.stringify({ isUserLoggedIn: true, token: token }));
        navigate(state?.from ? state.from : '/');
    }

    function logout(){
        setToken(null);
        setLogin(false);
        localStorage?.removeItem('login');
    }

    function setupAuthHeaderForServiceCalls(token) {
        if (token) {
          return (axios.defaults.headers.common["Authorization"] = token);
        }
        delete axios.defaults.headers.common["Authorization"];
      }

      setupAuthHeaderForServiceCalls(token);

    return(
        <Auth.Provider value={{ login, setLogin, logout, loginUserWithCredentials, token, spinner, errorMessage }}>
            {children}
        </Auth.Provider>
    )
}

export function useAuth(){
    return useContext(Auth);
}