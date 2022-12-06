import { IonIcon, IonPage } from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import Item from "./Item";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../App.css";

const shops = [
  {
    shopImg:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Breakfast-Bread-Bowls_exps168682_SD142780C08_30_1bC_RMS.jpg",
    shopName: "Cookie Sandwich",
    amount: "USD7.4",
    coints: 10,
  },
  {
    shopImg:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Breakfast-Bread-Bowls_exps168682_SD142780C08_30_1bC_RMS.jpg",
    shopName: "Cookie Sandwich",
    amount: "USD7.4",
    coints: 10,
  },
  {
    shopImg:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Breakfast-Bread-Bowls_exps168682_SD142780C08_30_1bC_RMS.jpg",
    shopName: "Cookie Sandwich",
    amount: "USD7.4",
    coints: 10,
  },
];
function OrderHistory() {
  return (
    <IonPage>
      <div>
      <div className="pb-2">
      <div className=" font-[Inter-Regular]  font-normal text-[16px] text-center pt-5   ">
        Order History
      </div>
      
        <div className="flex mt-[-24px] absolute ">
          <div className=" text-left pl-6">
            <IonIcon
              icon={chevronBack}
              className=" text-[25px]"
            />
          </div>
        </div>
        </div>
        <div className="orders-all">
          <div className=" text-[16px] font-medium  text-[#000000]	font-[Inter-Regular] px-5 mt-5 ">
            Upcoming Orders
          </div>

          <div className="  orders px-2 pb-7 h-full">
            {shops.map(shop => (
              <div className="py-1">
                <Item {...shop} />
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
          </div>
          <div className=" text-[16px] font-medium  text-[#000000]	font-[Inter-Regular] px-5 mt-5 ">
            Past orders
          </div>

          <div className="  orders-past px-2 pb-7 h-full">
            {shops.map(shop => (
              <div className="py-1">
                <Item {...shop} />
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
          </div>
        </div>
      </div>
    </IonPage>
  );
}

export default OrderHistory;
