import { IonHeader, IonIcon, IonPage, IonSearchbar } from "@ionic/react";
import { arrowRedo, chevronBack, ellipse, search, star } from "ionicons/icons";
import FeaturedItem from "./FeaturedItem";
import Item from "./Item";
import StoreCard from "./StoreCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";

const Images = [
  {
    img: "https://img.freepik.com/premium-photo/cream-filled-donut-with-chocolate-icing-fabric-wood-with-other-donuts-piece-chocolate-background_266402-686.jpg?w=2000",
  },
  {
    img: "https://img.freepik.com/premium-photo/delicious-donuts-rustic-wooden-table_273003-269.jpg?w=2000",
  },
  {
    img: "https://thumbs.dreamstime.com/b/coffee-stack-donuts-table-92209261.jpg",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOL3Pkzt6fFVd5vKO6OEULltQBgoBFK4ZoQ&usqp=CAU",
  },
  {
    img: "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/SGITE20210621102102029773/detail/6d90921fb4134f2fb1c890eea8488708_1624271009041956456.webp",
  },
];
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
//   {
//     shopImg:
//       "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Breakfast-Bread-Bowls_exps168682_SD142780C08_30_1bC_RMS.jpg",
//     shopName: "Cookie Sandwich",
//     amount: "USD7.4",
//     coints: 10,
//   },
//   {
//     shopImg:
//       "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Breakfast-Bread-Bowls_exps168682_SD142780C08_30_1bC_RMS.jpg",
//     shopName: "Cookie Sandwich",
//     amount: "USD7.4",
//     coints: 10,
//   },
];
function OrderHistory() {
  return (
    <IonPage>
      <div>
        <div className="flex pt-5">
          <div className=" text-left pl-6">
            <IonIcon icon={chevronBack} className=" text-[25px]" />
          </div>

          <div className=" font-[Inter-Regular] text-black font-normal text-[16px] text-center pl-20">
            Order History
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
        </div></div>
      </div>
    </IonPage>
  );
}

export default OrderHistory;
