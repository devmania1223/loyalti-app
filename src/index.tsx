// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
import { Provider } from "react-redux";
// import App from "./App";
import store from "./features/store"
// // import Main from "./Main";
// // import { MatrixContextProvider } from "./utils/contexts/MatrixContext";
// // import { TasksContextProvider } from "./utils/contexts/TasksContext";
// // import { UserContextProvider } from "./utils/contexts/UserContext";

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <Provider store={store} ><App/></Provider>
//   </React.StrictMode>,
// );

// // ReactDOM.render(
// // <Provider><App/></Provider>,
// //   document.getElementById("root")
// // )

// // ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
// //   <Provider><App/></Provider>,
// // );


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
// import { MatrixContextProvider } from "./utils/contexts/MatrixContext";
// import { TasksContextProvider } from "./utils/contexts/TasksContext";
import { UserContextProvider } from "./utils/contexts/UserContext";
// import { Provider } from "react-redux";
import App from "./App";
// import store from "./features/store"
// import Main from "./Main";
// import { MatrixContextProvider } from "./utils/contexts/MatrixContext";
// import { TasksContextProvider } from "./utils/contexts/TasksContext";
// import { UserContextProvider } from "./utils/contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider> <Provider store={store} ><Main/></Provider>
      {/* <TasksContextProvider>
        <MatrixContextProvider>
         
        </MatrixContextProvider>
      </TasksContextProvider> */}
    </UserContextProvider>
  
  </React.StrictMode>,
);

// ReactDOM.render(
// <Provider><App/></Provider>,
//   document.getElementById("root")
// )

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <Provider><App/></Provider>,
// );