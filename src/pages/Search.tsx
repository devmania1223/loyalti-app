import { IonPage, IonSearchbar } from "@ionic/react";
import StoreCard from "./StoreCard";
const shops = [
  {
    shopImg:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Breakfast-Bread-Bowls_exps168682_SD142780C08_30_1bC_RMS.jpg",
    shopName: " Jonson and Brothers",
    amount: "Points available",
  },
  {
    shopImg:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Breakfast-Bread-Bowls_exps168682_SD142780C08_30_1bC_RMS.jpg",
    shopName: " Jonson and Brothers",
    amount: "Points available",
  },
  {
    shopImg:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Breakfast-Bread-Bowls_exps168682_SD142780C08_30_1bC_RMS.jpg",
    shopName: " Jonson and Brothers",
    amount: "Points available",
  },
  {
    shopImg:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Breakfast-Bread-Bowls_exps168682_SD142780C08_30_1bC_RMS.jpg",
    shopName: " Jonson and Brothers",
    amount: "Points available",
  },
  {
    shopImg:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Breakfast-Bread-Bowls_exps168682_SD142780C08_30_1bC_RMS.jpg",
    shopName: " Jonson and Brothers",
    amount: "Points available",
  },
  {
    shopImg:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Breakfast-Bread-Bowls_exps168682_SD142780C08_30_1bC_RMS.jpg",
    shopName: " Jonson and Brothers",
    amount: "Points available",
  },
  {
    shopImg:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Breakfast-Bread-Bowls_exps168682_SD142780C08_30_1bC_RMS.jpg",
    shopName: " Jonson and Brothers",
    amount: "Points available",
  },
];
function Search() {
  return (
    <IonPage>
      <div className="row-auto">
        <div className="text-[26px]  font-semibold font-black	font-[Inter-Regular] px-7 mt-10">
          Search
        </div>
        <div className=" mx-6 mt-5 ">
          <IonSearchbar
            color="dark"
            className=" rounded-full shadow-none custom-searchbar 	"
            placeholder="Search here"></IonSearchbar>
        </div>

        <div className=" text-[16px] font-black font-medium	font-[Inter-Regular] pt-7 px-7">
          Top Stores
        </div>
        <div className="grid grid-cols-2 gap-6 px-5 pt-4 h-[50vh] store">
          {" "}
          {shops.map(shop => (
            <StoreCard {...shop} />
          ))}
        </div>
      </div>
    </IonPage>
  );
}

export default Search;
