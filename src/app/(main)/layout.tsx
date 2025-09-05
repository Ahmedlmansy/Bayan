"use client";
import MainLayout from "@/components/MainLayout";
import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const fixDir = () => {
      const elements = document.querySelectorAll(".high, .low");
      elements.forEach((el) => {
        el.setAttribute("dir", "ltr");
      });
    };
    setTimeout(fixDir, 100);
  }, [pathname]);
  return <MainLayout> {children} </MainLayout>;
}
