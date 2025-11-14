import { Outlet } from "react-router-dom";

import TopBar from "./TopBar";

const InitialRender = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <TopBar />
      <main className="flex-1 w-full mx-auto px-0 sm:px-0 md:px-0 py-0">
        <Outlet />
      </main>
    </div>
  );
};

export default InitialRender;
