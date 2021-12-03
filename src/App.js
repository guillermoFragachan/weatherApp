import SearchBox from "./components/SearchBox";
import React from "react";
import DisplayToday from "./components/DisplayToday";
import DsiplayNextDays from "./components/DisplayNextDays";

function App() {
  return (
    <div >
      <SearchBox/>
      <DisplayToday/>
      <DsiplayNextDays/>
    
    </div>
  );
}

export default App;
