import loadingStatus from "@/helpers/loadingStatus";
import useBids from "@/hooks/useBids";
import Image from "next/image";
import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import defaultPhoto from "../helpers/defaultPhoto";
import AddBid from "./addBid";
import { navigationContext } from "./app";
import BidList from "./bidList";
import LoadingIndicator from "./loadingIndicator";

const House = () => {
  const { param: house } = useContext(navigationContext)
  const { bids, loadingState, addBid } = useBids(house.id)
  
  if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />;
  
  const houseImg = house.photo ? `/houseImages/${house.photo}.jpeg` : defaultPhoto
  console.log(houseImg)

  return (
    <div className="row">
      <div className="col-6">
        <div className="row">
          <Image
            className="img-fluid"
            src={houseImg}
            alt="House pic"
            width="500"
            height='100'
          />
          {/* <img
            className="img-fluid"
            src={
              house.photo ? `./houseImages/${house.photo}.jpeg` : defaultPhoto
            }
            alt="House pic"
          /> */}
        </div>
      </div>
      <div className="col-6">
        <div className="row mt-2">
          <h5 className="col-12">{house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-12">{house.address}</h3>
        </div>
        <div className="row">
          <h2 className="themeFontColor col-12">
            {currencyFormatter.format(house.price)}
          </h2>
        </div>
        <div className="row">
          <div className="col-12 mt-3">{house.description}</div>
        </div>
      </div>
      <BidList bids={bids} />
      <AddBid house={house} addBid={addBid} />
    </div>
  );
};

export default House;
