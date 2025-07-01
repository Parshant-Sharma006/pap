"use client";
import { Input, Select, Button } from "antd";
const { Option } = Select;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faUser,
  faMobileAlt,
  faEnvelope,
  faBagShopping,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons";
import { signupApi, userSuccess, userFailure } from "@/redux/userSlice";
// import { userSuccess } from "../../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();

  let initialForm = {
    name: { name: "name", value: "", error: "" },
    email: { name: "email", value: "", error: "" },
    password: { name: "password", value: "", error: "" },
    mobileNumber: { name: "mobileNumber", value: "", error: "" },
    companyName: { name: "companyName", value: "", error: "" },
    businessType: { name: "businessType", value: "", error: "" },
    monthlyOrder: { name: "monthlyOrder", value: "", error: "" },
    role: { name: "role", value: "User", error: "" },
  };

  const [form, setFrom] = useState(initialForm);

  const onChange = (e) => {
    let nameValue = e.target.name;
    let value = e.target.value;
    console.log(nameValue, value);
    let newForm = {
      ...form,
      [nameValue]: { ...form[nameValue], value: value },
    };
    setFrom(newForm);
  };

  function isValid() {
    let formValue = form;
    let result = true;
    console.log(formValue);
    for (let [key, value] of Object.entries(formValue)) {
      console.log(key, value);
      if (value.value === "") {
        value.error = true;
        result = false;
      } else {
        value.error = false;
      }
    }

    return result;
  }

  const onSubmit = () => {
    if (isValid()) {
      console.log(isValid);
      let payload = {};
      for (let [key, value] of Object.entries(form)) {
        payload[key] = value.value;
      }
      console.log(payload);
      dispatch(signupApi(payload)).then((response) => {
        if (response.success) {
          dispatch(userSuccess(response.data));
          router.push("/kyc");
          toast.success("SignUp and Login Successfully");
        } else {
          dispatch(userFailure(response));
          if (response.message == "Validation failed") {
            response.errors.map((item) => {
              return toast.error(item.message);
            });
          } else {
            toast.error(response.message);
          }
        }
      });
    } else {
      toast.error("fill the form");
    }
  };

  return (
    <div className="flex">
      <div className="signup-text w-2/5 flex flex-col justify-center bg-[#00a303] p-8">
        <h1 className="font-bold text-4xl text-white">
          An <span className="text-[#3148ac]">end-to-end logistics</span>{" "}
          platform for faster e-commerce shipping
        </h1>
        <h3 className="pt-8 pb-2 text-white">Automated Shipping</h3>
        <h3 className="pb-2 text-white">26000+ pin-codes in India</h3>
        <h3 className="pb-2 text-white">200+ countries worldwide</h3>
        <h2 className="pb-2 text-white">TRUSTED BY 25K + SELLERS</h2>
      </div>

      <div className="signup-form flex justify-center bg-[#f5f7fb]">
        <div className="w-7/10 p-8 bg-white">
          <h3 className="text-center font-bold text-2xl">
            Welcome! Sign up to your account.
          </h3>

          <h3 className="signup-label pt-8">Name</h3>
          <Input
            placeholder="Enter Name"
            className="signup-input mb-6"
            prefix={
              <span className="flex items-center gap-2 pr-2 mr-2 border-r border-gray-300 text-[#00a303]">
                <FontAwesomeIcon icon={faUser} />
              </span>
            }
            name="name"
            value={form.name.value}
            onChange={(e) => onChange(e)}
          />

          <h3 className="signup-label">Company Name</h3>
          <Input
            placeholder="Enter Company Name"
            className="signup-input mb-6"
            prefix={
              <span className="flex items-center gap-2 pr-2 mr-2 border-r border-gray-300 text-[#00a303]">
                <FontAwesomeIcon icon={faCity} />
              </span>
            }
            name="companyName"
            value={form.companyName.value}
            onChange={(e) => onChange(e)}
          />

          <h3 className="signup-label">Mobile Number</h3>
          <Input
            placeholder="Enter Mobile Number"
            className="signup-input mb-6"
            prefix={
              <span className="flex items-center gap-2 pr-2 mr-2 border-r border-gray-300 text-[#00a303]">
                <FontAwesomeIcon icon={faMobileAlt} />
              </span>
            }
            name="mobileNumber"
            value={form.mobileNumber.value}
            onChange={(e) => onChange(e)}
          />

          <h3 className="signup-label">Email Address</h3>
          <Input
            placeholder="Enter Email Address"
            className="signup-input mb-6"
            prefix={
              <span className="flex items-center gap-2 pr-2 mr-2 border-r border-gray-300 text-[#00a303]">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            }
            name="email"
            value={form.email.value}
            onChange={(e) => onChange(e)}
          />
          <h3 className="signup-label">Password</h3>
          <Input
            placeholder="Enter Password"
            className="signup-input mb-6"
            prefix={
              <span className="flex items-center gap-2 pr-2 mr-2 border-r border-gray-300 text-[#00a303]">
                <FontAwesomeIcon icon={faUser} />
              </span>
            }
            name="password"
            value={form.password.value}
            onChange={(e) => onChange(e)}
          />

          <h3 className="signup-label">Monthly Order</h3>
          <Select
            style={{ width: "100%" }}
            placeholder="Choose"
            className="signup-input mb-6"
            prefix={
              <span className="flex items-center gap-2 pr-2 mr-2 border-r border-gray-300 text-[#00a303]">
                <FontAwesomeIcon icon={faBagShopping} />
              </span>
            }
            name="monthlyOrder"
            value={form.monthlyOrder.value}
            onChange={(value) =>
              onChange({ target: { name: "monthlyOrder", value } })
            }
          >
            <Option value="100">0-100</Option>
            <Option value="300">100-300</Option>
            <Option value="1000">300-1000</Option>
            <Option value="5000">1000-5000</Option>
            {/* <Option value="More Than 5000">More Than 5000</Option> */}
          </Select>

          <h3 className="signup-label">Business Type</h3>
          <Select
            className="signup-input mb-6"
            style={{ width: "100%" }}
            placeholder="Choose"
            prefix={
              <span className="flex items-center gap-2 pr-2 mr-2 border-r border-gray-300 text-[#00a303]">
                <FontAwesomeIcon icon={faStoreAlt} />
              </span>
            }
            name="businessType"
            value={form.businessType.value}
            onChange={(value) =>
              onChange({ target: { name: "businessType", value } })
            }
          >
            <Option value="Retailer">Retailer</Option>
            <Option value="Ecommerce">E-commerce</Option>
            <Option value="Franchise">Franchise</Option>
          </Select>

          <Button
            style={{ background: "#00a303" }}
            className="w-full  text-white h-10 border-none"
            onClick={() => onSubmit()}
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </div>
  );
}
