"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import I18nProvider from "./I18nProvider";
import Sidebar from "./Sidebar";
import Header from "./Header";
import i18n from "@/app/(Dashboard)/i18n";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng") || "en";
    document.documentElement.lang = storedLang;
    document.documentElement.dir = storedLang === "en" ? "ltr" : "rtl";
    i18n.changeLanguage(storedLang);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <I18nProvider>
      <ThemeProvider attribute="data-theme" defaultTheme="light">
        <div className="row m-0">
          <div className="col-xl-2 d-xl-block d-none">
            <Sidebar />
          </div>
          <div className="col-lg-12 col-xl-10 col-md-12 col-sm-12">
            <header>
              <Header />
            </header>
            {children}
          </div>
        </div>
      </ThemeProvider>
    </I18nProvider>
  );
}
