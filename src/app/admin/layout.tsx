"use client";
import { Toaster } from "@/components/ui/toaster";

// export const metadata: Metadata = {
//   title: "Authentication page",
//   description: "figma to next.js",
// };

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-6xl mx-auto h-full">
      <div className="flex items-center justify-center gap-36 w-full h-full">
        {/* page logo */}
        {/* page content */}
        {children}
      </div>
      <Toaster />
    </main>
  );
}
