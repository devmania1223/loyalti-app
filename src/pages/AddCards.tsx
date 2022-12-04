import { IonInput, IonLabel, IonIcon, IonItem, IonPage, IonSearchbar } from "@ionic/react";
import { arrowRedo, card, chevronBack, ellipse, search, star } from "ionicons/icons";
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
function AddCards() {
  return (
    <IonPage>
      <div>
        <div className="flex pt-5">
          <div className=" text-left pl-6">
            <IonIcon icon={chevronBack} className=" text-[25px]" />
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
              
            <div className="credits flex " >
        <IonLabel> <IonIcon icon={card} className=" text-[30px] pt-3 pl-4 "  /></IonLabel>
        <IonInput type="number"  placeholder="4343 4343 4343 4343" className="credit"  ></IonInput>
      </div>
            </div>
          </div>
          <div className="col-span-4 ...">
            <div className="py-[1] mt-1 ml-5 ">
            <div className="credits flex " >
        <IonInput type="number"  placeholder="MM/YY" className="credit"  ></IonInput>
      </div>
            </div>
          </div>
          <div className="col-span-3 ...">
          <div className="py-[1] mt-1 ml-3 mr-5">
            <div className="credits flex " >
        <IonInput type="number"  placeholder="CVC" className="credit"  ></IonInput>
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
