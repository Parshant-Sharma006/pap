// app/api/forgetPassword/route.js

export async function POST(req) {
  try {
    const body = await req.json();

    const expressResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgetPassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await expressResponse.json();
    return new Response(JSON.stringify(data), {
      status: expressResponse.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Internal API Error:", error.message);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
