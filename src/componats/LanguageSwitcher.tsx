// components/LanguageSwitcher.tsx
"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (typeof window !== "undefined") {
      localStorage.setItem("i18nextLng", lng);
      document.documentElement.lang = lng;
      document.documentElement.dir = lng === "en" ? "ltr" : "rtl";
    }
  };

  if (!isMounted) {
    return (
      <div className="lan icon">
        <div className="w-6 h-6 bg-gray-200 rounded-full" />
      </div>
    );
  }

  return (
    <div
      className="lan icon"
      onClick={() => changeLanguage(currentLanguage === "en" ? "ar" : "en")}
    >
      <Image
        src={
          currentLanguage === "en"
            ? "/images/saudi-arabia.jpg"
            : "/images/USA.png"
        }
        alt="Language flag"
        width={20}
        height={20}
        className="rounded-full"
        priority
      />
    </div>
  );
}
