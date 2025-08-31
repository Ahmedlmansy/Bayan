import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function CheckUpdate() {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="text-center">
        <Image
          src={"/images/check-update.svg"}
          alt=""
          width={200}
          height={200}
        />
        <div className="">
          <h6 className="my-2 ">{t("We_have_big_update_for_you")}</h6>
        </div>
        <Button
          variant="contained"
          sx={{ backgroundColor: "rgb(105 80 232 / 1)" }}
        >
          {t("Check_Update")}
        </Button>
      </div>
    </div>
  );
}
