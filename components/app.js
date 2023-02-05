import { useState } from "react";
import Banner from "./banner";
import House from "./house";
import HouseList from "./houseList";

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState()
  return (
    <>
      <Banner>
        <p> Providing houses all over the <span>world</span></p>
      </Banner>
      {selectedHouse ? (
        <House house={selectedHouse} />
      ) : (
        <HouseList selectHouse={setSelectedHouse} />
      )}
    </>
  )
}

export default App;