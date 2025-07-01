"use client";
import { Button, Input, Steps, Progress, Select } from "antd";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { kycApi, imageApi } from "@/redux/userSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const { Step } = Steps;
const { Option } = Select;
import toast from "react-hot-toast";
import { kycBankDetails } from "@/redux/userSlice";

export default function Kyc() {
  const dispatch = useDispatch();
  const route = useRouter();
  const usersData = useSelector((state) => state?.user?.usersData?.user);
  const { token } = useSelector((state) => {
    return {
      token: state.user.usersData?.token,
    };
  });
  console.log(token, "state---token>");

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  console.log(usersData, "userData");
  let initialForm = {
    entityName: { name: "entityName", value: "", error: "" },
    entityType: { name: "entityType", value: "", error: "" },
    websiteUrl: { name: "websiteUrl", value: "", error: "" },
    email: { name: "email", value: "", error: "" },
    mobileNumber: { name: "mobileNumber", value: "", error: "" },
    billingAddress: { name: "billingAddress", value: "", error: "" },
    zipCode: { name: "zipCode", value: "", error: "" },
    city: { name: "city", value: "", error: "" },
    state: { name: "state", value: "", error: "" },
    aadharNumber: { name: "aadharNumber", value: "", error: "" },
    aadharCardFrontImageURL: {
      name: "aadharCardFrontImageURL",
      value: "",
      error: "",
    },
    aadharCardBackImageURL: {
      name: "aadharCardBackImageURL",
      value: "",
      error: "",
    },
    panNumber: { name: "panNumber", value: "", error: "" },
    panCardImageURL: { name: "panCardImageURL", value: "", error: "" },
    isGST: { name: "isGST", value: "", error: "" },
    gstNumber: { name: "gstNumber", value: "", error: "" },
    gstCertificateLink: { name: "gstCertificateLink", value: "", error: "" },
  };

  let initialForm2 = {
    AccountHolderName: { name: "AccountHolderName", value: "", error: "" },
    AccountType: { name: "AccountType", value: "", error: "" },
    AccountNumber: { name: "AccountNumber", value: "", error: "" },
    ConfirmAccountNumber: {
      name: "ConfirmAccountNumber",
      value: "",
      error: "",
    },
    IfscCode: { name: "IfscCode", value: "", error: "" },
    BankName: { name: "BankName", value: "", error: "" },
    BranchName: { name: "BranchName", value: "", error: "" },
    ChecqueImage: { name: "ChecqueImage", value: "", error: "" },
  };

  const [bankForm, setBankForm] = useState(initialForm2);

  const [form, setForm] = useState(initialForm);

  const onChange = (e) => {
    console.log("value", e.target.value);
    let nameValue = e.target.name;
    let value = e.target.value;
    console.log(nameValue, value, typeof value);

    // let apiCall = [
    //   aadharCardBackImageURL,
    //   aadharCardFrontImageURL,
    //   gstCertificateLink,
    //   ChecqueImage,
    // ];
    let formData = {
      ...form,
      [nameValue]: { ...form[nameValue], value: value },
    };
    console.log(formData);
    setForm(formData);
  };

  const onChangeBank = (e) => {
    let nameValue = e.target.name;
    let value = e.target.value;
    console.log(nameValue, value);
    // let apiCall = [
    //   aadharCardBackImageURL,
    //   aadharCardFrontImageURL,
    //   gstCertificateLink,
    //   ChecqueImage,
    // ];
    let formData = {
      ...bankForm,
      [nameValue]: { ...bankForm[nameValue], value: value },
    };
    setBankForm(formData);
  };

  const onChangeImage = async (e) => {
    console.log(e);
    console.log(e.target.files);
    const file = e.target.files[0];
    console.log(file);
    const name = e.target.name;
    if (!file) {
      alert("No file selected!");
      return;
    }
    const formData = new FormData();
    formData.append("files", file);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      dispatch(imageApi(formData, token)).then((response) => {
        const formData2 = {
          ...form,
          [name]: { ...form[name], value: response.files[0].url },
        };
        console.log(formData2);
        setForm(formData2);
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const onBankChangeImage = async (e) => {
    console.log(e);
    console.log(e.target.files);
    const file = e.target.files[0];
    console.log(file);
    const name = e.target.name;
    if (!file) {
      alert("No file selected!");
      return;
    }
    const formData = new FormData();
    formData.append("files", file);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      dispatch(imageApi(formData, token)).then((response) => {
        const formData2 = {
          ...bankForm,
          [name]: { ...bankForm[name], value: response.files[0].url },
        };
        console.log(formData2);
        setBankForm(formData2);
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const isValid = () => {
    let result = true;

    for (let [key, value] of Object.entries(form)) {
      const errorMessage = validateField(key, value.value);

      if (errorMessage) {
        console.log("msg", key, value);
        setForm((prevState) => ({
          ...prevState,
          [key]: {
            ...prevState[key],
            error: errorMessage, // use error string now
          },
        }));
        result = false;
      } else {
        setForm((prevState) => ({
          ...prevState,
          [key]: {
            ...prevState[key],
            error: "", // clear previous error
          },
        }));
      }
    }

    return result;
  };

  const validateField = (name, value) => {
    if (name == "isGst") {
      if (value == false) {
        return "";
      }
    }
    switch (name) {
      case "entityName":
      case "entityType":
      case "billingAddress":
      case "city":
      case "state":
        return value.trim() === "" ? "This field is required" : "";
      case "websiteUrl":
        return !/^https?:\/\/\S+\.\S+/.test(value) ? "Enter a valid URL" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Enter a valid email"
          : "";
      case "mobileNumber":
        return !/^[0-9]{10}$/.test(value)
          ? "Enter a valid 10-digit mobile number"
          : "";
      case "zipCode":
        return !/^[0-9]{5,6}$/.test(value) ? "Enter a valid ZIP code" : "";
      case "aadharNumber":
        return !/^\d{12}$/.test(value)
          ? "Enter valid 12-digit Aadhar number"
          : "";
      case "panNumber":
        return !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value)
          ? "Enter valid PAN number"
          : "";
      case "gstNumber":
        return !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
          value
        )
          ? "Enter valid GST number"
          : "";
      default:
        return value == "" ? "This field is required" : "";
    }
  };

  const isBankValid = () => {
    let result = true;

    for (let [key, value] of Object.entries(bankForm)) {
      const errorMessage = validateField(key, value.value);

      if (errorMessage) {
        console.log("msg", key, value);
        setBankForm((prevState) => ({
          ...prevState,
          [key]: {
            ...prevState[key],
            error: errorMessage, // use error string now
          },
        }));
        result = false;
      } else {
        setBankForm((prevState) => ({
          ...prevState,
          [key]: {
            ...prevState[key],
            error: "", // clear previous error
          },
        }));
      }
    }

    return result;
  };

  const onSubmit = () => {
    if (isValid()) {
      let payload = {};
      for (let [key, value] of Object.entries(form)) {
        payload[key] = value.value;
      }

      dispatch(kycApi(payload, token)).then((response) => {
        if (response.success) {
          toast.success("Kyc information saved successfully");
          next();
        } else {
          toast.error(response.message);
        }
      });
    } else {
      toast.error("fill the form");
    }
  };

  const onBankSubmit = () => {
    console.log(bankForm, "bankfrom");

    if (isBankValid()) {
      let payload = {};
      for (let [key, value] of Object.entries(bankForm)) {
        payload[key] = value.value;
      }

      dispatch(kycBankDetails(payload, token));
    } else {
      toast.error("fill the form");
    }
  };

  return (
    <>
      <div className="flex flex-row h-screen">
        <div className=" hidden md:w-3/12 md:flex items-center justify-center h-screen ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-4xl">Welcome to ParcelX KYC!</h1>
            <Image src="/kycImage.webp" alt="image" height="240" width="240" />
          </div>
        </div>
        <div className=" w-12/12 md:w-9/12 p-3 overflow-y-auto h-screen bg-gray-100">
          <div>
            <div className="flex justify-between p-7 bg-white rounded-2xl">
              <h1>KYC FORM - ParcelX</h1>
              <Button
                onClick={() => {
                  route.push("/");
                }}
                style={{
                  background: "#00a303",
                  borderRadius: "2px",
                  borderColor: "#00a303",
                }}
              >
                Skip &gt;
              </Button>
            </div>
          </div>

          {/* <div className="flex justify-between p-4 bg-white rounded-2xl">
              <h1>KYC FORM - ParcelX</h1>
              <Button
                style={{
                  background: "#00a303",
                  borderRadius: "2px",
                  borderColor: "#00a303",
                }}
              >
                Skip &gt;
              </Button>
            </div> */}
          <div>
            <div className="p-4">
              {/* Top progress bar */}
              <div className="mb-6">
                {/* Progress Bar */}
                <div className="w-full">
                  <Progress
                    percent={((current + 1) / 2) * 100}
                    showInfo={false}
                    strokeColor="#1890ff"
                  />
                </div>

                {/* Steps - Vertically aligned below the progress */}
                <div className="flex justify-center mt-4">
                  <Steps current={current} direction="horizontal">
                    <Step title="Basic Info" />
                    <Step title="Bank Info" />
                  </Steps>
                </div>
              </div>

              {/* Step Content */}
              <div className="mt-6">
                {current === 0 && (
                  <div>
                    <div>
                      {/* First Row */}
                      <div className="flex flex-row gap-6 mt-4">
                        <div style={{ width: "100%" }}>
                          <p>
                            Entity Name<span className="text-red-700">*</span>
                          </p>
                          <Input
                            onChange={onChange}
                            name={form.entityName.name}
                            value={form.entityName.value}
                            style={{ width: "100%" }}
                          />
                          {form.entityName.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {form.entityName.error}
                            </p>
                          )}
                        </div>
                        <div style={{ width: "100%" }}>
                          <p>
                            Entity Type<span className="text-red-700">*</span>
                          </p>
                          <Select
                            value={
                              form.entityName.value
                                ? "Individual"
                                : form.entityType.value
                            }
                            onChange={(value) => {
                              const formUpdate = {
                                ...form,
                                entityType: {
                                  ...form.isGST,
                                  value: value,
                                },
                              };
                              setForm(formUpdate);
                            }}
                            name={form.entityType.name}
                            style={{ width: "100%" }}
                          >
                            <Option value="Individual">Individual</Option>
                            <Option value="Self-Employment">
                              Self-Employment
                            </Option>
                            <Option value="Proprietership Firm">
                              Proprietership Firm
                            </Option>
                            <Option value="Limited Liability Partnership(LLC)">
                              Limited Liability Partnership(LLC)
                            </Option>
                            <Option value="Private Limited Company">
                              Private Limited Company
                            </Option>
                            <Option value="Pubmic Limited Company">
                              Pubmic Limited Company
                            </Option>
                            <Option value="Partnership Firm">
                              Partnership Firm
                            </Option>
                          </Select>
                          {form.entityType.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {form.entityType.error}
                            </p>
                          )}
                        </div>
                        <div style={{ width: "100%" }}>
                          <p>
                            Website URL<span className="text-red-700">*</span>
                          </p>
                          <Input
                            onChange={onChange}
                            name={form.websiteUrl.name}
                            value={form.websiteUrl.value}
                            style={{ width: "100%" }}
                          />
                          {form.websiteUrl.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {form.websiteUrl.error}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Second Row */}
                      <div className="flex flex-row gap-6 mt-4">
                        <div style={{ width: "28%" }}>
                          <p>
                            Email Address<span className="text-red-700">*</span>
                          </p>
                          <Input
                            onChange={onChange}
                            name={form.email.name}
                            value={form.email.value}
                            style={{ width: "100%" }}
                          />
                          {form.email.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {form.email.error}
                            </p>
                          )}
                        </div>
                        <div style={{ width: "22%" }}>
                          <p>
                            Mobile Number<span className="text-red-700">*</span>
                          </p>
                          <Input
                            maxLength={10}
                            onChange={(e) => {
                              const value = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                              console.log("value", value);
                              onChange({
                                ...e,
                                target: {
                                  ...e.target,
                                  name: form.mobileNumber.name,
                                  value: (value),
                                },
                              });
                            }}
                            name={form.mobileNumber.name}
                            value={form.mobileNumber.value}
                            style={{ width: "100%" }}
                          />
                          {form.mobileNumber.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {form.mobileNumber.error}
                            </p>
                          )}
                        </div>
                        <div style={{ width: "50%" }}>
                          <p>
                            Billing Address
                            <span className="text-red-700">*</span>
                          </p>
                          <Input
                            onChange={onChange}
                            name={form.billingAddress.name}
                            value={form.billingAddress.value}
                            style={{ width: "100%" }}
                          />
                          {form.billingAddress.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {form.billingAddress.error}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Third Row */}
                      <div className="flex flex-row gap-6 mt-4">
                        <div style={{ width: "100%" }}>
                          <p>
                            Enter Zip Code
                            <span className="text-red-700">*</span>
                          </p>
                          <Input
                            onChange={(e) => {
                              if (
                                typeof Number(e.target.value[0]) == "number"
                              ) {
                                onChange({
                                  ...e,
                                  target: {
                                    ...e.target,
                                    value: e.target.value,
                                    name: form.zipCode.name,
                                  },
                                });
                              }
                            }}
                            name={form.zipCode.name}
                            value={form.zipCode.value}
                            style={{ width: "100%" }}
                          />
                          {form.zipCode.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {form.zipCode.error}
                            </p>
                          )}
                        </div>
                        <div style={{ width: "100%" }}>
                          <p>
                            City<span className="text-red-700">*</span>
                          </p>
                          <Input
                            onChange={onChange}
                            name={form.city.name}
                            value={form.city.value}
                            style={{ width: "100%" }}
                          />
                          {form.city.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {form.city.error}
                            </p>
                          )}
                        </div>
                        <div style={{ width: "100%" }}>
                          <p>
                            State<span className="text-red-700">*</span>
                          </p>
                          <Input
                            onChange={onChange}
                            name={form.state.name}
                            value={form.state.value}
                            style={{ width: "100%" }}
                          />
                          {form.state.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {form.state.error}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Fourth Row */}
                      <div className="flex flex-row gap-6 mt-4">
                        <div style={{ width: "100%" }}>
                          <p>
                            Enter Your Aadhar Number
                            <span className="text-red-700">*</span>
                          </p>
                          <Input
                            onChange={onChange}
                            name={form.aadharNumber.name}
                            value={form.aadharNumber.value}
                            style={{ width: "100%" }}
                          />
                          {form.aadharNumber.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {form.aadharNumber.error}
                            </p>
                          )}
                        </div>
                        <div style={{ width: "100%" }}>
                          <p>
                            Upload Your Aadhar Image(front)
                            <span className="text-red-700">*</span>
                          </p>
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={onChangeImage}
                            name={form.aadharCardFrontImageURL.name}
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div style={{ width: "100%" }}>
                          <p>
                            Upload Your Aadhar Image(back)
                            <span className="text-red-700">*</span>
                          </p>
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={onChangeImage}
                            name={form.aadharCardBackImageURL.name}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>

                      {/* Fifth Row */}
                      <div className="flex flex-row gap-6 mt-4">
                        <div style={{ width: "100%" }}>
                          <p>
                            Enter Your PAN Number
                            <span className="text-red-700">*</span>
                          </p>
                          <Input
                            onChange={onChange}
                            name={form.panNumber.name}
                            value={form.panNumber.value}
                            style={{ width: "100%" }}
                          />
                          {form.panNumber.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {form.panNumber.error}
                            </p>
                          )}
                        </div>
                        <div style={{ width: "100%" }}>
                          <p>
                            Upload Your PAN Image
                            <span className="text-red-700">*</span>
                          </p>
                          <Input
                            type="file"
                            onChange={onChangeImage}
                            name={form.panCardImageURL.name}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>

                      {/* Sixth Row */}
                      <div className="flex flex-row gap-6 mt-4">
                        <div style={{ width: "100%" }}>
                          <p>
                            Is GST Available
                            <span className="text-red-700">*</span>
                          </p>
                          <Select
                            value={form.isGST.value ? "true" : "false"}
                            onChange={(value) => {
                              const formUpdate = {
                                ...form,
                                isGST: {
                                  ...form.isGST,
                                  value: value === "true",
                                },
                              };
                              setForm(formUpdate);
                            }}
                            name={form.isGST.name}
                            style={{ width: "100%" }}
                          >
                            <Option value="true">Yes</Option>
                            <Option value="false">No</Option>
                          </Select>
                        </div>
                        {form.isGST.value ? (
                          <>
                            <div style={{ width: "100%" }}>
                              <p>
                                GST Number
                                <span className="text-red-700">*</span>
                              </p>
                              <Input
                                onChange={onChange}
                                name={form.gstNumber.name}
                                value={form.gstNumber.value}
                                style={{ width: "100%" }}
                              />
                              {form.gstNumber.error && (
                                <p className="text-red-500 text-sm mt-1">
                                  {form.gstNumber.error}
                                </p>
                              )}
                            </div>
                            <div style={{ width: "100%" }}>
                              <p>
                                Please Upload Your GST Certificate
                                <span className="text-red-700">*</span>
                              </p>
                              <Input
                                type="file"
                                onChange={onChangeImage}
                                name={form.gstCertificateLink.name}
                                // value={form.gstCertificateLink.value}
                                style={{ width: "100%" }}
                              />
                              {form.gstCertificateLink.error && (
                                <p className="text-red-500 text-sm mt-1">
                                  {form.gstCertificateLink.error}
                                </p>
                              )}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="w-full"></div>
                            <div className="w-full"></div>
                          </>
                        )}
                      </div>

                      <Button className="float-right mt-4" onClick={onSubmit}>
                        Next
                      </Button>
                    </div>
                  </div>
                )}

                {current === 1 && (
                  <div className="mt-14">
                    <div className="mt-14">
                      {/* second */}
                      <div className="flex gap-6 ">
                        <div className="w-full">
                          <h1>
                            Account Holder Name{" "}
                            <span className="text-red-700">*</span>
                          </h1>
                          <Input
                            onChange={(e) => onChangeBank(e)}
                            name={bankForm.AccountHolderName.name}
                            value={bankForm.AccountHolderName.value}
                            style={{ width: "100%" }}
                          />
                          {bankForm.AccountHolderName.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {bankForm.AccountHolderName.error}
                            </p>
                          )}
                        </div>

                        <div className="w-full">
                          <h1>
                            Your Account Type{" "}
                            <span className="text-red-700">*</span>
                          </h1>
                          <Input
                            onChange={(e) => onChangeBank(e)}
                            name={bankForm.AccountType.name}
                            value={bankForm.AccountType.value}
                            style={{ width: "100%" }}
                          />
                          {bankForm.AccountType.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {bankForm.AccountType.error}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-6 ">
                        <div className="w-full">
                          <h1>
                            Account Number{" "}
                            <span className="text-red-600">*</span>
                          </h1>
                          <Input
                            onChange={(e) => onChangeBank(e)}
                            name={bankForm.AccountNumber.name}
                            value={bankForm.AccountNumber.value}
                            style={{ width: "100%" }}
                          />
                          {bankForm.AccountNumber.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {bankForm.AccountNumber.error}
                            </p>
                          )}
                        </div>

                        <div className="w-full">
                          <h1>
                            Confirm Account Number{" "}
                            <span className="text-red-600">*</span>
                          </h1>
                          <Input
                            onChange={(e) => onChangeBank(e)}
                            name={bankForm.ConfirmAccountNumber.name}
                            value={bankForm.ConfirmAccountNumber.value}
                            style={{ width: "100%" }}
                          />
                          {bankForm.ConfirmAccountNumber.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {bankForm.ConfirmAccountNumber.error}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-6 ">
                        <div className="w-full">
                          <h1>
                            IFSC Code <span className="text-red-600">*</span>
                          </h1>
                          <Input
                            onChange={(e) => onChangeBank(e)}
                            name={bankForm.IfscCode.name}
                            value={bankForm.IfscCode.value}
                            style={{ width: "100%" }}
                          />
                          {bankForm.IfscCode.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {bankForm.IfscCode.error}
                            </p>
                          )}
                        </div>

                        <div className="w-full">
                          <h1>
                            Bank Name <span className="text-red-600">*</span>
                          </h1>
                          <Input
                            onChange={(e) => onChangeBank(e)}
                            name={bankForm.BankName.name}
                            value={bankForm.BankName.value}
                            style={{ width: "100%" }}
                          />
                          {bankForm.BankName.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {bankForm.BankName.error}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-6 ">
                        <div className="w-full">
                          <h1>
                            Branch Name <span className="text-red-600">*</span>
                          </h1>
                          <Input
                            onChange={(e) => onChangeBank(e)}
                            name={bankForm.BranchName.name}
                            value={bankForm.BranchName.value}
                            style={{ width: "100%" }}
                          />
                          {bankForm.BranchName.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {bankForm.BranchName.error}
                            </p>
                          )}
                        </div>

                        <div className="w-full">
                          <h1>
                            Please Upload Cancelled Cheque Image{" "}
                            <span className="text-red-600">*</span>
                          </h1>
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => onBankChangeImage(e)}
                            name={bankForm.ChecqueImage.name}
                            style={{ width: "100%" }}
                          />
                          {bankForm.ChecqueImage.error && (
                            <p className="text-red-500 text-sm mt-1">
                              {bankForm.ChecqueImage.error}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button onClick={prev}>Previous</Button>
                      <Button type="primary" onClick={onBankSubmit}>
                        Submit
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
