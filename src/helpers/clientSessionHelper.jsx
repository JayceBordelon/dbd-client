import { sendRequest } from "./apiHelper";

export const instantiateClientSession = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
}

export const logOut = async() => {
    await sendRequest("/users/logout", {});
    localStorage.clear();
    window.location = "/login";
}

export const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    return user;
}

export const currentUserIsPresent = async() => {
    if (getCurrentUser()){
        return true;
    }
    return false;
}