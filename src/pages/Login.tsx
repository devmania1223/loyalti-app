import { App } from "@capacitor/app";
import { IonContent, IonIcon, IonList, IonPage, IonInput, IonTab } from "@ionic/react";
import { checkmark, checkmarkDone, close } from "ionicons/icons";
import Lottie from "lottie-react";
import React, { useContext, useEffect } from "react";
import noTasks from "../lotties/noTasks.json";
import { TasksContext } from "../utils/contexts/TasksContext";

const Login: React.FC = () => {
  const { state, dispatch } = useContext(TasksContext);

  useEffect(() => {
    App.addListener("backButton", () => {
      App.minimizeApp();
    });
  }, []);

  const TaskList: React.FC = () =>
    state.tasks.map((task: any, key: number) => (
      <div
        className="font-sans my-3 p-3 rounded-lg border dark:border-gray-500 bg-white dark:bg-[#1e1e1e] shadow-md dark:shadow-gray-500"
        key={key}>
        <div className="w-full">
          <div className="w-full flex flex-row justify-between">
            <div className="w-full flex flex-col">
              <div
                className={
                  task.completed
                    ? "line-through font-semibold"
                    : "font-semibold"
                }>
                {task.title}
              </div>
              <div
                className={
                  task.completed
                    ? "pr-2 text-gray-500 dark:text-gray-300 line-through"
                    : "pr-2 text-gray-500 dark:text-gray-300"
                }>
                {task.description}
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                {task.date}
              </div>
            </div>
            <div className="flex items-center justify-between w-12">
              <IonIcon
                icon={task.completed ? checkmarkDone : checkmark}
                className={
                  task.completed
                    ? "text-lime-600"
                    : "text-gray-500 dark:text-gray-300"
                }
                size="large"
                onClick={() => {
                  state.tasks[key].completed = !state.tasks[key].completed;
                  dispatch({ type: "setTasks", tasks: [...state.tasks] });
                }}
              />
              <IonIcon
                icon={close}
                color="danger"
                size="large"
                onClick={() => {
                  state.tasks.splice(key, 1);
                  dispatch({
                    type: "setTasks",
                    tasks: [...state.tasks],
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ));

  const NoTasks: React.FC = () => (
    <div className="font-sans text-center md:my-10">
      <Lottie animationData={noTasks} className="h-96" />
      <h1 className="mt-4 font-black text-3xl">No Tasks</h1>
    </div>
  );

  return (
    <IonPage>
      <IonContent fullscreen>
        {state.tasks.length ? (
          <div className="h-full w-full">
              <div className="mt-5 h-[50px]"></div>
            <div className="py-[5] mt-10 mx-10">
                 <img src="https://s3-alpha-sig.figma.com/img/703c/8891/5533c5f17c442957a1620e49d4b8c0db?Expires=1670198400&Signature=LG7Cis6JiSAoCyTZJAsp6Lxt1cwh32FpHHtqgUDUxUIcOOmuVJ-8WhdYhlMi8Fwrp7mpXtq2sXXs832CE4dlRnPrnwCMlppKzoAOxugnCNOh6IPEckEfccvHDU2qJ~iDcM940nrFXM~iejTl50CmWKszbm7tjl4nMc6XKOdwsCis5xeAIgWPb4GsUfHxBoj8MmImW2tQnxzT5CSYB0wLUA--icZlogKbYyxfrphDXFAcwTaXqmUZwkQUMp19Vd3ybY2Q1DpWyqHghOx2SNt787hGSdvbflaIWk6NyT7ngyP7hboGNOYBmf95mWywUuvxnY-X8bgbh-trQKgp6BxF~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=" " className="w-[100%] px-[5]" />
           </div>  
           <div className="py-5  font-black text-center text-2xl font-Sans font-bold   ">
              Welcome to LOYALTI
            </div>
            <div className=" px-15 font-black text-center text-sm font-Inter font-normal text-[#5A5761]">
              To continue access your account please log in
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
            <div className=" py-2  px-5 font-black text-left text-sm  font-normal ">
              Password
            </div>
            <div className=" py-0  px-5  ">
              <input
                type="password"
                name="password"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-full sm:text-sm focus:ring-1 "
                placeholder="************"
              />

              <span></span>
            </div>
            <div className=" px-15 font-black text-center text-sm font-Inter font-normal text-[#5A5761]">
              <p className="py-5 underline-offset-auto">
                <a
                  href="/Forgot"
                  className="text-[#8A5E2C] underline underline-offset-1">
                  {" "}
                  Forget password?{" "}
                </a>
              </p>
            </div>
            <div className="py-5 px-5 text-center  ">
              <button className="rounded-full w-[100%] text-white bg-[#FFA300] px-5 py-4 ">
                Log in
              </button>{" "}
            </div>
          </div>
        ) : (
          <NoTasks />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Login;
