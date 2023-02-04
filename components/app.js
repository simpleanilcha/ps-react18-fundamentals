import Banner from "./banner";
import HouseList from "./houseList";

const App = () => {
  const jsx = <div>Hello React and Next js</div>
  return (
    <>
      <Banner>
        <p> Providing houses all over the <span>world</span></p>
      </Banner>
      <HouseList />
    </>
  )
}

export default App;