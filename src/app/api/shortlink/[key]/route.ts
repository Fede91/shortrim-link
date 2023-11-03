import { kv } from "@vercel/kv";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (request: NextApiRequest, { params }: any) => {
  const { key } = params;

  const records = await kv.json.get("__shortlinks", "$." + key);

  if (records.length === 0) {
    return NextResponse.next();
  }

  const data = records[0] || {};

  console.log(data);

  kv.json.set("__shortlinks", "$." + key + ".visits", data.visits + 1);

  const result = {
    redirectTo: data.url,
  };

  return NextResponse.json(result, {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};
