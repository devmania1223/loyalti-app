import { IonIcon, IonPage } from "@ionic/react";
import { chevronBack, chevronForward, trashBin } from "ionicons/icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../App.css";
import Location from "../../src/images/location.png";
// import required modules
const Continue = () => {
  window.location.href = "/YourOrders/Con";
};
const Back = () => {
  window.location.href = "/Store";
};

const shops = [
  {
    No: 1,
    shopName: "Cookie Sandwich",
    item: "Shortbread, chocolate turtle cookies, and red velvet.",
    amount: "USD7.4",
  },
  {
    No: 2,
    shopName: "Cookie Sandwich",
    item: "Shortbread, chocolate turtle cookies, and red velvet.",
    amount: "USD7.4",
  },
];
function YourOrders() {
  return (
    <IonPage>
      <div>
        <div className="flex pt-5">
          <div className=" text-left pl-6">
            <IonIcon
              icon={chevronBack}
              className=" text-[25px]"
              onClick={Back}
            />
          </div>

          <div className=" font-[Inter-Regular]  font-normal text-[16px] text-center pl-24">
            Your orders
          </div>
        </div>
        <div className=" text-left text-[#FFFF] font-[Inter-Regular] text-[14px] font-medium px-5 py-2 h-[40px] bg-[#C67E02]">
          You will earn 20 points from the order{" "}
        </div>

        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-2 ...">
            <div className="   px-5  font-[Inter-Regular] text-left text-[20px]  font-semibold text-[#1F1B29] ">
              <div className=" pt-5 text-left text-[16px] font-[Inter-Regular] font-medium text-[#1F1B29] ">
                Pickup your orders at:{" "}
              </div>
              <div className=" text-left text-[14px] font-[Inter-Regular] font-normal text-[#2E2A36] ">
                Jonas and borthers, park view area, 47th St.{" "}
              </div>
            </div>
          </div>
          <div className="col-span-1 ... text-right px-5 py-5 font-[Inter-Regular] text-left text-[10px]  font-semibold text-[#1672FC]">
            {" "}
            <img
              className=" h-[75px] w-[82px] rounded-[10px]"
              src={Location}
              alt="Current profile photo"
            />
          </div>
        </div>
        <div className="px-3 py-1">
          <hr />

          <div
            style={{ background: "rgba(103, 103, 103, 0.1)", height: "1px" }}
          />

          <hr />
        </div>
        <div className=" text-left text-[16px] font-[Inter-Regular] font-medium text-[#000000] px-5">
          Items:
        </div>
        {shops.map(shop => (
          <div className="py-1">
            <div className="grid  grid-cols-10 gap-4 py-1">
              <div className="col-span-2 ... text-center ">
                <p className="no mx-5  rounded-md text-[#22A45D] text-[16px] font-[Inter-Regular] font-medium text-[#000000]">
                  {shop.No}
                </p>
              </div>
              <div className="col-span-6 ... ">
                {" "}
                <div className="  text-left text-[18px] font-[Inter-Regular] font-medium text-[#1F1B29] ">
                  {shop.shopName}{" "}
                </div>
                <div className=" text-left text-[16px] font-[Inter-Regular] font-normal text-[#2E2A36] ">
                  {shop.item}{" "}
                </div>
              </div>
              <div className="col-span-2 ... pr-3">
                <div className=" pt- text-left text-[14px] font-[Inter-Regular] font-medium text-[#22A45D] ">
                  {shop.amount}{" "}
                </div>
                <div className=" pt-8 text-right text-[16px] font-[Inter-Regular] font-normal text-[#5A5761] px- ">
                  <IonIcon icon={trashBin} className=" text-[16px]" />
                </div>
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
          </div>
        ))}

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
      </div>
      <div className="py-6 px-5 text-center mt-[0px] ">
        <button
          className="rounded-full w-[100%] text-white bg-[#FFA300] text-[14px] text-medium px-5 py-4 "
          onClick={Continue}>
          Continue
        </button>{" "}
      </div>
      <div className="h-[130px] "></div>
    </IonPage>
  );
}

export default YourOrders;
