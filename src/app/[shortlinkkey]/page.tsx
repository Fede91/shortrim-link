"use client";

import type { Metadata } from "next";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Authentication page",
//   description: "figma to next.js",
// };
export default function Page({ params }: { params: { shortlinkkey: string } }) {
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
        window.location.href = redirectTo;
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

  useEffect(() => {
    if (params.shortlinkkey) {
      handleRedirect();
    }
  }, [params.shortlinkkey]);

  return <div>My Post: {params.shortlinkkey}</div>;
}
