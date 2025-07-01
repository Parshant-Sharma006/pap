import { Button } from "antd";

export default function Warehouse() {
  return (
    <>
      <div>
        <div className="border-b-1 mt-6">
          <span className="px-2">Manage Warehouse</span>
          <span className="px-2">Manage Seller</span>
        </div>
        <div className="flex justify-between">
          <h1>Manage Address</h1>
          <div>
            <Button>ADD WAREHOUSE</Button>
            <Button>Export</Button>
          </div>
        </div>
        <div>
          <table class="min-w-full text-left border-separate border-spacing-0 border border-gray-300"> 
            <thead>
              <tr className="text-center">
                <th class="w-16 border border-gray-300">#</th>
                <th class="w-auto border border-gray-300">Title</th>
                <th class="w-auto border border-gray-300">Addressee</th>
                <th class="w-auto border border-gray-300">Phone</th>
                <th class="w-96 border border-gray-300">Address</th>
                <th class="w-auto border border-gray-300">Pin</th>
                <th class="w-auto border border-gray-300">City, State</th>
                <th class="w-auto border border-gray-300">Addr. Id</th>
                <th class="w-auto border border-gray-300">Default Address</th>
                <th class="w-auto border border-gray-300">Status</th>
                <th class="w-auto border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="w-16 border border-gray-300 p-2">1</td>
                <td class="border border-gray-300 p-2">Home</td>
                <td class="border border-gray-300 p-2">John Doe</td>
                <td class="border border-gray-300 p-2">1234567890</td>
                <td class="w-96 border border-gray-300 p-2">123 Main Street</td>
                <td class="border border-gray-300 p-2">110001</td>
                <td class="border border-gray-300 p-2">New Delhi, Delhi</td>
                <td class="border border-gray-300 p-2">ADDR12345</td>
                <td class="border border-gray-300 p-2">Yes</td>
                <td class="border border-gray-300 p-2">Active</td>
                <td class="border border-gray-300 p-2">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
              <tr>
                <td class="w-16 border border-gray-300 p-2">2</td>
                <td class="border border-gray-300 p-2">Office</td>
                <td class="border border-gray-300 p-2">Jane Smith</td>
                <td class="border border-gray-300 p-2">9876543210</td>
                <td class="w-96 border border-gray-300 p-2">
                  456 Corporate Ave
                </td>
                <td class="border border-gray-300 p-2">560001</td>
                <td class="border border-gray-300 p-2">Bangalore, Karnataka</td>
                <td class="border border-gray-300 p-2">ADDR67890</td>
                <td class="border border-gray-300 p-2">No</td>
                <td class="border border-gray-300 p-2">Inactive</td>
                <td class="border border-gray-300 p-2">
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
