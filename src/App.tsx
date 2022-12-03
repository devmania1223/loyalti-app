import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToast,
  setupIonicReact,
  useIonAlert,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { card, home, person, search } from "ionicons/icons";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import DetailedMatrix from "./pages/DetailedMatrix";
import DetailedUser from "./pages/DetailedUser";
import Follow from "./pages/Follow";
import HelpCenter from "./pages/HelpCenter";
import Matrix from "./pages/Matrix";
import MoreInfo from "./pages/MoreInfo";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Stopwatch from "./pages/Stopwatch";
import Tasks from "./pages/Tasks";
import TermsOfUse from "./pages/TermsOfUse";
import Tips from "./pages/Tips";
import StressMgmt from "./pages/tips/StressMgmt";
import TimeMgmt from "./pages/tips/TimeMgmt";
import User from "./pages/User";
import Login from "./pages/Login";
import ScanQR from "./pages/ScanQR";

import { TasksContext } from "./utils/contexts/TasksContext";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";

/* Theme variables */
import "./theme/variables.css";

/* Custom CSS */
import "./App.css";
import FAQs from "./pages/helpcenter/FAQs";
import Suggestions from "./pages/helpcenter/Suggestions";
import GetStarted from "./pages/helpcenter/GetStarted";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ImageSlider from "./pages/ImageSlider";
import SelectedStore from "./pages/SelectedStore";

setupIonicReact();

const App: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const { state, dispatch } = useContext(TasksContext);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs className="tab fixed..">
        <IonRouterOutlet>
          <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/Forgot">
              <ForgotPassword />
            </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/Open">
              <ScanQR/>
            </Route>
            <Route exact path="/Search">
              <Search />
            </Route>
            <Route path="/Store">
              <SelectedStore />
            </Route>
            <Route path="/Stopwatch">
              <Stopwatch />
            </Route>
            <Route path="/User">
              <User />
            </Route>
            <Route exact path="/">
              <Redirect to="/Login" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar 
            slot="bottom"
            color="white"
            mode="ios"
            translucent
            className={ window.location.pathname===("/Login")||(window.location.pathname===( "/Forgot"))?("hidden"):("block")+"relative bottom-5  w-[100%] py-3 mx-auto my-0  font-sans  "}>
            <IonTabButton tab="Home" href="/Home" className="home" >
              <IonIcon icon={home} />
              <IonLabel className="font-semibold">Home</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="Search"
              href="/Search"
              className="home"
              >
              <IonIcon icon={search}/>
              <IonLabel className="font-semibold">Search</IonLabel>
            </IonTabButton>

            <IonTabButton
              tab="Orders"
              href="/Store"
              className="home">
              <IonIcon icon={card} />
              <IonLabel className="font-semibold">Orders</IonLabel>
            </IonTabButton>
            <IonTabButton tab="User" href="/Login" className="home">
              <IonIcon icon={person} />
              <IonLabel className="font-semibold">User</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        <Route path="/M/UrgentAndImportant">
          <DetailedMatrix title="Urgent And Important Tasks" />
        </Route>
        <Route path="/M/UrgentButNotImportant">
          <DetailedMatrix title="Urgent But Not Important Tasks" />
        </Route>
        <Route path="/M/NotUrgentButImportant">
          <DetailedMatrix title="Not Urgent But Important Tasks" />
        </Route>
        <Route path="/M/NotUrgentAndNotImportant">
          <DetailedMatrix title="Not Urgent And Not Important Tasks" />
        </Route>
        <Route path="/Tips">
          <Tips />
        </Route>
        <Route path="/T/TimeMgmt">
          <TimeMgmt />
        </Route>
        <Route path="/T/StressMgmt">
          <StressMgmt />
        </Route>
        <Route path="/HelpCenter">
          <HelpCenter />
        </Route>
        <Route path="/H/GetStarted">
          <GetStarted />
        </Route>
        <Route path="/H/Suggestions">
          <Suggestions />
        </Route>
        <Route path="/H/FAQs">
          <FAQs />
        </Route>
        <Route path="/Follow">
          <Follow />
        </Route>
        <Route path="/MoreInfo">
          <MoreInfo />
        </Route>
        <Route path="/PrivacyPolicy">
          <PrivacyPolicy />
        </Route>
        <Route path="/TermsOfUse">
          <TermsOfUse />
        </Route>
        <Route path="/UserInfo">
          <DetailedUser />
        </Route>
      </IonReactRouter>
      <IonToast
        mode="ios"
        translucent
        isOpen={state.showToast}
        onDidDismiss={() =>
          dispatch({
            type: "setShowToast",
            showToast: false,
          })
        }
        message={state.toastMessage}
        duration={1500}
        cssClass="text-red-500 font-sans font-medium toast"
      />
    </IonApp>
  );
};

export default App;
