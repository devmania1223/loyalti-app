import { App } from "@capacitor/app";
import { IonContent, IonPage, useIonAlert } from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UserContext } from "../utils/contexts/UserContext";

const WelcomeScreen: React.FC = () => {
  

  return (
    <IonPage>
      <IonContent fullscreen>
        
          <div className="h-full w-full">
            
              <div className="mt-5 h-[55vw]"></div>
            <div className="py-[5] mt-10 mx-10">
                 <img src="https://s3-alpha-sig.figma.com/img/703c/8891/5533c5f17c442957a1620e49d4b8c0db?Expires=1670198400&Signature=LG7Cis6JiSAoCyTZJAsp6Lxt1cwh32FpHHtqgUDUxUIcOOmuVJ-8WhdYhlMi8Fwrp7mpXtq2sXXs832CE4dlRnPrnwCMlppKzoAOxugnCNOh6IPEckEfccvHDU2qJ~iDcM940nrFXM~iejTl50CmWKszbm7tjl4nMc6XKOdwsCis5xeAIgWPb4GsUfHxBoj8MmImW2tQnxzT5CSYB0wLUA--icZlogKbYyxfrphDXFAcwTaXqmUZwkQUMp19Vd3ybY2Q1DpWyqHghOx2SNt787hGSdvbflaIWk6NyT7ngyP7hboGNOYBmf95mWywUuvxnY-X8bgbh-trQKgp6BxF~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" 
                 alt=" " 
                 className="w-[100%] px-[5] bg-[red]" />
           </div>  

          </div>
       
      </IonContent>
    </IonPage>
  );
};

export default WelcomeScreen;
