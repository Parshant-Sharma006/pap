export async function POST(req) {
  try {
    const body = await req;

    const expressResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/upload`,
      {
        method: "POST",
        body: body,
      }
    );

    const data = await expressResponse;  
    console.log(data, "data");
    // if (!expressResponse.ok) {
    //   throw new Error(data?.error || "Something went wrong");
    // }
    console.log(data, "data");

    return data;
  } catch (error) {
    console.error("Internal API Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Something went wrong" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
