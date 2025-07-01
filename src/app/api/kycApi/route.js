export async function POST(req) {
  try {
    const body = await req;
    console.log("body" , body)

    const expressResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/kyc/submitKYCForm`,
      {
        method: "POST",
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
