import { IonIcon } from "@ionic/react";
import { add, ellipse } from "ionicons/icons";

function FeaturedItem(props: any) {
  return (
    <div className=" h-[140px] w-[140px] bg-transparent  ">
        <div>
      <img
        className="h-[140px] w-[140px] rounded-md"
        alt="Silhouette of mountains"
        src={props.shopImg}
      />
      <div className=" text-right featured-item-top-right flex ">
        <div className=" text-[#F7DB5E] text-[12px] pt-[4px] pr-1">
          {" "}
          <IonIcon icon={ellipse} />
        </div>{" "}
        <div className="pt-[4px]"> {props.coints}(1=.2$)</div>
      </div>
      <div className=" text-right  flex featured-item-bottom-right ">
        <div className=" text-[#000000] text-[16px] ">
          {" "}
          <IonIcon icon={add} />
        </div>{" "}
      </div>
      </div>
      <div className="pb-0 mt-[-40px] w-[140px]">
        <div className=" ">
          <p className="font-[Inter-Regular]  font-medium text-base text-left  featured-item-overflow">
            {props.shopName}
          </p>
        </div>
        <div className="flex ">
          <div className=" text-right ">
           
          
          <p className="font-[Inter-Regular]  font-normal text-[14px] text-[#22A45D] text-left ">
            {props.amount}
          </p></div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedItem;
