import { createContext } from "react";

const UserContext = createContext({
    loggedInUserName : "Default_User",
    loggedInUserId : "Default_Id",
    loggedInUserAge : "Default_Age"
})


export default UserContext;