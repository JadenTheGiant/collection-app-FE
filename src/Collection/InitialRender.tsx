import { Outlet } from "react-router-dom";


const InitialRender = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default InitialRender;
