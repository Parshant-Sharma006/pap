import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: {},
  loading: false,
  error: null,
};
console.log(process.env.NEXT_PUBLIC_API_URL);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    userSuccess: (state, action) => {
      state.loading = false;
      state.usersData = action.payload.data;
      document.cookie = `token = ${action.payload.token}; path=/; max-age=3600`;
    },
    userFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.usersData = {};
      state.message = action.payload.message;
    },
  },
});

export const { startLoading, userSuccess, userFailure } = userSlice.actions;

export const signupApi = (formData) => async (dispatch) => {
  dispatch(startLoading());

  try {
    const response = await fetch(
      `https://pap-s-backend.onrender.com/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const res = await response.json();
    console.log(response, res);
    return res;
  } catch (error) {
    dispatch(userFailure(error.toString()));
  }
};

export const loginApi = (formData) => async (dispatch) => {
  dispatch(startLoading);
  try {
    const response = await fetch(
      `https://pap-s-backend.onrender.com/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    dispatch(userSuccess(data));

    return data;
  } catch (error) {
    console.log(error, "error");
    dispatch(userFailure(error.toString()));
    return false;
  }
  return response;
};

export const forgotPasswordApi = (formData) => async (dispatch) => {
  dispatch(startLoading);

  try {
    const response = await fetch("/api/authApi", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return response;
  } catch (error) {}
};

export const kycApi = (formData, token) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://pap-s-backend.onrender.com/api/kyc/submitKYCForm",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token} `,
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.JSON();
    return data;
  } catch (error) {}
};

export const imageApi = (formData, token) => async (dispatch) => {
  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }
  try {
    const expressResponse = await fetch(
      `https://pap-s-backend.onrender.com/api/upload`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token} `,
        },
        body: formData,
      }
    );

    const data = await expressResponse.json();
    console.log(data, "data");
    // if (!expressResponse.ok) {
    //   throw new Error(data?.error || "Something went wrong");
    // }

    return data;

    // const expressResponse = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}/api/upload`,
    //   {
    //     method: "POST",
    //     headers: {
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NGJmM2E1YjBlOTJhNGNiYjkyN2I3MSIsImVtYWlsIjoiZW1haWw3QGdtYWlsLmNvbSIsImlhdCI6MTc0OTg1NjYwMSwiZXhwIjoxNzUwNDYxNDAxfQ.TF6ko5HhuZvYJBZkbSFuEm3O-AyMdUs_u9MQXk721Og",
    //     },
    //     body: formData,
    //   }
    // );
    // console.log(expressResponse);
    // return expressResponse;
  } catch (error) {
    console.log("error in slice", error);
  }
};

export const kycBankDetails = (formData, token) => async (dispatch) => {
  const res = await fetch(
    `https://pap-s-backend.onrender.com/api/kyc/submitKycBankDetails`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token} `,
      },
      body: JSON.stringify(formData),
    }
  );
};

export default userSlice.reducer;
