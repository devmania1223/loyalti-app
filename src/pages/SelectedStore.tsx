import { IonHeader, IonIcon, IonPage, IonSearchbar } from "@ionic/react";
import { ellipse, star } from "ionicons/icons";
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
    img: "https://www.valentebakerysupplies.com/hubfs/orange-juice-cake-donut-recipe.jpg",
  },
  {
    img: "https://www.alattefood.com/wp-content/uploads/2018/03/Fruity-Pebble-Baked-Vanilla-Donuts-Recipe-99-500x500.jpg",
  },
  {
    img: "https://www.postconsumerbrands.com/recipes/wp-content/uploads/sites/39/2017/10/cereal-milk-doughnuts-web.jpg",
  },
  {
    img: "https://tastylicious.com/wp-content/uploads/2021/04/Types-of-donuts.jpg",
  },
  {
    img: "https://previews.123rf.com/images/iperl/iperl0903/iperl090300003/4423929-variety-of-frosted-donuts.jpg",
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
function SelectedStore() {
  return (
    <IonPage>
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper">
          {Images.map(imgs => (
            <SwiperSlide>
              <div className="swiper-zoom-container h-[280px] w-[100%]">
                <img src={imgs.img} alt="Silhouette of mountains" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       
      </div>
      <div className=" grid grid-flow-row auto-rows-max ">
      
          
          <div className=" "> 
      <div className="grid grid-rows-2 col-span-5 pl-5 mt-2">
          <div className="col-span-5 ... flex text-left mt-[0px] ">
            <div className="font-[Inter-Regular] text-black font-semibold text-[24px] text-left ">
              Jonson and Brothers
            </div>
          </div>
          <div className=" col-span-5 ... flex text-left mt-[0px]">
            <div className=" text-left text-[#868686] font-[Inter-Regular] text-[16px] font-medium">
              $$
              <IonIcon
                icon={ellipse}
                className="text-[#868686] px-1 pb-1 text-[5px]"
              />
            </div>
            <div className=" text-left text-[#99969E] font-[Inter-Regular] text-[16px] font-normal">
              Grocery
              <IonIcon
                icon={ellipse}
                className="text-[#868686] px-1 pb-1 text-[5px]"
              />
            </div>
            <div className=" text-left text-[#99969E] font-[Inter-Regular] text-[16px] font-normal">
              Foods
              <IonIcon
                icon={ellipse}
                className="text-[#868686] px-1 pb-1 text-[5px]"
              />
            </div>
            <div className=" text-left text-[#99969E] font-[Inter-Regular] text-[16px] font-normal">
              Medicine
            </div>
          </div>

          <div className=" col-span-5 ... flex text-left mt-[-1px]">
            <div className=" text-left text-[#5A5761] font-[Inter-Regular] text-[12px] font-medium">
              4.3
              <IonIcon icon={star} className="text-[#22A45D] px-3 " />
            </div>
            <div className=" text-left text-[#5A5761] font-[Inter-Regular] text-[12px] font-medium">
              200+ Ratings
            </div>
            <div className=" text-right px-3 text-[#5A5761] font-[Inter-Regular] text-[12px] font-medium">
              <IonIcon
                icon={ellipse}
                className=" text-[#F3CC30] text-[13.58px] "
              />{" "}
              Points Available
            </div>
          </div>
        </div>
        <div className="px-5 py-4">
          <hr />

          <div
            style={{ background: "rgba(103, 103, 103, 0.1)", height: "1px" }}
          />

          <hr />
        </div></div> 
        <div className="  all-items ">
        <div className=" text-[16px] text-[#000000] font-medium	font-[Inter-Regular] px-5 py-1">
          Featured item
        </div>

        <div className="  flex flex-nowrap gap-2 featured-item px-5 ">
          {shops.map(shop => (
            <FeaturedItem {...shop} />
          ))}
        </div>
        <div className=" text-[16px] font-medium  text-[#000000]	font-[Inter-Regular] px-5 mt-3 ">
          All item
        </div>
        <div className="  all-items px-2 pb-7">
          {shops.map(shop => (
            <div className="py-1">
              <Item {...shop} />
              <div className="px-3 py-1">
          <hr />

          <div
            style={{ background: "rgba(103, 103, 103, 0.1)", height: "1px" }}
          />

          <hr />
        </div>
            </div>
          ))}
        </div></div>
        <div className=""></div>
      </div>
      {/* <div className=" text-[16px] font-black font-medium	font-[Inter-Regular] px-5">
          Featured item
        </div> */}
    </IonPage>
  );
}

export default SelectedStore;
