"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { sidebarData } from "@/sidebarData";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const path = usePathname();
  const isActive = path.split("/")[1];
  console.log(isActive);
  if (!mounted) {
    return (
      <div className="lan icon">
        <div className="w-6 h-6 bg-gray-200 rounded-full" />
      </div>
    );
  }

  return (
    <div>
      <div
        className="sidebar p-3"
        style={{
          height: "100vh",
          position: "fixed",
          overflowY: "scroll",
          width: "23%",
        }}
      >
        <div className="logo_sidebar">
          <Link href={"/"}>
            <Image src={"/images/favicon.ico"} alt="" width={30} height={30} />
          </Link>
        </div>
        {sidebarData.sections.map((item, i) => {
          return (
            <div key={i}>
              <p className="h3-landing my-3"> {t(item.title)} </p>
              <ul className="all_links">
                {item.items.map((link, i) => {
                  return (
                    <li key={i} className={`nav_link `}>
                      <Link
                        href={`/${link.path}`}
                        className={` ${
                          isActive === link.path ? "active_link" : ""
                        }`}
                      >
                        {link.icon}
                        {t(link.name)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
