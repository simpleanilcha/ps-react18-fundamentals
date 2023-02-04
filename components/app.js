import Banner from "./banner";

const App = () => {
  const jsx = <div>Hello React and Next js</div>
  return (
    <Banner>
      <div>
        {jsx}
        Providing houses all over the <span>world</span>
      </div>
    </Banner>
  )
}

export default App;