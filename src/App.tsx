import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SidebarFinal from "./scenes/global/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="md:flex">
        <SidebarFinal />

        <div className="flex flex-col items-center w-full">
          <img src={reactLogo} className="my-5 w-24" alt="logo" />
          <p>From Humble Beginnings</p>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal m-5"
            type="email"
            placeholder="jane@example.com"
          ></input>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          </div>
      </div>
    </>
  );
}

export default App;
