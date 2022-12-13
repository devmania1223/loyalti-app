import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import Logo from "../images/logo.png"
const WelcomeScreen: React.FC = () => {
  return (
    <IonPage>
      
        <div className="h-full w-full">
          <div className="mt-5 h-[55vw]"></div>
          <div className="py-[5] mt-10 mx-10">
            <img
              src={Logo}
              alt=" "
              className="w-[100%] px-[5] "
            />
          </div>
        </div>
      
    </IonPage>
  );
};

export default WelcomeScreen;
