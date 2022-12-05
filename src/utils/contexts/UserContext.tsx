import { createContext, useEffect, useReducer,useState } from "react";
import { reducer } from "../functions";
import { user } from "./State";

const UserContext = createContext(user);

let persistedUser: any;

switch (window.localStorage["persistedUser"]) {
  case undefined:
    persistedUser = false
    break;
  default:
    persistedUser = JSON.parse(window.localStorage["persistedUser"]);
    break;
}

const UserContextProvider: React.FC<
  React.PropsWithChildren<{ children: any }>
> = (props: any) => {
  const fullState = {
    ...user,
    ...persistedUser,
  };
  const [isLogin, setIsLogin] = useState(false)
  // const [state, dispatch] = useReducer(reducer, fullState);

  useEffect(() => {
    // if(JSON.parse(window.localStorage["persistedUser"])=="undefined"){
    //   setIsLogin(false)
    // }
    // else
     if(persistedUser==undefined){
      setIsLogin(false)
    }
    else {
      setIsLogin(persistedUser.isLogin)
    }
  }, []);

  useEffect(() => {
    window.localStorage["persistedUser"] = JSON.stringify({
      isLogin: isLogin,
    });
  }, [isLogin]);

  const value = { isLogin, setIsLogin };
  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
  
};

export { UserContext, UserContextProvider };
