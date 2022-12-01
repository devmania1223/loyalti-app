import { IonAvatar, IonCard, IonIcon } from "@ionic/react";
import { bagOutline, ellipse, star } from "ionicons/icons";

function ShopCard(props: any) {
  return (
    <IonCard className="  card">
      <img
        className="h-[119px] w-[100%]"
        alt="Silhouette of mountains"
        src={props.shopImg}
      />
      <div className="p-3 pb-0 h-[133px]">
        <div className="grid grid-rows-1 grid-cols-6 ">
          <div className="row-span-1 ... ">
            {" "}
            <div>
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://www.webdesignerdepot.com/cdn-origin/uploads/circular_logos/filmax.jpg"
                  className="w-[60px] text-base  "
                />
              </IonAvatar>
            </div>
          </div>
          <div className="grid grid-rows-2 col-span-5 pl-1">
            <div className="col-span-5 ... flex text-left mt-[0px] ">
              <div className="font-[Inter-Regular] text-black font-semibold text-base text-left ">
                {props.shopName}
              </div>
            </div>
            <div className=" col-span-5 ... flex text-left mt-[0px]">
              <div className=" text-left text-[#5A5761] font-[Inter-Regular] text-[12px] font-medium">
                {props.rating}{" "}
                <IonIcon icon={star} className="text-[#22A45D] px-3 " />
              </div>
              <div className=" text-left text-[#5A5761] font-[Inter-Regular] text-[12px] font-medium">
                {props.ratingCount} Ratings
              </div>
              <div className=" text-right px-3 text-[#5A5761] font-[Inter-Regular] text-[12px] font-medium">
                <IonIcon
                  icon={ellipse}
                  className=" text-[#F3CC30] text-[13.58px] "
                />{" "}
                {props.amount}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-1 ">
          <div className="col-span-4 ... ">
            {" "}
            <img
              alt="Silhouette of a person's head"
              src="https://as2.ftcdn.net/v2/jpg/02/28/23/91/1000_F_228239110_4eEmhcqbUpZG8y1x1aazFBQMVmbGjoce.jpg"
              className="h-[43px] w-[100%]"
            />
          </div>
          <div className="flex justify-self-center justify-items-center content-around	items-center">
            <div className="bg-[#FFA101] w-[43px] h-[43px] rounded-full text-center	">
              <IonIcon
                icon={bagOutline}
                className=" text-[white] text-[17px] p-3 "
              />
            </div>{" "}
          </div>
        </div>
        ​
      </div>
    </IonCard>
  );
}
export default ShopCard;
