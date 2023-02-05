import { useCallback, useState } from "react";
import Banner from "./banner";
import House from "./house";
import HouseList from "./houseList";

const App = () => {
  const [selectedHouse, setSelectedHouse] = useState()

  const setSelectedHouseWrapper = useCallback((house) => {
    setSelectedHouse(house)
  }, [])

  return (
    <>
      <Banner>
        <p> Providing houses all over the <span>world</span></p>
      </Banner>
      {selectedHouse ? (
        <House house={selectedHouse} />
      ) : (
        <HouseList selectHouse={setSelectedHouseWrapper} />
      )}
    </>
  )
}

export default App;