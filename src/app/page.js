"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CustomerPannel from "@/Components/CustomerPannel/page";
import { Provider } from "react-redux";
import store from "./../redux/store";

export default function Home() {
  const route = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // route.replace("/login");
    }
  }, [route]);
  return (
    <div>
      <CustomerPannel />
    </div>
  );
}



