"use client";
import { Button, TextField } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export default function ForgetPassword() {
  const { t } = useTranslation("common");

  const { theme } = useTheme();
  const currentTheme = theme || "light";

  const styles = {
    "& .MuiInputBase-input": {
      color: currentTheme === "dark" ? "#fff" : "#111827",
      fontSize: "14px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: currentTheme === "dark" ? "#fff" : "#1976d2",
        borderWidth: "1px",
      },
      "&:hover fieldset": {
        borderColor: currentTheme === "dark" ? "#ccc" : "#115293",
      },
      "&.Mui-focused fieldset": {
        borderColor: currentTheme === "dark" ? "#aaa" : "#0d3c61",
      },
    },
    "& .MuiInputLabel-root": {
      color: currentTheme === "dark" ? "#fff" : "#666",
      fontWeight: "bold",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: currentTheme === "dark" ? "#fff" : "#1976d2",
    },
    "& .MuiInputBase-root": {
      backgroundColor: currentTheme === "dark" ? "transparent" : "#f5f5f5",
      borderRadius: "8px",
    },
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value === "") {
      setEmailError(true);
      setEmailHelperText(t("this_field_required"));
    } else {
      setEmailError(false);
      setEmailHelperText("");
    }
  };
  return (
    <div className="row w-100 forget_password p-3">
      <div className=" col-lg-6 col-sm-12 col-md-8 text-center">
        <Image
          src="/images/forget-password.png"
          alt=""
          width={226}
          height={226}
        />
        <h2 className="h2-landing"> {t("forgot_password")} </h2>
        <p className="grey-des p-description">{t("forgot_password_desc")}</p>
        <TextField
          className="my-2"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleChangeEmail}
          error={emailError}
          helperText={emailHelperText}
          sx={styles}
          fullWidth
        />
        <div className="submit">
          <Button fullWidth variant="contained" className="btn-1 my-2">
            {t("send_link")}
          </Button>
          <div className="">
            <Link
              href={"/register"}
              style={{ textDecoration: "none" }}
              className="grey-des p-description"
            >
              <ArrowBackIosIcon
                sx={{ width: 14, height: 14 }}
                className="p-description my-3"
              />
              {t("back_to_sign_in")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
