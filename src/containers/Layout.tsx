import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="bg-[#DAF7A6] h-full">
      <Header />
      <Outlet />
    </div>
  );
}
