import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Stream Space",
  description:
    "Stream Space is a video conferencing platform that allows you to create and join video calls with your friends and colleagues. It is built using Stream's Video SDK and Clerk's authentication system.",
  icons: {
    icon: "/icons/logo.svg",
  },
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
