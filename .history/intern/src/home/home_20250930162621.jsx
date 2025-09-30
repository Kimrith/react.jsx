import Footer from "./footer";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
