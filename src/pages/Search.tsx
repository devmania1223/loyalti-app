import {  IonSearchbar } from "@ionic/react";
import StoreCard from "./StoreCard";
const shops = [
  {
    shopImg:
      "https://i.guim.co.uk/img/media/fc4f7a0a365afbbd984f73000899ed1819bdc19e/0_1_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=dfa4446ebe9fdf4d1f21a5279b9f9945",
    shopName: " Jonson and Brothers",
    amount: "Points available",
  },
  {
    shopImg:
      "https://i.guim.co.uk/img/media/fc4f7a0a365afbbd984f73000899ed1819bdc19e/0_1_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=dfa4446ebe9fdf4d1f21a5279b9f9945",
    shopName: " Jonson and Brothers",
    amount: "Points available",
  },
  {
    shopImg:
      "https://i.guim.co.uk/img/media/fc4f7a0a365afbbd984f73000899ed1819bdc19e/0_1_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=dfa4446ebe9fdf4d1f21a5279b9f9945",
    shopName: " Jonson and Brothers",
    amount: "Points available",
  },
  {
    shopImg:
      "https://i.guim.co.uk/img/media/fc4f7a0a365afbbd984f73000899ed1819bdc19e/0_1_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=dfa4446ebe9fdf4d1f21a5279b9f9945",
    shopName: " Jonson and Brothers",
    amount: "Points available",
  },
  {
    shopImg:
      "https://i.guim.co.uk/img/media/fc4f7a0a365afbbd984f73000899ed1819bdc19e/0_1_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=dfa4446ebe9fdf4d1f21a5279b9f9945",
    shopName: " Jonson and Brothers",
    amount: "Points available",
  },
  {
    shopImg:
      "https://i.guim.co.uk/img/media/fc4f7a0a365afbbd984f73000899ed1819bdc19e/0_1_3000_1800/master/3000.jpg?width=1200&quality=85&auto=format&fit=max&s=dfa4446ebe9fdf4d1f21a5279b9f9945",
    shopName: " Jonson and Brothers",
    amount: "Points available",
  },
];
function Search() {

  return (
    <div className="row-auto">
      <div className="text-[26px]  font-semibold font-black	font-[Inter-Regular] px-7 mt-7">
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
      <div className="grid grid-cols-2 gap-6 px-5 pt-4">
        {" "}
        {shops.map(shop => (
          <StoreCard {...shop} />
        ))}
      </div>
    </div>
  );
}

export default Search;
