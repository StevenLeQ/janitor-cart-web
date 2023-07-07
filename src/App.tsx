import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SidebarFinal from "./scenes/global/Sidebar";
import Dashboard from "./scenes/pages/dashboard";
function App() {
  const [count, setCount] = useState(0);

  return (
    // Span entier screen
    <>
      <div className="md:flex h-screen w-screen">
        <SidebarFinal />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
