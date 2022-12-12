import { App } from "@capacitor/app";
import { IonContent, IonPage, useIonAlert } from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UserContext } from "../utils/contexts/UserContext";
import Logo from "../images/logo.png"
const Login: React.FC = () => {
  const { isLogin,setIsLogin } = useContext(UserContext);

  // const { state, dispatch } = useContext(TasksContext);
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

  useEffect(() => {
    App.addListener("backButton", () => {
      App.minimizeApp();
    });
  }, []);
  const [presentAlert] = useIonAlert();


const dispatch=useDispatch()
const handleSubmit=(e:any)=>{
  e.preventDefault()
  email=="admin@admin.com"&& password=="admin"?(setIsLogin(true),window.location.href="/Home"): presentAlert({
    header: 'Alert',
    subHeader: '',
    message: 'Invalid email and password',
    buttons: ['OK'],
  })
  console.log(isLogin)

}

  return (
    <IonPage>
      <IonContent fullscreen>
        
          <div className="h-full w-full">
            <form onSubmit={(e)=> handleSubmit(e)}>
              <div className="mt-5 h-[50px]"></div>
            <div className="py-[5] mt-10 mx-10">
                 <img src={Logo} alt=" " className="w-[100%] px-[5]" />
           </div>  
           <div className="py-5  font-black text-center text-2xl font-[Inter-Regular] font-bold   ">
              Welcome to LOYALTI
            </div>
            <div className=" px-15 font-black text-center text-sm font-[Inter-Regular] font-normal text-[#5A5761]">
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
                value={email}
                onChange={(e)=>{ setEmail(e.target.value)}}
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
                value={password}
                onChange={(e)=>{ setPassword(e.target.value)}}

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
              <button className="rounded-full w-[100%] text-white bg-[#FFA300] px-5 py-4 " type="submit" onClick={handleSubmit} >
                Log in
              </button>{" "}
            </div></form>
          </div>
       
      </IonContent>
    </IonPage>
  );
};

export default Login;
