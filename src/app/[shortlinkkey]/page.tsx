// "use client";
import { kv } from "@vercel/kv";
import { redirect } from "next/navigation";

import type { GetStaticProps, Metadata } from "next";
// import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Authentication page",
  description: "figma to next.js",
};

// export const getStaticProps = (async (context) => {
//   console.log(context);
//   // const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   // const repo = await res.json()
//   // return { props: { repo } }
//   return { props: { test: "test" } };
// }) satisfies GetStaticProps<{
//   test?: string;
// }>;

export default async function Page({
  params,
}: {
  params: { shortlinkkey: string };
}) {
  const handleRedirect = async () => {
    try {
      const res = await fetch(`api/shortlink/${params.shortlinkkey}`, {
        method: "GET",
      });
      const response = await res.json();
      console.log(response);

      const { redirectTo } = response;

      if (redirectTo) {
        // router.push("/admin/dashboard");
        console.log(redirectTo);
        // window.location.href = redirectTo;
      } else {
        alert("Failed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setIsLoading(false);
    }

    // window.location.href = "https://www.google.com";
  };

  // const res = await fetch(
  //   `http://localhost:3000/api/shortlink/${params.shortlinkkey}`,
  //   {
  //     method: "GET",
  //   }
  // );
  // const response = await res.json();
  // console.log(response);

  // const { redirectTo } = response;

  // if (redirectTo) {
  //   // router.push("/admin/dashboard");
  //   console.log(redirectTo);
  //   // window.location.href = redirectTo;
  // } else {
  //   alert("Failed");
  // }

  const records = await kv.json.get("__shortlinks", "$." + params.shortlinkkey);

  const data = records[0] || {};

  kv.json.set(
    "__shortlinks",
    "$." + params.shortlinkkey + ".visits",
    data.visits + 1
  );

  redirect(data.url);

  // useEffect(() => {
  //   if (params.shortlinkkey) {
  //     handleRedirect();
  //   }
  // }, [params.shortlinkkey]);

  return <div>My Post: {params.shortlinkkey}</div>;
}
