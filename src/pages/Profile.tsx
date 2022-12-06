import { IonIcon, IonPage, IonAvatar } from "@ionic/react";
import { chevronBack, ellipse, personOutline } from "ionicons/icons";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../App.css";
import Barcode from "../../src/images/barcode.png";
// import required modules
const ProfileEdit = () => {
  window.location.href = "/ProfileEdit";
};

function Profile() {
  return (
    <IonPage>
      <div>
        <div className="flex pt-5">
          <div className=" text-left pl-6">
            <IonIcon icon={chevronBack} className=" text-[25px]" />
          </div>

          <div className=" font-[Inter-Regular]  font-normal text-[16px] text-center pl-28">
            Profile
          </div>
        </div>
        <div className="profile-item">
          <div className="pt-5  profile-avatar  " onClick={ProfileEdit}>
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
          <div className="grid grid-cols-3 gap-4 bg-[#C67E02] h-[181px] mt-5 ">
            <div className="col-span-2 ...">
              <div className="   px-5  font-[Inter-Regular] text-left text-[20px]  font-semibold  ">
                <div className=" pt-5 text-left text-[13px] font-[Inter-Regular] font-normal text-[#FFFFFF] ">
                  Your LOYALTY points{" "}
                </div>
                <div className=" text-left text-[30px] font-[Inter-Regular] font-semibold text-[#FFFFFF] ">
                  2,345
                </div>
                <div className=" text-left text-[12px] font-[Inter-Regular] font-semibold text-[#FFFFFF]">
                  Expire on: 20 Jan, 2022
                </div>
              </div>
            </div>
            <div className="col-span-1 ... text-right px-5 pt-7 font-[Inter-Regular] text-left text-[10px]  font-semibold text-[#1672FC]">
              <IonIcon
                icon={ellipse}
                className=" pt-1  text-[#F3CC30] text-[40px]"
              />
            </div>
          </div>
          <div className="text-center profile-avatar mt-[-60px]">
            <img
              className="px-[px]  h-[104px] w-[191px] rounded-[10px]"
              src={Barcode}
              alt="Current profile photo"
            />
          </div>

          <div className="flex px-5 Default shadow py-3 mt-5" onClick={ProfileEdit}>
            <div className="row-span-1 ... pr-3">
              {" "}
              <div>
                <IonIcon
                  icon={personOutline}
                  className=" pt-1  text-[#16B2B6] text-[22px]"
                />
              </div>
            </div>
            <div className="grid grid-rows-2 col-span-5 pl-1">
              <div className="col-span-5 ... flex text-left mt-[0px] ">
                <div className="font-[Inter-Regular] text-[#1F1B29] font-semibold text-base text-[18px] text-left ">
                  Account info{" "}
                </div>
              </div>
              <div className=" col-span-5 ... flex text-left mt-[0px]">
                <div className=" text-left text-[#99969E] font-[Inter-Regular] text-[12px] font-normal">
                  Change setting of your account here
                </div>
              </div>
            </div>
          </div>
          <div className=" 	box ">
            <div className=" text-left text-[#343A3F] font-[Inter-Regular] text-[18px] font-semibold px-5 pt-5">
              Help center{" "}
            </div>

            <div className=" text-left text-[#878D96] font-[Inter-Regular] text-[12px] font-normal px-5 pt-2 pb-5 ">
              Need any help? Here is help center{" "}
            </div>

            <div className=" text-left text-[#343A3F] font-[Inter-Regular] text-[18px] font-semibold px-5 pt-5">
              Report a problem{" "}
            </div>

            <div className=" text-left text-[#878D96] font-[Inter-Regular] text-[12px] font-normal px-5 pt-2 pb-5 ">
              Need any help? Here is help center{" "}
            </div>
          </div>
        </div>{" "}
      </div>
    </IonPage>
  );
}

export default Profile;
