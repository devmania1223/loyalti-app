import {
  IonInput,
  IonIcon,
  IonPage,
  IonAvatar,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { add, chevronBack } from "ionicons/icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../App.css";

// import required modules

const Profile = () => {
  window.location.href = "/Profile";
};

function ProfileEdit() {
  return (
    <IonPage>
      <div>
        <div className="flex pt-5">
          <div className=" text-left pl-6">
            <IonIcon
              icon={chevronBack}
              className=" text-[25px]"
              onClick={Profile}
            />
          </div>

          <div className=" font-[Inter-Regular]  font-normal text-[16px] text-center pl-28">
            Profile
          </div>
        </div>
        <div className="profile-item">
          <div className="pt-5  profile-avatar  ">
            <div>
              <IonAvatar className="w-[48px] h-[48px]">
                <img
                  alt="Silhouette of a person's head"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                  className="w-[48px] h-[48px]"
                />
              </IonAvatar>
            </div>
          </div>
          <div className=" pt-2 text-center text-[16px] font-[Inter-Regular] font-semibold text-[#1F1B29] px-[52px]">
            Sarrah Beth
          </div>
          <div className=" text-center text-[14px] font-[Inter-Regular] font-medium text-[#5A5761] px-[52px]">
            +8306261565449{" "}
          </div>
          <div className=" text-center text-[12px] font-[Inter-Regular] font-normal text-[#99969E] px-[52px]">
            demo@email.com{" "}
          </div>
          <div>
            <div className=" py-5  px-5  font-[Inter-Regular] text-left text-[16px]  font-semibold text-[#121619] ">
              Email
            </div>
            <div className="py-[1] mt-1 mx-5 ">
              <div className="profiles flex ">
                <IonInput
                  type="text"
                  placeholder="Username"
                  className="profile"></IonInput>
              </div>
            </div>
          </div>
          <div>
            <div className=" py-2  px-5  font-[Inter-Regular] text-left text-[16px]  font-semibold text-[#121619] ">
              Mobile
            </div>
            <div className="grid grid-cols-3 gap-2 py-[1] mt-1 mx-5 ">
              <div className=" ...">
                <div className="profiles flex ">
                  <IonSelect
                    placeholder="+86"
                    interface="action-sheet"
                    className="profile w-[80%]">
                    <IonSelectOption value="Male">+94</IonSelectOption>
                    <IonSelectOption value="Other">+86</IonSelectOption>
                    <IonSelectOption value="Other">+61</IonSelectOption>
                    <IonSelectOption value="Female">+44</IonSelectOption>
                  </IonSelect>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="profiles flex ">
                  <IonInput
                    type="number"
                    placeholder=" 16675520527"
                    className="profile"></IonInput>
                </div>
              </div>
            </div>{" "}
            <div className=" py-2 px-5  font-[Inter-Regular] text-left text-[14px]  font-normal text-[#888990] ">
              Supplementary information
            </div>
          </div>
          <div>
            <div className=" py-2  px-5  font-[Inter-Regular] text-left text-[16px]  font-semibold text-[#121619] ">
              First name
            </div>
            <div className="py-[1] mt-1 mx-5 ">
              <div className="profiles flex ">
                <IonInput
                  type="text"
                  placeholder=" First name"
                  className="profile"></IonInput>
              </div>
            </div>
          </div>{" "}
          <div>
            <div className=" py-2  px-5  font-[Inter-Regular] text-left text-[16px]  font-semibold text-[#121619] ">
              Last name
            </div>
            <div className="py-[1] mt-1 mx-5 ">
              <div className="profiles flex ">
                <IonInput
                  type="text"
                  placeholder="Last name"
                  className="profile"></IonInput>
              </div>
            </div>
          </div>
          <div>
            <div className=" py-2  px-5  font-[Inter-Regular] text-left text-[16px]  font-semibold text-[#121619] ">
              Sex
            </div>
            <div className="py-[1] mt-1 mx-5 ">
              <div className="profiles flex ">
                <IonSelect
                  placeholder="Sex"
                  interface="action-sheet"
                  className="w-[93%] profile">
                  <IonSelectOption value="Male" className=" profile">
                    Male
                  </IonSelectOption>
                  <IonSelectOption value="Female">Female</IonSelectOption>
                  <IonSelectOption value="Other">Other</IonSelectOption>
                </IonSelect>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 py-5">
            <div className="col-span-2 ...">
              <div className=" py-2  px-5  font-[Inter-Regular] text-left text-[20px]  font-semibold text-[#1F1B29] ">
                Address
              </div>
            </div>
            <div className="col-span-1 ... text-right px-5 pt-5">
              <IonIcon
                icon={add}
                className=" pt-1  text-[#1672FC] text-[20px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 ">
            <div className="col-span-2 ...">
              <div className="   px-5  font-[Inter-Regular] text-left text-[20px]  font-semibold text-[#1F1B29] ">
                <div className=" pt-2 text-left text-[16px] font-[Inter-Regular] font-semibold text-[#2E2A36] ">
                  Santa city
                </div>
                <div className=" text-left text-[16px] font-[Inter-Regular] font-normal text-[#2E2A36] ">
                  121,west street, USA
                </div>
                <div className=" text-left text-[12px] font-[Inter-Regular] font-normal text-[#5A5761]">
                  +63 6446546 64
                </div>
              </div>
            </div>
            <div className="col-span-1 ... text-right px-5 pt-7 font-[Inter-Regular] text-left text-[10px]  font-semibold text-[#1672FC]">
              default
            </div>
          </div>
          <div className="py-7 px-5 text-center mt-[0px] ">
            <button className="rounded-full w-[100%] text-white bg-[#FFA300] text-[14px] text-medium px-5 py-4 ">
              Save
            </button>{" "}
          </div>
          <div className="h-[130px] "></div>
        </div>
      </div>
    </IonPage>
  );
}

export default ProfileEdit;
