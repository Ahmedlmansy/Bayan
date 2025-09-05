import React from "react";
import { useTranslation } from "react-i18next";

export default function TopActivity() {
  const { t } = useTranslation("common");
  return (
    <div>
      <p className="h4">{t("Top_Activity")}</p>
      <div className="allActivity">
        <div className="topActive">
          <div className="dataActive">
            <p className="m-0">$17,25,258.69</p>
            <p className="m-0">{t("Asia")}</p>
          </div>
        </div>
        <div className="secondActive">
          <div className="dataActive">
            <p className="m-0">$2,525.25</p>
            <p className="m-0">{t("Europe")}</p>
          </div>
        </div>
        <div className="thirdActive">
          <div className="dataActive">
            <p className="m-0">$525</p>
            <p className="m-0">{t("Africa")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
