import { App } from "@capacitor/app";
import {
  IonContent,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonModal
} from "@ionic/react";
import { barcodeOutline, ellipse } from "ionicons/icons";
import Lottie from "lottie-react";
import React, { useContext, useEffect, useState, useRef } from "react";
import noTasks from "../lotties/noTasks.json";
import { TasksContext } from "../utils/contexts/TasksContext";
import "../App.css";
import ShopCard from "./ShopCard";
import ScanQR from "./ScanQR";

const Home: React.FC = () => {
  const { state, dispatch } = useContext(TasksContext);
  const [buttonActive, setButtonActive] = useState("All");
  useEffect(() => {
    App.addListener("backButton", () => {
      App.minimizeApp();
    });
  }, []);
  const handleOnClick = (e: any) => {
    setButtonActive("");
    setButtonActive(e.target.id);
    console.log(buttonActive);
  };
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }
  const shops = [
    {
      shopImg:
        "https://i.guim.co.uk/img/media/fc4f7a0a365afbbd984f73000899ed1819bdc19e/0_1_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=dfa4446ebe9fdf4d1f21a5279b9f9945",
      shopName: " Jonson and Brothers",
      rating: "4.3",
      ratingCount: "200+",
      amount: "2050",
      barcodeImg:
        "https://as2.ftcdn.net/v2/jpg/02/28/23/91/1000_F_228239110_4eEmhcqbUpZG8y1x1aazFBQMVmbGjoce.jpg",
    },
    {
      shopImg:
        "https://cdn.oliverbonacininetwork.com/uploads/sites/42/2022/04/Canoe-Interior-Evening-Vibes-5170.jpg",
      shopName: " Daily shop ltd.",
      rating: "4.3",
      ratingCount: "200+",
      amount: "2050",
      barcodeImg:
        "https://as2.ftcdn.net/v2/jpg/02/28/23/91/1000_F_228239110_4eEmhcqbUpZG8y1x1aazFBQMVmbGjoce.jpg",
    },
    {
      shopImg:
        "https://cdn.oliverbonacininetwork.com/uploads/sites/42/2022/04/Canoe-Interior-Evening-Vibes-5170.jpg",
      shopName: " Daily shop ltd.",
      rating: "4.3",
      ratingCount: "200+",
      amount: "2050",
      barcodeImg:
        "https://as2.ftcdn.net/v2/jpg/02/28/23/91/1000_F_228239110_4eEmhcqbUpZG8y1x1aazFBQMVmbGjoce.jpg",
    },
  ];

  const category = ["All", "Category 1", "Category 2", "Category 3"];
  const NoTasks: React.FC = () => (
    <div className="font-sans text-center md:my-10">
      <Lottie animationData={noTasks} className="h-96" />
      <h1 className="mt-4 font-black text-3xl">No Shops</h1>
    </div>
  );

  return (
    <IonPage>
      <div >
        {shops.length ? (
          <div className="h-full w-full ">
            <div className="fixed...">
            <div className="shrink-0 flex justify-between ">
              <div className="flex">
                <img
                  className="h-16 w-16 p-[10px] object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                  alt="Current profile photo"
                />
                <div className="block">
                  <p className="text-[12px] font-[Inter-Regular] pt-3 pl-1	text-[#5A5761]">
                    Good morning
                  </p>
                  <select
                    name="cars"
                    id="cars"
                    className="text-[14px] font-black  font-medium	font-[Inter-Regular] drop">
                    <option value="volvo">200 W 57th St</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className=" py-5 text-right px-4  flex">
                <div className=" text-right text-[16px] font-black  font-medium	font-[Inter-Regular] ">
                  200{" "}
                </div>
                <div>
                  <IonIcon icon={ellipse} className="primary-color pt-1" />
                </div>
                <div>
                  {" "}
                  <button id="open-modal" >
                    <IonIcon icon={barcodeOutline} className="home text-2xl" />
                  </button>
                </div>
              </div>
            </div>
            <div className="py-[1] mt-1 mx-3 ">
              <IonSearchbar
                color="dark"
                className=" rounded-full shadow-none custom-searchbar 	"
                placeholder="Search here"></IonSearchbar>
            </div>
            
            <div className="grid grid-flow-col auto-cols-max pt-5 pl-3 category-button-div">
              {category.map((category, index) => (
                <button
                  key={category}
                  className={
                    buttonActive === category
                      ? "category-selected category-button"
                      : "category-button"
                  }
                  id={category}
                  onClick={handleOnClick}>
                  {category}
                </button>
              ))}
            </div ></div>
            <div className="mb-55 shop">
            {shops.map(shop => (
              <ShopCard {...shop} />
            ))}
          </div>
          <div className="h-[50px] fixed.."></div>
          </div>
        ) : (<NoTasks />
        )}
        <IonModal
          ref={modal}
          trigger="open-modal"
          initialBreakpoint={0.93}
          breakpoints={[0, 0.25, 0.5, 0.75]}>
          <IonContent className="ion-padding">
            <ScanQR />
          </IonContent>
        </IonModal>
      </div>
    </IonPage>
  );
};

export default Home;
