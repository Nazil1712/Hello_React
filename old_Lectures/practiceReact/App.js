import { useContext, useState } from "react";
import UserContext from "./utils/UserContext";
import "./index.css"
import Card from "./components/Card";
import {Container} from "./components/Card"
import createBrowserRouter from "react-router/dom"

const App3 = () => {
  const data = useContext(UserContext);

  const [userName, setUserName] = useState(data.loggedInUserName);
  const [userId, setUserId] = useState(data.loggedInUserId);
  const [userAge, setUserAge] = useState(data.loggedInUserAge);

  return (
    <>

      {/* If you will update Context, then not reflected here, because it is outside of <UserContext.Provider></>
      
      */}
      {/* <Header/> */}

      {/* For Higher Order Function */}
      {/* <FoodList/> */}

      {/* Using Context */}
      {/* <h1>Playing with context</h1>
      <UserContext.Provider
        value={{
          loggedInUserName: userName,
          loggedInUserId: userId,
          loggedInUserAge: userAge,
          setUserName, setUserId, setUserAge
        }}
      >
        <Header/>
        <ContextPlayer />
      </UserContext.Provider> */}
    </>
  );
};


const App = () =>{

  const appRouter = createBrowserRouter([

  ])
  return(
    <>
    
    </>
  )
  
}

export default App;
