"use client";
import Link from "next/link";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const Login = () => {
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
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">جاري التحميل...</div>
      </div>
    );
  }

  if (user) {
    router.push("/");
    return null;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row m-0 auth-landing">
      <div className="col-lg-6 col-md-12 col-sm-12  p-3 text-light  auth-welcome">
        <div className="p-5">
          <h1 className="h-landing">{t("hi_welcome")}</h1>
          <div className="my-4">
            <h4 className="h3-landing m-0">
              {" "}
              {t("You_are_in_a_good_company")}{" "}
            </h4>
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
      <div className="col-lg-6 col-md-12 col-sm-12  p-3 registration-area">
        <div className="row justify-content-center">
          <div className="col-10 ">
            <div className="status-registra">
              <h3 className="h2-landing"> {t("sign_in")} </h3>
              <p className="grey-des p-description">
                {t("new_user")}
                <Link href={"/register"} className="link-custom">
                  {t("create_account")}
                </Link>{" "}
              </p>
            </div>
            <div className="mt-4">
              {/* تم التصحيح هنا - إضافة onSubmit الصحيحة */}
              <form onSubmit={handleLogin}>
                <h3 className="h3-landing">{t("login_email")}</h3>

                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-3">
                    {error}
                  </div>
                )}

                <TextField
                  className="my-2"
                  label="Enter your work email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  sx={styles}
                  required
                />
                <TextField
                  className="my-2"
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  fullWidth
                  sx={styles}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="forget_remeber my-3">
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: "#eee",
                          "&.Mui-checked": {
                            color: "#592BE7",
                          },
                        }}
                      />
                    }
                    label={t("remember_me")}
                  />
                  <div className="">
                    <Link href={"/forget-password"} className="dangerColor">
                      {t("forget_password")}
                    </Link>
                  </div>
                </div>
                <div className="submit">
                  <Button
                    fullWidth
                    type="submit"
                    disabled={loading}
                    variant="contained"
                    sx={{
                      backgroundColor: "rgb(105 80 232 / 1)",
                      "&:disabled": {
                        backgroundColor: "rgba(105, 80, 232, 0.5)",
                      },
                    }}
                  >
                    {loading ? "جاري الدخول..." : t("sign_in")}
                  </Button>
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
                  <Typography variant="body2">{t("or")}</Typography>
                </Divider>
              </div>
              <div className="sign_social">
                <div className="google">
                  <svg
                    className="size-[18px]"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8444 6.4332H15.2V6.4H8V9.6H12.5212C11.8616 11.4628 10.0892 12.8 8 12.8C5.3492 12.8 3.2 10.6508 3.2 8C3.2 5.3492 5.3492 3.2 8 3.2C9.2236 3.2 10.3368 3.6616 11.1844 4.4156L13.4472 2.1528C12.0184 0.8212 10.1072 0 8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 7.4636 15.9448 6.94 15.8444 6.4332Z"
                      fill="#FFC107"
                    ></path>
                    <path
                      d="M0.921875 4.2764L3.55028 6.204C4.26148 4.4432 5.98388 3.2 7.99948 3.2C9.22308 3.2 10.3363 3.6616 11.1839 4.4156L13.4467 2.1528C12.0179 0.8212 10.1067 0 7.99948 0C4.92668 0 2.26188 1.7348 0.921875 4.2764Z"
                      fill="#FF3D00"
                    ></path>
                    <path
                      d="M7.99993 15.9995C10.0663 15.9995 11.9439 15.2087 13.3635 13.9227L10.8875 11.8275C10.0573 12.4588 9.04291 12.8003 7.99993 12.7995C5.91913 12.7995 4.15233 11.4727 3.48673 9.62109L0.87793 11.6311C2.20193 14.2219 4.89073 15.9995 7.99993 15.9995Z"
                      fill="#4CAF50"
                    ></path>
                    <path
                      d="M15.8444 6.43359H15.2V6.40039H8V9.60039H12.5212C12.2057 10.487 11.6373 11.2617 10.8864 11.8288L10.8876 11.828L13.3636 13.9232C13.1884 14.0824 16 12.0004 16 8.00039C16 7.46399 15.9448 6.94039 15.8444 6.43359Z"
                      fill="#1976D2"
                    ></path>
                  </svg>
                </div>
                <div className="facebook">
                  <svg
                    className="size-[18px] fill-[#2475ef]"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.5,6h-3a1,1,0,0,0-1,1v3h4a.35.35,0,0,1,.34.46l-.74,2.2a.5.5,0,0,1-.47.34H12.5v7.5a.5.5,0,0,1-.5.5H9.5a.5.5,0,0,1-.5-.5V13H7.5a.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5H9V7a4,4,0,0,1,4-4h3.5a.5.5,0,0,1,.5.5v2A.5.5,0,0,1,16.5,6Z"></path>
                  </svg>
                </div>
                <div className="X">
                  <svg
                    className="size-[18px] fill-[#45abf7]"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22,6.45a8,8,0,0,1-1.85,1.78c0,.18,0,.36,0,.55A12.2,12.2,0,0,1,7.78,21a12.24,12.24,0,0,1-5.45-1.26.25.25,0,0,1-.15-.23V19.4a.26.26,0,0,1,.26-.26A8.86,8.86,0,0,0,7.56,17.3a4.37,4.37,0,0,1-3.89-2.56.26.26,0,0,1,.26-.36,4,4,0,0,0,1.52-.14A4.36,4.36,0,0,1,2,10.43a.26.26,0,0,1,.36-.26,4,4,0,0,0,1.58.34A4.28,4.28,0,0,1,2.23,5.57a.54.54,0,0,1,.91-.18,12.36,12.36,0,0,0,8.41,3.88,4,4,0,0,1-.12-1,4.36,4.36,0,0,1,7.51-2.94,8.69,8.69,0,0,0,2.39-.83.17.17,0,0,1,.18,0,.17.17,0,0,1,0,.18A4.37,4.37,0,0,1-1.76,2,8.58,8.58,0,0,0,2-.48.16.16,0,0,1,.18,0A.17.17,0,0,1,22,6.45Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
