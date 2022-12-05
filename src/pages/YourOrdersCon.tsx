import { IonIcon, IonPage } from "@ionic/react";
import {
  calendarOutline,
  cardOutline,
  chevronBack,
  chevronForward,
} from "ionicons/icons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../App.css";
import Location from "../../src/images/Loc.png";
// import required modules
const ProfileEdit = () => {
  window.location.href = "/AddCard";
};

const Order = () => {
  window.location.href = "/YourOrders";
};

function YourOrdersCon() {
  return (
    <IonPage>
      <div className="flex pt-5">
        <div className=" text-left pl-6">
          <IonIcon
            icon={chevronBack}
            className=" text-[25px]"
            onClick={Order}
          />
        </div>

        <div className=" font-[Inter-Regular]  font-normal text-[16px] text-center pl-24">
          Your orders
        </div>
      </div>

      <div className="profile-item">
        <div className=" text-left text-[#FFFF] font-[Inter-Regular] text-[14px] font-medium px-5 py-2 h-[40px] bg-[#C67E02] ">
          You will earn 20 points from the order{" "}
        </div>
        <div className="col-span-1 ... text-right px-5 py-3 font-[Inter-Regular] text-left text-[10px]  font-semibold text-[#1672FC]">
          {" "}
          <img
            className=" h-[112px] w-[330px] rounded-[10px]"
            src={Location}
            alt="Current profile photo"
          />
        </div>

        <div>
          <div className=" text-left text-[16px] font-[Inter-Regular] font-medium text-[#1F1B29] px-5 flex">
            <IonIcon icon={calendarOutline} className=" text-[25px]" />{" "}
            <p className="px-5">Pickup Time</p>
          </div>
          <div className="grid grid-cols-3 gap-4 border border-[#9B6200] m-5 rounded-md">
            <div className="col-span-2 ...  px-5  font-[Inter-Regular] text-left text-[16px]  font-normal text-[#1F1B29] ">
              <div className="font-[Inter-Regular] text-left text-[16px] pt-2 font-medium text-[#1F1B29]">
                Schedule order
              </div>
              <div className="font-[Inter-Regular] text-left text-[14px] py-1 pb-2 font-normal text-[#5A5761]">
                Tomorrow 11:30- 12:00 pm
              </div>
            </div>
            <div className="col-span-1 ... text-right px-5 pt-6 font-[Inter-Regular] text-left text-[16px]  font-medium text-[#1F1B29]">
              <button className="bg-[#FFA101] px-[15px] py-[5px] rounded-[10px] text-[#FFFF] text-[14px] font-medium">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className=" text-left text-[16px] font-[Inter-Regular] font-medium text-[#1F1B29] px-5 flex ">
            <IonIcon icon={cardOutline} className=" text-[25px]" />{" "}
            <p className="px-5">Jonas and brother</p>
          </div>
          <div className="grid grid-cols-3 gap-4 pb-3">
            <div className="col-span-2 ...    font-[Inter-Regular] text-left text-[16px]  font-normal text-[#1F1B29] pl-16 ">
              <div className="font-[Inter-Regular] text-left text-[14px] pt-2 font-normal text-[#1F1B29] ">
                Jonas and borthers, park view area, 47th St.
              </div>
            </div>
            <div className="col-span-1 ... text-right px-5 pt-6 font-[Inter-Regular] text-left text-[16px]  font-medium text-[#1F1B29]"></div>
          </div>
        </div>

        <div className="px-3 py-1">
          <hr />

          <div
            style={{ background: "rgba(103, 103, 103, 0.1)", height: "1px" }}
          />

          <hr />
        </div>

        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-2 ...  px-5  font-[Inter-Regular] text-left text-[16px] pt-2 font-normal text-[#1F1B29] ">
            Subtotal
          </div>
          <div className="col-span-1 ... text-right px-5 pt-72font-[Inter-Regular] text-left text-[16px] pt-2 font-medium text-[#1F1B29]">
            $29.4
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-2 ...  px-5  font-[Inter-Regular] text-left text-[16px] pt-2 font-normal text-[#1F1B29] ">
            Delivery
          </div>
          <div className="col-span-1 ... text-right px-5 pt-72font-[Inter-Regular] text-left text-[16px] pt-2 font-medium text-[#1F1B29]">
            $0
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-2 ... flex px-5  font-[Inter-Regular] text-left text-[16px] pt-2 font-normal text-[#1F1B29] ">
            Total (incl. VAT)
          </div>
          <div className="col-span-1 ... text-right px-5 pt-72font-[Inter-Regular] text-left text-[16px] pt-2 font-medium text-[#1F1B29]">
            $29.4
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 py-2 ">
          <div className="col-span-2 ... flex px-5  font-[Inter-Regular] text-left text-[16px] pt-2 font-medium text-[#22A45D] ">
            Add more items
          </div>
          <div className="col-span-1 ... text-right px-5 pt-72font-[Inter-Regular] text-left text-[16px] pt-2 font-medium text-[#1F1B29]">
            <IonIcon icon={chevronForward} className=" text-[20px]" />
          </div>
        </div>
        <div className="px-3 py-1">
          <hr />

          <div
            style={{
              background: "rgba(103, 103, 103, 0.1)",
              height: "1px",
            }}
          />

          <hr />
        </div>
        <div className="grid grid-cols-3 gap-4 py-2">
          <div className="col-span-2 ... flex px-5  font-[Inter-Regular] text-left text-[16px] pt-2 font-medium text-[#1F1B29] ">
            Promo code
          </div>
          <div className="col-span-1 ... text-right px-5 pt-72font-[Inter-Regular] text-left text-[16px] pt-2 font-medium text-[#1F1B29]">
            <IonIcon icon={chevronForward} className=" text-[20px]" />
          </div>
        </div>

        <div className="px-3 py-1">
          <hr />

          <div
            style={{
              background: "rgba(103, 103, 103, 0.1)",
              height: "1px",
            }}
          />

          <hr />
        </div>

        <div className="py-4 px-5 text-center mt-[0px] ">
          <button
            className="rounded-full w-[100%] text-white bg-[#FFA300] text-[14px] text-medium px-5 py-4 "
            onClick={ProfileEdit}>
            Continue
          </button>{" "}
        </div>

        <div className="pb-5 px-5 text-center  ">
          <button className=" redeem rounded-full w-[100%] text-[#1F1B29] bg-[] text-[14px] text-medium px-5 py-4  ">
            Reedem with 60 points
          </button>{" "}
        </div>
      </div>
    </IonPage>
  );
}

export default YourOrdersCon;
