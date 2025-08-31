export async function resetPasswordApi(data) {
  try {
    const res = await fetch(
      "https://pap-s-backend.onrender.com/api/auth/resetPassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const datas = await res.json();
    console.log("datas", Object.keys(datas), datas, datas.success);
    return datas;
  } catch (err) {
    console.log(err);
  }
}
