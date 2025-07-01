const data = {
  statusCode: 201,
  success: true,
  message: "User registered successfully!!",
  data: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDZmZmMwOWMwODZkNjUxOGI0ZWE1YSIsImVtYWlsIjoiZW1haWwyQGdtYWlsLmNvbSIsImlhdCI6MTc0OTQ4MzQ1NywiZXhwIjoxNzUwMDg4MjU3fQ.d8rKfwNRwjvLd2xFXAuLkxLPmljnXlMPrXJmX-PEI1I",
    user: {
      id: "6846ffc09c086d6518b4ea5a",
      name: "rahul",
      email: "email2@gmail.com",
    },
  },
};

// JSON.parse(data);

import { useDispatch } from 'react-redux';
import userSuccess  from './redux/userSlice';
export default comp = () => {


dispatch(userSuccess(data));

}


