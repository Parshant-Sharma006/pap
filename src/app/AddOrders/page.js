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

export default function AddParcel() {
  const [activeTab, setActiveTab] = useState("forword");

  const [headerSelect, setHeaderSelect] = useState("forward");

  const setHeader = () => {
    setHeaderSelect;
  };

  ///

  const handleOptionChange = (option) => setSelected(option);

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
