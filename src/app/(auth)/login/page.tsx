import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { UserAuthForm } from "./components/user-auth-form";
// import { buttonVariants } from "@/registry/new-york/ui/button"
// import { UserAuthForm } from "@/app/examples/authentication/components/user-auth-form"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden"></div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col  text-white dark:border-r lg:flex">
          <div
            style={{
              backgroundImage: `url("/images/abstract-background.webp")`,
              backgroundSize: "cover",
            }}
            className="h-screen"
          />
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Enter MyLinksHub Key
              </h1>
              <p className="text-sm text-muted-foreground">
                Unlock MyLinksHub with your Key
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  );
}
