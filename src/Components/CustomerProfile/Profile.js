"use client";

import { useState } from "react";

export default function Profile() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSave = () => {
    if (image) {
      alert("Profile photo saved! (Mock)");
      // Here you would normally send the image to backend or cloud storage
    } else {
      alert("No photo selected.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mt-10">
      <div className="p-2 shadow-sm inline-block rounded-t-md mb-4">
        <span className="text-gray-700 font-semibold">My Info</span>
      </div>

      <div className="">
        {/* Avatar */}
        <div className=" flex-col ">
          <div className="relative flex justify-between">
            {preview ? (
              <img
                src={preview}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-pink-100"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-green-200 text-gray-700 font-bold flex items-center justify-center text-xl border-4 border-pink-100">
                GF
              </div>
            )}
            <div className="flex flex-col gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-[200px] border-2 border-green-600 bg-green-100 rounded-xl p-2 text-sm"
              />
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white py-2 px-3 rounded-xl mt-2 text-sm hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-7">
          <h2 className="text-lg font-bold">
            GAURAV EXPRESS LOGISTIC SERVICES FARIDABAD
          </h2>
          <p className="text-sm text-gray-500">Individual</p>

          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <p className="text-gray-500">Registered Name</p>
              <p className="font-medium">GAURAV EXPRESS LOGISTIC SERVICES</p>
            </div>
            <div>
              <p className="text-gray-500">Registered Email</p>
              <p className="font-medium">Sharmakp995@gmail.com</p>
            </div>

            <div>
              <p className="text-gray-500">Registered Number</p>
              <p className="font-medium">8800804013</p>
            </div>
            <div>
              <p className="text-gray-500">Alt. Contact</p>
              <p className="font-medium">Not Available</p>
            </div>

            <div>
              <p className="text-gray-500">Billing</p>
              <p className="font-medium">Prepaid</p>
            </div>
            <div>
              <p className="text-gray-500">Category</p>
              <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-medium">
                Bronze
              </span>
            </div>

            <div>
              <p className="text-gray-500">KYC Status</p>
              <span className="text-green-600 border border-green-600 px-2 py-0.5 rounded text-xs font-medium">
                ✔ Approved
              </span>
            </div>
            <div>
              <p className="text-gray-500">Account Status</p>
              <span className="text-green-600 border border-green-600 px-2 py-0.5 rounded text-xs font-medium">
                ✔ Approved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
