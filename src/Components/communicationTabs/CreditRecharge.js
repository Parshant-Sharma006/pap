import React from 'react'

const CreditRecharge = () => {
  return (
    <div>
      <div class="bg-white rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Add Money</h2>

          <input
            type="number"
            placeholder="Enter amount"
            value="370"
            class="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div class="w-full h-[50px] flex justify-center gap-4">
            <button class="w-1/3 h-[50px] bg-green-500 text-white px-4 py-2 rounded-md font-semibold flex justify-center items-center gap-2 hover:bg-green-700 transition">
              Add Money
            </button>
            <button class="w-1/3 h-[50px] text-center font-semibold border border-green-500 px-4 py-2 rounded-md flex justify-center items-center gap-2 hover:bg-green-200 transition">
              Reset
            </button>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-blue-900 mb-4">Instructions</h2>
          <ul class="text-gray-700 space-y-2 list-disc pl-6">
            <li>The minimum amount required is ₹200.</li>
            <li>This amount will be converted into credits.</li>
            <li>1 Rupee = 1 Credit</li>
          </ul>

          <div class="mt-6 text-sm text-gray-600 flex items-center">
            <span class="text-green-700 font-medium mr-2">Powered by</span>
            <span className="italic font-semibold text-blue-700">Razorpay</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditRecharge
