import { App } from "@capacitor/app";
import { IonContent, IonPage } from "@ionic/react";
import React, { useContext, useEffect } from "react";
import { TasksContext } from "../utils/contexts/TasksContext";
import Logo from "../images/logo.png"

const ForgotPassword: React.FC = () => {
  const { state, dispatch } = useContext(TasksContext);

  useEffect(() => {
    App.addListener("backButton", () => {
      App.minimizeApp();
    });
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="h-full w-full">
          <div className="mt-5 h-[50px]"></div>
          <div className="py-[5] mt-10 mx-10">
            <img
              src={Logo}
              alt=" "
              className="w-[100%] px-[5]"
            />
          </div>
          <div className="py-5  font-black text-center text-2xl font-[Inter-Regular] font-bold  ">
            Forgot password
          </div>
          <div className=" px-10 mx-10 font-black text-center text-sm font-[Inter-Regular] font-normal text-[#5A5761]">
            Enter your existing email and we will sent recovery link to it{" "}
          </div>
          {/* <IonList className="px-3 pb-24 dark:bg-transparent">
              <TaskList />
            </IonList> */}
          <div className="py-5"></div>
          <div className=" py-2  px-5 font-black text-left text-sm  font-normal ">
            Email
          </div>
          <div className=" py-0  px-5  ">
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-full sm:text-sm focus:ring-1 peer ..."
              placeholder="you@example.com "
            />

            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </div>

          <div className=" px-15 font-black text-center text-sm font-Inter font-normal text-[#5A5761]">
            <p className="py-5 underline-offset-auto">
              <a
                href=""
                className="text-[#8A5E2C] underline underline-offset-1">
                {" "}
                Something went wrong?{" "}
              </a>
            </p>
          </div>
          <div className="py-20 px-5 text-center  ">
            <button className="rounded-full w-[100%] text-white bg-[#FFA300] px-5 py-4 ">
              Sent link
            </button>{" "}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
