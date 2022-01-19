import AuthContext from "./context";
import {useContext} from "react";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";


let useAuth;
export default useAuth = () => {
    const {user, setUser} = useContext(AuthContext);

    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    }

    const logIn = (authToken) => {
        const user = jwtDecode(authToken);
        setUser(user);
        authStorage.storeToken(authToken);
    }


    return {
        user,
        setUser,
        logOut,
        logIn,

    };
};