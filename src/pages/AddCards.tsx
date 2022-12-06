import { IonInput, IonLabel, IonIcon, IonPage } from "@ionic/react";
import { card, chevronBack } from "ionicons/icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../App.css";

// import required modules
const Order = () => {
  window.location.href = "/YourOrders/Con";
};

function AddCards() {
  return (
    <IonPage>
      <div>
        <div className="flex pt-5">
          <div className=" text-left pl-6">
            <IonIcon
              icon={chevronBack}
              className=" text-[25px]"
              onClick={Order}
            />
          </div>

          <div className=" font-[Inter-Regular]  font-normal text-[16px] text-center pl-24">
            Add cards
          </div>
        </div>
        <div className="py-5  text-[#1F1B29] text-center text-[24px] font-[Inter-Regular] font-medium   ">
          Add your payment methods{" "}
        </div>
        <div className=" text-center text-[16px] font-[Inter-Regular] font-normal text-[#2E2A36] px-[52px]">
          This card will only be charged when you place an order.
        </div>
        <div className="grid grid-rows-2 grid-col-7 gap-4 mt-[5vh]">
          <div className="col-span-7 ...">
            <div className="py-[1] mt-1 mx-5 ">
              <div className="credits flex ">
                <IonLabel>
                  {" "}
                  <IonIcon icon={card} className=" text-[30px] pt-3 pl-4 " />
                </IonLabel>
                <IonInput
                  type="number"
                  placeholder="4343 4343 4343 4343"
                  className="credit"></IonInput>
              </div>
            </div>
          </div>
          <div className="col-span-4 ...">
            <div className="py-[1] mt-1 ml-5 ">
              <div className="credits flex ">
                <IonInput
                  type="number"
                  placeholder="MM/YY"
                  className="credit"></IonInput>
              </div>
            </div>
          </div>
          <div className="col-span-3 ...">
            <div className="py-[1] mt-1 ml-3 mr-5">
              <div className="credits flex ">
                <IonInput
                  type="number"
                  placeholder="CVC"
                  className="credit"></IonInput>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 px-5 text-center mt-[35vh] ">
          <button className="rounded-full w-[100%] text-white bg-[#FFA300] text-[14px] text-medium px-5 py-4 ">
            Add card
          </button>{" "}
        </div>
      </div>
    </IonPage>
  );
}

export default AddCards;
