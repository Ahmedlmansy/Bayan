"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import I18nProvider from "@/components/I18nProvider";
import { useEffect, useState } from "react";
import i18n from "@/app/(Dashboard)/i18n";

export default function AuthLayout({ children }: { children: ReactNode }) {
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
        <main>{children}</main>
      </ThemeProvider>
    </I18nProvider>
  );
}
