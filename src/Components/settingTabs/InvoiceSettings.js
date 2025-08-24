/** @format */

import { useState } from "react";

export default function InvoiceSettings() {
  const [addressType, setAddressType] = useState("registration");
  const [logo, setLogo] = useState(null);
  const [signature, setSignature] = useState(null);
  const [hideLogo, setHideLogo] = useState(false);
  const [hideSignature, setHideSignature] = useState(false);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setLogo(URL.createObjectURL(file));
  };

  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (file) setSignature(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white p-8 gap-8">
      {/* Left controls */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Address Selection */}
        <div className="flex items-center gap-8">
          <label className="flex items-center gap-2 text-lg">
            <input
              type="radio"
              name="addressType"
              value="registration"
              checked={addressType === "registration"}
              onChange={() => setAddressType("registration")}
              className="accent-blue-600"
            />
            Registration Address
          </label>
          <label className="flex items-center gap-2 text-lg">
            <input
              type="radio"
              name="addressType"
              value="warehouse"
              checked={addressType === "warehouse"}
              onChange={() => setAddressType("warehouse")}
              className="accent-blue-600"
            />
            Warehouse Address
          </label>
        </div>

        {/* Hide toggles */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-gray-800">
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input
                  type="checkbox"
                  checked={hideLogo}
                  onChange={() => setHideLogo(!hideLogo)}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <div className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></div>
              </div>
              Hide Invoice logo
            </label>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-gray-800">
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input
                  type="checkbox"
                  checked={hideSignature}
                  onChange={() => setHideSignature(!hideSignature)}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <div className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></div>
              </div>
              Hide invoice signature
            </label>
          </div>
        </div>

        {/* Uploads */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-gray-700">
              Display Logo (png, jpg, jpeg)
            </p>
            <label className="flex items-center gap-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="border border-dashed border-blue-400 p-2 rounded w-full"
              />
            </label>
          
          </div>

          <div className="flex flex-col space-y-2">
            <p className="text-sm text-gray-700">
              Upload signature (png, jpg, jpeg)
            </p>
            <label className="flex items-center gap-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleSignatureUpload}
                className="border border-dashed border-blue-400 p-2 rounded w-full"
              />
            </label>
          
          </div>
        </div>
      </div>

      {/* Right preview */}
      <div className="w-full md:w-1/2 border p-6 bg-gray-50 rounded-md shadow">
        <h2 className="font-semibold mb-4">Invoice Preview</h2>

        <div className="space-y-2">
          {!hideLogo && logo && (
            <img src={logo} alt="Logo" className="h-16 mb-4" />
          )}

          <h3 className="font-bold uppercase text-gray-700">
            GAURAV EXPRESS LOGISTIC SERVICES
          </h3>

          <p className="font-bold">From:</p>
          <p>
            {addressType === "registration"
              ? "GAURAV EXPRESS FARIDABAD\nHARYANA, India."
              : "WAREHOUSE EXPRESS FARIDABAD\nHARYANA, India."}
          </p>

          <p className="mt-2">
            <span className="font-bold">State:</span> HARYANA
          </p>
          <p>
            <span className="font-bold">Phone:</span> 8800894013
          </p>
          <p>
            <span className="font-bold">Email:</span> SharmaKp995@gmail.com
          </p>

          <div className="border-t pt-4">
            <p className="font-bold">Bill To:</p>
            <p>GAURAV EXPRESS FARIDABAD, HARYANA, India</p>
            <p className="font-bold">Ship To:</p>
            <p>- , India</p>
          </div>

          <p className="font-bold">Authorized Signature for</p>
          {!hideSignature && signature && (
            <div className="mt-4">
              <img src={signature} alt="Signature" className="h-12 mt-2" />
            </div>
          )}
        </div>
      </div>

      {/* Switch styles */}
      <style jsx>{`
        .toggle-checkbox:checked {
          right: 0;
          border-color: #4f46e5;
        }
        .toggle-checkbox {
          right: 4px;
          transition: all 0.3s ease-in-out;
        }
        .toggle-checkbox:checked {
          right: 4px;
          transform: translateX(100%);
        }
        .toggle-label {
          background-color: #ccc;
          transition: background-color 0.2s;
        }
        .toggle-checkbox:checked + .toggle-label {
          background-color: #4f46e5;
        }
      `}</style>
    </div>
  );
}






