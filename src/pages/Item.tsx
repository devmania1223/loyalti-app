import { IonCard, IonIcon } from "@ionic/react";
import { add, ellipse } from "ionicons/icons";

function Item(props: any) {
  return (
    <IonCard className="item-card">
      <div className=" h-[110px]">
        <div className="grid grid-rows-1 grid-cols-6 ">
          <div className=" row-span-1 col-span-2 ... ">
            {" "}
            <div>
              <div>
                <img
                  className="h-[110px] w-[110px] rounded-md"
                  alt="Silhouette of mountains"
                  src={props.shopImg}
                />

                <div className=" text-right  flex item-bottom-right ">
                  <div className=" text-[#000000] text-[16px] ">
                    {" "}
                    <IonIcon icon={add} />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className=" row-span-1 col-span-4 ...  pl-1">
              <div className="font-[Inter-Regular] text-[#000000] font-medium  text-[18px] text-left ">
                {props.shopName}
              </div>
              <div className="font-[Inter-Regular] text-[#5A5761] font-medium  text-[16px] text-left h-16   ">
                Shortbread, chocolate turtle cookies, and red velvet.
              </div>
            <div className="  flex text-left ">
              <div className="flex text-[14px] pr-16 ">
                {" "}
                <div className=" text-[#F7DB5E]  pt-[2px] pr-1">
                  {" "}
                  <IonIcon icon={ellipse} />
                </div>{" "}
                <div className="font-[Inter-Regular] text-[#2E2A36] text-[14px] font-semibold"> {props.coints}</div>
                <div className="font-[Inter-Regular] text-[#5A5761] text-[10px] font-normal pt-1 pl-2"> (1=.2$)</div>

              </div>

              <div className=" text-right px-3 text-[#22A45D] font-[Inter-Regular] text-[14px] font-normal col-span-1">
                {props.amount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonCard>
  );
}
export default Item;
