"use client";
import { useState } from "react";
import Image from "next/image";
import { Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { forgotPasswordApi } from "@/redux/userSlice";
import toast from "react-hot-toast";


export default function ForgotPassword() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState([{ value: "", error: "" }]);

  const isValid = () => {
    let result = true;
    console.log(email[0].value);
    if (email[0].value == "") {
      result = false;
    }
    return result;
  };
  const onSubmit = () => {
    if (isValid()) {
      const origin = window.location.origin;
      const obj = {
        email: email[0].value,
        origin: origin,
      };
      const toastId = toast.loading("Loading...");
      dispatch(forgotPasswordApi(obj)).then((res) => {
        console.log(res);
        if (res.success) {
          toast.success("Reset Password Mail Sent", { id: toastId });

        } else {
          toast.error("SomeThing went wrong", { id: toastId });
        }
      });
    }
  };

  return (
    <div className="flex items-center  ">
      <div className="flex justify-between bg-white w-full">
        <div className="hidden md:w-2/5  md:flex justify-center items-start pt-8 pl-8">
          <div>
            <h1 className="font-bold text-4xl">Welcome to ParcelX!</h1>
            <h6>A dashboard to manage all your logistics needs</h6>
          </div>
        </div>
        <div className="w-full md:w-3/5 h-screen flex justify-center items-center bg-[#f5f7fb] p-20">
          <div className="bg-white p-8 w-full max-w-[400px]">
            <Image
              src="/pap-logo.jpg"
              alt="Pap Logo"
              width={150}
              height={150}
              className="mb-6"
            />
            <h2 className="font-bold text-2xl max-w-full">Forgot Password</h2>
            <h6 className="text-gray-500 text-base font-medium">
              Welcome back! Forgot your password.
            </h6>

            <h3 className="pt-5 pb-2 text-lg">Email Address</h3>
            <Input
              type="email"
              placeholder="Enter Email or Username"
              prefix={
                <span className="flex items-center pr-3 mr-3 border-r border-gray-300">
                  <MailOutlined style={{ color: "blue" }} />
                </span>
              }
              className="mb-8 w-full"
              name="email"
              value={email.value}
              onChange={(e) => {
                const emailValue = [...email];
                emailValue[0] = { ...emailValue[0], value: e.target.value };
                setEmail(emailValue);
                console.log("email set", emailValue);
              }}
            />
            <Button
              style={{ background: "#00a303", color: "white" }}
              className=" font-medium w-full h-10 "
              onClick={() => {
                onSubmit();
              }}
            >
              &gt; SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
