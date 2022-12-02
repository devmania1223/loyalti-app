import {  IonIcon } from "@ionic/react";
import {  ellipse } from "ionicons/icons";

function StoreCard(props: any) {
  return (
    <div className=" m-0 w-[163px] bg-transparent ">
      <img
        className="h-[140px] w-[163px] rounded-md"
        alt="Silhouette of mountains"
        src={props.shopImg}
      />
      <div className="pt-3 pb-0 h-[49px]">
          
          <div className=" ">
            <p className="font-[Inter-Regular] text-black font-medium text-base text-left store-overflow ">
              {props.shopName}
            </p>
          </div>
          <div className="flex ">
          <div className=" text-right ">
              <IonIcon
                icon={ellipse}
                className=" text-[#F7DB5E] text-[15.58px] pt- pr-1"
              />{" "}
            </div>
            <p className="font-[Inter-Regular]  font-normal text-[14px] text-[#99969E] text-left ">
              {props.amount}
            </p>
        </div>
      </div>
    </div>
  );
}
export default StoreCard;
