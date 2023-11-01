"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState<string>("");
  const router = useRouter();

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ password }),
      });
      const { success } = await res.json();
      if (success) {
        // router.push("/admin/dashboard");
        router.refresh();
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Master password
            </Label>
            <Input
              id="password"
              placeholder="MyLinksHub Key"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              onChange={handleChangePassword}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Unlock
          </Button>
        </div>
      </form>
    </div>
  );
}
