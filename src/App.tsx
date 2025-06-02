import { useState } from "react";
import "./App.css";
import DisplayNumber from "./components/Number";

// ready player one
// crypto (2019)

function App() {

  
const [display, setDisplay] = useState<any>("0")

function result () {
   setDisplay(eval(display))
}

function clear () {
  setDisplay("0")
}

  function inputSet(value: any) {
    if(display=="0"){
    setDisplay(value)
  } else {
    setDisplay( display + value)
  }
  }
  

  return (
    <div className="flex min-h-screen  justify-center bg-[#e5d9c7] items-center ">
      <div className="flex  justify-between flex-col border-3 rounded-4xl border-bg-[#6e7163] py-10 px-4 md:px-50 space-y-5 bg-[#472828] text-[#e5d9c7] md:py-40 ">

        <div className="flex justify-between">
          <h1 className="md:text-5xl text-3xl font-mono mt-0 hover:font-extrabold">
            {" "}
            Calculator{" "}
          </h1>
          <button
            type="submit"
            onClick={clear}
            className="border px-4 py-1 border-2 rounded-4xl hover:bg-black text-md font-semibold"
          >
            {" "}
            clear{" "}
          </button>
        </div>

        <input
        onChange={(e)=> setDisplay(e.target.value)}
          type="text" 
          value={display}
          className="md:w-full  w-90 hover:bg-black border rounded-lg md:h-20 h-10 text-2xl md:text-4xl "
        />

        <div className="flex items-center space-4 space-x-4 ">
          <DisplayNumber onclick={inputSet} value={"1"}></DisplayNumber>
          <DisplayNumber onclick={inputSet} value={"2"}></DisplayNumber>
          <DisplayNumber onclick={inputSet} value={"3"}></DisplayNumber>
          <DisplayNumber onclick={inputSet} value={"+"}></DisplayNumber>
          <DisplayNumber onclick={inputSet} value={"/"}></DisplayNumber>
        </div>

        <div className="flex space-4 items-center space-x-4">
          <DisplayNumber onclick={inputSet} value={"4"}></DisplayNumber>
          <DisplayNumber onclick={inputSet} value={"5"}></DisplayNumber>
          <DisplayNumber onclick={inputSet} value={"6"}></DisplayNumber>
          <DisplayNumber onclick={inputSet} value={"-"}></DisplayNumber>
          <DisplayNumber onclick={inputSet} value={"*"}></DisplayNumber>
        </div>
        <div className="flex space-4 space-x-4">
          <DisplayNumber onclick={inputSet} value={"7"}></DisplayNumber>
          <DisplayNumber onclick={inputSet} value={"8"}></DisplayNumber>
          <DisplayNumber onclick={inputSet} value={"9"}></DisplayNumber>
          <DisplayNumber onclick={inputSet} value={"0"}></DisplayNumber>
          <DisplayNumber onclick={result} value={"="}></DisplayNumber>
        </div>

        
      </div>
    </div>
  );
}

export default App;
