import Avatar from "@/components/atoms/Avatar";
import ButtonIcon from "@/components/atoms/ButtonIcon";
import Logo from "@/components/molecules/Logo";
import SidebarNav from "@/components/organisms/SidebarNav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PiChats, PiSignOut } from "react-icons/pi";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-neutral-800">
          <div className="bg-white w-[80px] flex flex-col items-center gap-5 pt-8 pb-[80px] fixed top-0 left-0 h-full">
            <Logo />
            <ButtonIcon className="bg-yellow-300 text-neutral-700">
              <PiChats size={20} />
            </ButtonIcon>
            <SidebarNav />
            <div>
              <Avatar size={40} src="/profile.jpeg" />
              <ButtonIcon className="bg-neutral-100 text-neutral-700 pt-3 -mt-3">
                <PiSignOut size={20} />
              </ButtonIcon>
            </div>
          </div>
          <div className="ml-[80px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
