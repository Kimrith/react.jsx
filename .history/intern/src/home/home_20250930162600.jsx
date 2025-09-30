import Footer from "./footer";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function home() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
