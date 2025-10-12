"use client";

import { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import I18nProvider from "./I18nProvider";
import Sidebar from "./Sidebar";
import Header from "./Header";
import i18n from "@/app/(main)/i18n";
import Loading from "./loading";

export default function MainLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng") || "en";
    document.documentElement.lang = storedLang;
    document.documentElement.dir = storedLang === "en" ? "ltr" : "rtl";
    i18n.changeLanguage(storedLang);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (!mounted || loading) {
    return <Loading />;
  }

  if (!user) return null;

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
