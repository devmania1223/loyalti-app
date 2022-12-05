import React from "react";
import { IonCard } from "@ionic/react";

// import './main.css';
import Card from "../../src/images/card.png";
const ProfileEdit = () => {
  window.location.href = "/YourOrders";
};
function ViewCard() {
  return (
    <IonCard className="mx-[35px] h-[60px] rounded-md" onClick={ProfileEdit}>
      <div>
        <div className="flex m-2">
          <div className="col-span-2 ...  px-1  font-[Inter-Regular] text-left text-[16px]  font-normal text-[#1F1B29] ">
            <div className=" text-left text-[16px] font-[Inter-Regular] font-medium text-[#1F1B29] flex">
              <img
                className=" h-[34px] w-[34px] rounded-[10px]"
                src={Card}
                alt="Current profile photo"
              />
              <div className="">
                <div className="col-span- ... text-left px-2 font-[Inter-Regular] text-left text-[12px]  font-medium text-[#1F1B29]">
                  VIEW CARD
                </div>
                <div className="col-span-1 ... text-left px-1  font-[Inter-Regular] text-left text-[16px]  font-normal text-[#2E2A36]">
                  Jonson and brothers
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 ... text-right px-4 pt-2 font-[Inter-Regular] text-left text-[14px]  font-normal text-[#1F1B29]">
            1 items
          </div>
        </div>
      </div>
    </IonCard>
  );
}
export default ViewCard;
