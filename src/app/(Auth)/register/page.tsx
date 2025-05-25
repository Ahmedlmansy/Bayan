"use client";
import { Button, Divider, TextField, Typography } from "@mui/material";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { t } = useTranslation("common");

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme || "light" : "light";

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
      setEmailHelperText("This field is required");
    } else {
      setEmailError(false);
      setEmailHelperText("");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="row m-0 auth-landing">
      <div className="col-lg-6 col-md-12 col-sm-12 p-3 text-light auth-welcome">
        <div className="p-5">
          <div className="">
            <Image
              width={80}
              height={80}
              className="my-2"
              src="/images/logo-white-svg.svg"
              alt="logo-white"
            />
            <h1 className="h-landing">
              {t("Technology_is_best_when_it_brings_people_together")}
            </h1>
          </div>
          <hr />
          <div className="my-4">
            <h4 className="h3-landing m-0">{t("You_are_in_a_good_company")}</h4>
            <p className="p-description">
              {t(
                "A_product_is_something_a_brand_is_something_that_is_bought_by_the_customer"
              )}
            </p>
          </div>
          <Image
            src="/images/brands.svg"
            alt=""
            width={300}
            height={66}
            className="mt-3"
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 p-3 registration-area">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="status-registra my-2">
              <h3 className="h2-landing">{t("sign_up_trial")}</h3>
              <p className="grey-des p-description">{t("no_risk")}</p>
            </div>
            <div className="mt-4">
              <form action="">
                <h3 className="h3-landing">{t("register_email")}</h3>
                <TextField
                  className="my-2"
                  label="Enter your work email"
                  variant="outlined"
                  value={email}
                  onChange={handleChangeEmail}
                  error={emailError}
                  helperText={emailHelperText}
                  sx={styles}
                  fullWidth
                />
                <div className="submit">
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ backgroundColor: "rgb(105 80 232 / 1)" }}
                  >
                    {t("sign_up_email")}
                  </Button>
                </div>
                <div className="">
                  <p className="grey-des my-3 p-description">
                    {t("by_signing_up")}
                    <Link href={"/"} className="link-custom">
                      {t("terms_of_service")}
                    </Link>{" "}
                    {t("consent_email")}
                  </p>
                </div>
              </form>
              <div className="">
                <Divider
                  className="my-4"
                  sx={{
                    borderColor:
                      currentTheme === "dark" ? "#9ca3af" : "#6b7280",
                    "&::before, &::after": {
                      borderColor:
                        currentTheme === "dark" ? "#9ca3af" : "#6b7280",
                    },
                  }}
                >
                  <Typography variant="body2">
                    {t("already_have_account")}
                  </Typography>
                </Divider>
                <Button
                  fullWidth
                  variant="contained"
                  href="/login"
                  className="btn-2"
                >
                  {t("log_in")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
