import { useState } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import loadingStatus from "../helpers/loadingStatus";
import useBids from "../hooks/useBids";
import LoadingIndicator from "./loadingIndicator";

const BidList = ({ bids }) => {
  // const { bids, loadingState, addBid } = useBids(house.id);

  // const emptyBid = {
  //   houseId: house.id,
  //   bidder: "",
  //   amount: 0,
  // };

  // const [newBid, setNewBid] = useState(emptyBid);

  // if (loadingState !== loadingStatus.loaded)
  //   return <LoadingIndicator loadingState={loadingState} />;

  // const onBidSubmitClick = () => {
  //   addBid(newBid);
  //   setNewBid(emptyBid);
  // };

  return (
    <div className="row mt-4">
      <div className="col-12">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Bidder</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((b) => (
              <tr key={b.id}>
                <td>{b.bidder}</td>
                <td>{currencyFormatter.format(b.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidList;
