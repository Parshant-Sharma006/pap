/** @format */

"use client";

import { Button, Select, Switch, Input, Steps } from "antd";
import { useState } from "react";
import { Checkbox } from "antd";
import ReverseOrder from "@/Components/addParcel/reverseOrder";
import Forword from "@/Components/addParcel/forward";
const { Option } = Select;
const { Step } = Steps;
import Warehouse from "@/Components/addParcel/Warehouse";
import { Sidebar } from "@/Components/CommonDashBoard/Sidebar";
import { Navbar } from "@/Components/CommonDashBoard/Sidebar";
import { useEffect } from "react";


export default function AddParcel() {
  const [activeTab, setActiveTab] = useState("forword");

  const [headerSelect, setHeaderSelect] = useState("forward");

  const setHeader = () => {
    setHeaderSelect;
  };

  ///

  const handleOptionChange = (option) => setSelected(option);

   const [value, setValue] = useState("");
  
    useEffect(() => {
      const value = document.cookie;
      setValue(value);
    }, []);
    const getCookie = (name) => {
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };
  
    const token = getCookie("token");

  return (
    <>
      <div className="flex flex-row m-2">
        <Button
          type="link"
          style={{
            color: activeTab === "forword" ? "#1890ff" : "#000", // blue if active, black otherwise
            fontWeight: activeTab === "forword" ? "bold" : "normal", // optional for visual cue
          }}
          onClick={() => setActiveTab("forword")}
        >
          Forword
        </Button>
        <Button
          type="link"
          style={{
            color: activeTab === "reverse" ? "#1890ff" : "#000", // blue if active, black otherwise
            fontWeight: activeTab === "reverse" ? "bold" : "normal", // optional for visual cue
          }}
          onClick={() => setActiveTab("reverse")}
        >
          Reverse{" "}
        </Button>
      </div>

      {activeTab === "forword" ? <Forword /> : <ReverseOrder />}
      <Warehouse />
    </>
  );
}
