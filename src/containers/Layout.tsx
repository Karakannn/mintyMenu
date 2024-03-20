import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="bg-[#fff8e9]/80 h-full overflow-auto">
      <Header />
      <Outlet />
    </div>
  );
}
