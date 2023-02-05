import { useEffect, useState } from "react";
import HouseRow from "./houseRow";

// const houseArray = [
//   {
//     id: 1,
//     address: "12 Valley of Kings, Geneva",
//     country: "Switzerland",
//     price: 900000,
//   },
//   {
//     id: 2,
//     address: "89 Road of Forks, Bern",
//     country: "Switzerland",
//     price: 500000,
//   },
// ];

const HouseList = () => {
  const [houses, setHouses] = useState([])
  // const [counter, setCounter] = useState(0)
  // const increment = () => setCounter(counter + 1)

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch('/api/houses');
      const houses = await response.json()
      setHouses(houses)
    }
    fetchHouses();
  })

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: 3,
        address: '32 Valley Way, New York',
        country: 'USA',
        price: 1000000,
      }
    ])
  }
  return (
    <>
      {/* {counter} */}
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map(h => <HouseRow key={h.id} house={h} /> )}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
      {/* <button className="btn btn-primary" onClick={increment}>
        count
      </button> */}
    </>
  )
}

export default HouseList;