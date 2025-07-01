import React from 'react'

const ChannelsandPrice = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-4">
       
        {/* Table */}
        <div className="overflow-x-auto rounded-2xl  p-4 w-full">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-600 uppercase text-sm">
                <th className="px-4 py-2 border-b">#</th>
                <th className="px-4 py-2 border-b">Channel</th>
                <th className="px-4 py-2 border-b">Credits</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="px-4 py-2 border-b">1</td>
                <td className="px-4 py-2 border-b">SMS</td>
                <td className="px-4 py-2 border-b">₹ 0.2</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border-b">2</td>
                <td className="px-4 py-2 border-b">Email</td>
                <td className="px-4 py-2 border-b">₹ 0.1</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">3</td>
                <td className="px-4 py-2 border-b">WhatsApp</td>
                <td className="px-4 py-2 border-b">₹ 1</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">IVR</td>
                <td className="px-4 py-2">₹ 0.9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ChannelsandPrice
