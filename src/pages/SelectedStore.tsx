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
import ViewCard from "./ViewCard";
const Home = () => {
    window.location.href = "/Home";
  };
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
            <div className="    selected-store-top">
            <div className="grid grid-cols-10 gap-4">

  <div className="col-span-7 text-left pl-6"><IonIcon
                icon={chevronBack}
                className="text-[]  text-[25px]"
                onClick={Home}
              /></div>
  <div className="col-span-1 ..."><IonIcon
                icon={arrowRedo}
                className="text-[]  text-[25px]"
              /></div>
  <div className="col-span-1 ..."> <IonIcon
                icon={search}
                className="text-[] px-1 pb-1 text-[25px]"
              /></div>
  <div className="col-span-1 ..."></div>

</div>
            
          </div>
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
        </div><div className="absolute z-10"><ViewCard /></div>
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
       
      </div> <div className="h-[100px]"></div>
      {/* <div className=" text-[16px] font-black font-medium	font-[Inter-Regular] px-5">
          Featured item
        </div> */}
        
    </IonPage>
  );
}

export default SelectedStore;
