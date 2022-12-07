
import { Provider } from "react-redux";
import store from "./features/store"
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import { UserContextProvider } from "./utils/contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider> 
      <Provider store={store} ><Main/></Provider>
      
    </UserContextProvider>
  
  </React.StrictMode>,
);

