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
      <div className="p-3 pb-0">
        <div className="grid grid-rows-1 grid-flow-col ">
          <div className="row-span-2 ... ">
            {" "}
            <IonAvatar>
              <img
                alt="Silhouette of a person's head"
                src="https://www.webdesignerdepot.com/cdn-origin/uploads/circular_logos/filmax.jpg"
                className="w-[50px]"
              />
            </IonAvatar>
          </div>
          <div className="col-span-5 ... ">
            <p className="font-[Inter-Regular] text-black font-semibold text-base text-left ">
              {props.shopName}
            </p>
          </div>
          <div className="row-span- col-span-3 ... flex text-left">
            <div className=" text-left ">
              {props.rating}{" "}
              <IonIcon icon={star} className="text-[#22A45D] px-3" />
            </div>
            <div>{props.ratingCount} Ratings</div>
            <div className=" text-right px-3">
              <IonIcon
                icon={ellipse}
                className=" text-[#F3CC30] text-[13.58px] pt-1"
              />{" "}
              {props.amount}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-1 pt-2">
          <div className="col-span-4 ... ">
            {" "}
            <img
              alt="Silhouette of a person's head"
              src="https://as2.ftcdn.net/v2/jpg/02/28/23/91/1000_F_228239110_4eEmhcqbUpZG8y1x1aazFBQMVmbGjoce.jpg"
              className="h-[43px] w-[100%]"
            />
          </div>
          <div className="flex justify-self-center justify-items-center content-around	items-center">
            <div className="bg-[#FFA101] w-[40px] h-[40px] rounded-full text-center	">
              <IonIcon
                icon={bagOutline}
                className=" text-[white] text-[20px] p-2 "
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
