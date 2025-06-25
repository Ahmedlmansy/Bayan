import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import Sidebar from "./Sidebar";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export default function DrawerSaidbar() {
  const { theme } = useTheme();
  const [mounted] = useState(false);
  const { i18n } = useTranslation();
  const currentTheme = mounted ? theme || "light" : "light";
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <div className="iconOpen col-2 icon" onClick={() => toggleDrawer(true)}>
      <svg viewBox="0 0 24 24" className="d-lg-none d-block">
        <path
          fill="currentColor"
          d="M15.28 4.5H4.72C3.772 4.5 3 5.06 3 5.75S3.772 7 4.72 7h10.56C16.228 7 17 6.44 17 5.75s-.772-1.25-1.72-1.25Z"
          opacity="0.32"
        ></path>
        <path
          fill="currentColor"
          d="M19.28 10.75H8.72C7.772 10.75 7 11.31 7 12s.772 1.25 1.72 1.25h10.56c.948 0 1.72-.56 1.72-1.25s-.772-1.25-1.72-1.25ZM15.28 17H4.72C3.772 17 3 17.56 3 18.25s.772 1.25 1.72 1.25h10.56c.948 0 1.72-.56 1.72-1.25S16.228 17 15.28 17Z"
        ></path>
      </svg>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: currentTheme === "dark" ? "#1e1e1e" : "#ffffff",
            color: currentTheme === "dark" ? "#fff" : "#000",
          },
        }}
        anchor={i18n.language === "ar" ? "right" : "left"}
        variant="temporary"
        open={open}
        onClose={() => {
          toggleDrawer(false);
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px",
          }}
        >
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              toggleDrawer(false);
            }}
          >
            <div className="">
              <svg focusable="false" aria-hidden="true" viewBox="-2 0 19 16">
                <path d="M1 1.75C0.447187 1.75 0 2.19719 0 2.75V12.75C0 13.3028 0.447187 13.75 1 13.75C1.55281 13.75 2 13.3028 2 12.75V2.75C2 2.19719 1.55281 1.75 1 1.75Z"></path>
                <path d="M8.37634 3.20966C8.76697 2.81903 9.39978 2.81903 9.79041 3.20966C10.181 3.60028 10.181 4.23153 9.78978 4.62278L7.49666 6.91591H13.0842C13.637 6.91591 14.0842 7.36309 14.0842 7.91591C14.0842 8.46872 13.637 8.91591 13.0842 8.91591H7.49978L9.79119 11.209C9.9865 11.404 10.0842 11.6597 10.0842 11.9159C10.0842 12.1722 9.98728 12.4284 9.79041 12.6237C9.39978 13.0143 8.76697 13.0143 8.37634 12.6237L4.37634 8.62372C3.98572 8.23309 3.98572 7.60028 4.37634 7.20966L8.37634 3.20966Z"></path>
              </svg>
            </div>
          </IconButton>
        </div>
        <Sidebar />
      </Drawer>
    </div>
  );
}
