import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () =>{
    const data = useContext(UserContext)

    return (
        <>
        <div className="flex bg-gray flex-end">
            <p className="text-white">{data.loggedInUserName}</p>
        </div>
        </>
    )
}

export default Header;