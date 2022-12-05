import React, { useRef } from "react";
import { IonIcon } from "@ionic/react";
import { barcode } from "ionicons/icons";

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <div className="row-auto">
      <div className="text-center pt-[11vh] ">
        {" "}
        <IonIcon
          icon={barcode}
          className="   text-[#342EAA]  text-[90px] text-center"
        />
      </div>
      <div className="text-center text-[22px]  font-bold	font-[Inter-Regular] py-7">
        Scan OR code
      </div>
      <div className="text-center ">
        <p className="px-[28px] text-[14px] font-black  font-normal	font-[Inter-Regular] text-[#5E5E5E] ">
          Sodales pellentesque morbi arcu id. Netus feugiat velit iaculis
          egestas malesuada viverra sit
        </p>
      </div>
      <div className="text-center pt-16 ">
        <img
          className="px-[38px]  h-[90px] w-[381px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOp3SQhq1mO5vlGalE-hPdwi_EVGfnNV6zw&usqp=CAU"
          alt="Current profile photo"
        />
      </div>
    </div>
  );
}

export default Example;
