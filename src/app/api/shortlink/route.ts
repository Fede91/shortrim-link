import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const shortlinks = await kv.json.get("__shortlinks");

  // console.log(shortlinks);

  return NextResponse.json(shortlinks || {}, {
    status: 200,
    headers: { "content-type": "application/json" },
  });
};

export const POST = async (request: Request) => {
  const { key, url } = await request.json();

  const pathExist = await kv.json.type("__shortlinks");

  // console.log(pathExist);

  if (!pathExist) {
    await kv.json.set("__shortlinks", "$", {
      [key]: {
        url,
        visits: 0,
        createdAt: new Date().getTime(),
      },
    });
  } else {
    // Check if the key is already exists
    const currentKeyData = await kv.json.get("__shortlinks", "$." + key);

    if (currentKeyData.length > 0) {
      await kv.json.set("__shortlinks", "$." + key, {
        ...currentKeyData[0],
        url,
      });
    } else {
      await kv.json.set("__shortlinks", "$." + key, {
        url,
        visits: 0,
        createdAt: new Date().getTime(),
      });
    }
  }

  // TODO_1: Check if the key is already exists

  // TODO_2: Check if the url is valid
  /*
  const pathExist = await kv.json.type("__shortlinks");

  let data;

  if (pathExist) {
    data = await kv.json.arrappend("__shortlinks", ".data", {
      key,
      url,
      visits: 0,
    });
  } else {
    data = await kv.json.set("__shortlinks", "$", {
      data: [
        {
          key,
          url,
          visits: 0,
        },
      ],
    });
  }

  await kv.set(key, url);*/

  //kv.json.set(key, ".", );

  // return NextResponse.json(data, {
  //   status: 200,
  //   headers: { "content-type": "application/json" },
  // });
  return NextResponse.json({ success: true }, { status: 200 });
};

export const DELETE = async (request: Request) => {
  await kv.json.del("__shortlinks");

  return NextResponse.json({ success: true }, { status: 200 });
};
