import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ContextPlayer = () => {
  const {
    loggedInUserName,
    loggedInUserId,
    loggedInUserAge,
    setUserName,
    setUserId,
    setUserAge,
  } = useContext(UserContext);

  return (
    <>
      <h2>Name : {loggedInUserName}</h2>
      <h3>Id : {loggedInUserId}</h3>
      <h4>Age : {loggedInUserAge}</h4>

      <div>
        <p>
            User Name : 
          <input
            value={loggedInUserName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </p>
        <p>
            User Id : 
          <input
            value={loggedInUserId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </p>
        <p>
            User Age : 
          <input
            value={loggedInUserAge}
            onChange={(e) => setUserAge(e.target.value)}
          />
        </p>
      </div>
    </>
  );
};

export default ContextPlayer;
