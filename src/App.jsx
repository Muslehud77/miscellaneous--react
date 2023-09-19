import LineChart from "./components/LineChart/LineChart"
import Phones from "./components/Phones/Phones"

import PriceOptions from "./components/Price-options/PriceOptions"
import SelfMadeNav from "./components/selfMadeNav/selfMadeNav"


function App() {


  return (
    <>
      <SelfMadeNav></SelfMadeNav>
      <div className="container mx-auto">
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
        <Phones></Phones>
      </div>
    </>
  );
}

export default App
