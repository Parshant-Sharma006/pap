"use client";
import { Input, Button } from "antd";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loginApi, userFailure } from "@/redux/userSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const initialForm = {
    email: { name: "email", value: "", error: "" },
    password: { name: "password", value: "", error: "" },
  };

  const [form, setForm] = useState(initialForm);

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    const formValue = {
      ...form,
      [e.target.name]: {
        ...[e.target.name][e.target.name],
        value: e.target.value,
      },
      error: false,
    };
    setForm(formValue);
  };

  const isValid = () => {
    let result = true;

    for (let [key, value] of Object.entries(form)) {
      if (value.value == "") {
        result = false;
      }
    }
    return result;
  };
  const onSubmit = async () => {
    if (isValid()) {
      let payload = {};
      for (let [key, value] of Object.entries(form)) {
        payload = { ...payload, [key]: value.value };
      }

      try {
        console.log(payload, "payload--->");
        dispatch(loginApi(payload)).then((response) => {
          if (response.success) {
            console.log(response, "res");
            window.localStorage.setItem("token", response.data.token);
            router.push("/app/Dashboard");
            toast.success("Logined Successfully");
          } else {
            toast.error(`${response.message}`);
          }
        });
      } catch (error) {
        dispatch(userFailure(error));
      }
    } else {
      toast.error("fill the form");
    }
  };

  return (
    <div className="bg-white flex  justify-center items-center ">
      <div className="relative flex flex-col , md:flex-row md:justify-center justify-between gap-8 sm:w-full lg:w-11/12 max-w-7xl sm:px-1 lg:px-0">
        {/* Logo Background */}
        <div className="absolute inset-0 mt-[-50px] hidden md:block ">
          <Image
            src="/logo-image.png"
            alt="Pap Logo"
            width={600}
            height={600}
          />
        </div>

        {/* Left Side Content */}
        <div className="flex flex-col justify-between md:w-1/2 w-3/4">
          <h2 className="pt-16">
            <Image
              src="/Gaurav_Express_Logo_with_bg.jpg"
              alt="Pap Logo"
              width={150}
              height={150}
              className="rotating-image"
            />
          </h2>
          <div className="z-10 hidden md:block">
            <h2 className="text-5xl font-bold">Shipping is now</h2>
            <h2 className="text-5xl text-blue-600 font-bold">
              smarter & easier
            </h2>
            <h4>A dashboard to manage</h4>
            <h4>all your logistics needs</h4>
          </div>
        </div>

        {/* Right Side Login Form */}
        <div
          className="justify-items-center w-full md:w-1/2 z-10"
          // tabIndex={0}
          onKeyDown={(e) => {
            console.log(e.key);
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
        >
          <div>
            <h1 className="text-3xl text-[#3149AD] font-bold md:mt-16 mt-0 mb-4 text-center">
              Login
            </h1>
            <h3 className="text-lg text-gray-500 font-semibold mb-6 text-center">
              Welcome back! Log in to your account.
            </h3>

            {/* Email Input */}
            <Input
              style={{
                marginBottom: "10px",
                borderColor: `${form.email.error}` == true ? "red" : "",
              }}
              name="email"
              placeholder="Enter Email or Username"
              className="mb-4 h-16 bg-[#ebf0f6] text-gray-500"
              onChange={(e) => onChange(e)}
              value={form.email.value}
            />
            {/* Password Input */}
            <Input
              style={{
                borderColor: `${form.password.error}` == true ? "red" : "",
              }}
              placeholder="*******"
              type="password"
              className="mb-4 h-16 bg-[#ebf0f6] text-gray-500"
              onChange={(e) => onChange(e)}
              name="password"
              value={form.password.value}
            />

            {/* Forgot Password Link */}
            <div className="flex justify-end w-full mt-4 text-sm ">
              <Link href="/forgot-password" className="text-blue-400 mb-10">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="primary"
              className="flex w-full bg-[#3149AD] text-white h-12 border-none"
              onClick={() => {
                onSubmit();
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
