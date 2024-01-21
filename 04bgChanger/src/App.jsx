import { useState } from "react";
import "./App.css";

function App() {
  const [bg, setBg] = useState("olive");

  /* const changeColor = (color) => {
    setBg(color);
  };*/

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bg }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl">
          <button
            onClick={() => setBg("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-red-500"
          >
            Red
          </button>
          <button
            onClick={() => setBg("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-green-500"
          >
            Green
          </button>
          <button
            onClick={() => setBg("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg  text-white bg-blue-500"
          >
            Blue
          </button>
          <button
            onClick={() => setBg("pink")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-pink-500"
          >
            Pink
          </button>
          <button
            onClick={() => setBg("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white bg-yellow-500"
          >
            Yellow
          </button>
          <button
            onClick={() => setBg("black")}
            className="outline-none px-4 py-1 rounded-full shadow-lg  text-white bg-black"
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
