import { useState } from "react";
import "./App.css";
import HeaderMain from "./Components/Headers/HeaderMain";
import Banner from "./Components/banners/Banner";
import Box from "./Components/Box/Box";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
         <HeaderMain/>
        <Banner/>
        <Box/>
  
        
    </>
  );
}
export default App;
