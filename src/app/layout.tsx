import Navbar from "@/components/Navbar/Navbar";
import Providers from "./Providers";
import "./globals.css";
import { Poppins, Roboto } from "next/font/google";

import Sidebar from "@/components/Sidebar/Sidebar";
import { LoginModalStore } from "../../store/LoginModalStore";
import LoginModal from "@/components/Modals/LoginModal";

import { Inter } from "next/font/google";
import AboutModal from "@/components/Modals/AboutModal";
import SocialModal from "@/components/Modals/SocialModal";

const interFont = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Story",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={interFont.className}>
        <Providers>
          <Navbar />
          <LoginModal />
          <AboutModal />
          <SocialModal />
          <div className="flex relative mt-20">
            {children}

            <div className="hidden  xl:block">
              {" "}
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
