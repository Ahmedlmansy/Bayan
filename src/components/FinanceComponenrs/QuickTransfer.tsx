import {
  Box,
  Button,
  LinearProgress,
  MenuItem,
  TextField,
} from "@mui/material";
import { useTheme } from "next-themes";
import React from "react";
import { useTranslation } from "react-i18next";

export default function QuickTransfer() {
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
  return (
    <div className="row gap-3">
      <div className="col-12  container-chart p-3 formPayment">
        <p className="h4">{t("Quick_Transfer")}</p>
        <Box className="d-flex flex-column gap-4 p-4 max-w-md">
          {/* Card Number + Type */}
          <Box className="d-flex gap-3">
            <TextField
              className="w-75"
              variant="outlined"
              placeholder="4436 2548 2654 236"
              sx={styles}
            />
            <TextField className="w-25" select value={"Visa"} sx={styles}>
              <MenuItem value="Visa">{t("Visa")}</MenuItem>
              <MenuItem value="Mastercard">{t("Mastercard")}</MenuItem>
              <MenuItem value="Amex">{t("Amex")}</MenuItem>
            </TextField>
          </Box>

          {/* Buttons */}
          <Box className="d-flex mt-4 gap-2">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6C63FF",
                borderRadius: "12px",
                textTransform: "none",
                px: 3,
                "&:hover": { backgroundColor: "#5A52E0" },
              }}
            >
              {t("Send_Money")}
            </Button>
            <Button
              variant="outlined"
              className="darkText"
              sx={{
                borderRadius: "12px",
                textTransform: "none",
                px: 3,
                borderColor: "#ccc",
                "&:hover": { borderColor: "#888" },
              }}
            >
              {t("Connected")}
            </Button>
          </Box>
        </Box>
      </div>
      <div className="col-12  container-chart p-3 formPayment">
        <p className="h4 mb-4"> {t("Installment")} </p>
        <p className="my-3 greyText  fw-medium ">
          {t("Electricity_Installments")}
        </p>
        <div className="">
          <LinearProgress
            variant="determinate"
            value={60}
            sx={{
              height: 8,
              borderRadius: 5,
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#6950e8",
              },
            }}
          />
          <div className="d-flex justify-content-between align-items-center m-1">
            <p className="m-0 darkText p-description fw-medium ">
              {t("Collected")}
            </p>
            <p className="m-0   p-description">
              <span className="">$200.00</span>/
              <span className="greyText"> $300.00</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
