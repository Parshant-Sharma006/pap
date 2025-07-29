"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CustomerPannel from "@/Components/CustomerPannel/page";
import { Provider } from "react-redux";
import store from "./../redux/store";
import Header from "@/Components/CommonDashBoard/header";
import HeroSection from "@/Components/Dashboard";
import Footer from "@/Components/CommonDashBoard/footer";

export default function Home() {
  const route = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // route.replace("/login");
    }
  }, [route]);
  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
}
