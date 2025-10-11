import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import Sidebar from "./Sidebar";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export default function DrawerSaidbar() {
  const { theme } = useTheme();
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  // console.log(theme);
  return (
    <div className="iconOpen col-2 icon" onClick={() => toggleDrawer(true)}>
      {/* 
      className="d-xl-none d-block"
        fill={theme === "dark" ? "#ffff" : "#000"}
      */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="d-xl-none d-block"
        fill={theme === "dark" ? "#ffff" : "#000"}
        viewBox="0 0 640 640"
      >
        <path d="M64 160C64 142.3 78.3 128 96 128L480 128C497.7 128 512 142.3 512 160C512 177.7 497.7 192 480 192L96 192C78.3 192 64 177.7 64 160zM128 320C128 302.3 142.3 288 160 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L160 352C142.3 352 128 337.7 128 320zM512 480C512 497.7 497.7 512 480 512L96 512C78.3 512 64 497.7 64 480C64 462.3 78.3 448 96 448L480 448C497.7 448 512 462.3 512 480z" />
      </svg>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: 290,
            padding: "5px",
            backgroundColor: theme === "dark" ? "#111726" : "#ffff",
            color: theme === "dark" ? "#1e1e1e" : "#ffff",
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={theme === "dark" ? "#ffff" : "#000"}
                viewBox="0 0 640 640"
              >
                <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
              </svg>
            </div>
          </IconButton>
        </div>
        <Sidebar />
      </Drawer>
    </div>
  );
}
