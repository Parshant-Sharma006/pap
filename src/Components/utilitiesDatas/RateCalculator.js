
import { useState, useEffect } from "react";
// import Image from "next/image";
import { Form, Input, Select, Button, Radio } from "antd";


const { Option } = Select;

export default function RateCalculator() {
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleValuesChange = (_, allValues) => {
    const allFilled = Object.values(allValues).every(
      (val) => val !== undefined && val !== ""
    );
    setIsFormValid(allFilled);
  };

  const onFinish = (values) => {
    console.log("Form Submitted", values);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 flex-1">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onValuesChange={handleValuesChange}
          initialValues={{
            express: "Surface",
            mps: "No",
            quantity: 1,
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Form.Item
              label="Select Type *"
              name="type"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio value="Courier Selection">Courier Selection</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Express *"
              name="express"
              rules={[{ required: true }]}
            >
              <Select>
                <Option value="Surface">Surface</Option>
                <Option value="Air">Air</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Source Pincode *"
              name="sourcePincode"
              rules={[{ required: true }]}
            >
              <Input placeholder="110020" />
            </Form.Item>

            <Form.Item
              label="Destination Pincode *"
              name="destinationPincode"
              rules={[{ required: true }]}
            >
              <Input placeholder="Destination pincode..." />
            </Form.Item>

            <Form.Item
              label="Payment Mode *"
              name="paymentMode"
              rules={[{ required: true }]}
            >
              <Select placeholder="-- Select Mode --">
                <Option value="Prepaid">Prepaid</Option>
                <Option value="COD">COD</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="COD Amount *"
              name="codAmount"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter COD Amount" />
            </Form.Item>

            <Form.Item
              label="Invoice Amount *"
              name="invoiceAmount"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter Invoice Amount" />
            </Form.Item>

            <Form.Item
              label="Quantity *"
              name="quantity"
              rules={[{ required: true }]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item label="Mps *" name="mps" rules={[{ required: true }]}>
              <Select>
                <Option value="No">No</Option>
                <Option value="Yes">Yes</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Weight (KG) *"
              name="weight"
              rules={[{ required: true }]}
            >
              <Input placeholder="Weight..." />
            </Form.Item>

            <Form.Item
              label="Length (cm) *"
              name="length"
              rules={[{ required: true }]}
            >
              <Input placeholder="Length..." />
            </Form.Item>

            <Form.Item
              label="Width (cm) *"
              name="width"
              rules={[{ required: true }]}
            >
              <Input placeholder="Width..." />
            </Form.Item>

            <Form.Item
              label="Height (cm) *"
              name="height"
              rules={[{ required: true }]}
            >
              <Input placeholder="Height..." />
            </Form.Item>
          </div>

          <Form.Item className="mt-6">
            <Button
              type="primary"
              htmlType="submit"
              disabled={!isFormValid}
              className="bg-green-950 border-none hover:bg-green-900"
            >
              ℹ️ Get Charges
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="w-full md:max-w-sm flex justify-center items-center">
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src={"./CustomerPannelImages/CustomerPannel/india.jpg"}
            alt="India Map"
            width={800}
            height={800}
            className="rounded "
          />
        </div>
      </div>
    </div>
  );
}


