// import { NextResponse } from "next/server";

// export async function GET(req: any) {
//   const { searchParams } = new URL(req.url);
//   const q = searchParams.get("q");
//   const res = NextResponse.next();
//   res.headers.set("Access-Control-Allow-Origin", "*");
//   res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   res.headers.set(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization"
//   );
//   const response = await fetch(
//     `http://127.0.0.1:8000/api/get_data?q=${q}&type=news/`
//   );
//   const data = await response.json();
//   return NextResponse.json(data);
// }
