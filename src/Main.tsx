import { useContext } from "react";
import App from "./App";
import Login from "./pages/Login";
import { UserContext } from "./utils/contexts/UserContext";

const Main: React.FC = () => {
  const { isLogin } = useContext(UserContext);
  // {console.log(JSON.parse(window.localStorage["persistedUser"]).isLogin);
  // }
  return isLogin ? <App /> : <Login/>;
};

export default Main;
