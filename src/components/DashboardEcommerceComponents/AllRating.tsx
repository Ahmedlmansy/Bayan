import { LinearProgress, Rating } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function AllRating() {
  const countStar = [
    { stars: "5 Star", percentage: 50 },
    { stars: "4 Star", percentage: 66 },
    { stars: "3 Star", percentage: 90 },
    { stars: "2 Star", percentage: 12 },
    { stars: "1 Star", percentage: 5 },
  ];
  const { t } = useTranslation("common");
  return (
    <div className="">
      <div className=" text-center allRating">
        <Rating
          dir="ltr"
          readOnly
          name="read-only"
          defaultValue={4.5}
          precision={0.5}
          size="medium"
        />
        <h2> 4.5/5 </h2>

        <p>
          {" "}
          {t("total")} 650 {t("customer_reviews")}
        </p>
      </div>
      {countStar.map((star) => {
        return (
          <div
            key={star.stars}
            className="my-2 d-flex justify-content-between my-3 px-2 align-items-center"
          >
            <div className="countStar">
              <p className="m-0 greyText ">{star.stars}</p>
            </div>
            <div className="w-75">
              <LinearProgress
                variant="determinate"
                value={star.percentage}
                sx={{
                  width: "100%",
                  height: 8,
                  borderRadius: 5,
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#6950e8",
                  },
                }}
              />
            </div>
            <div className="mx-3">
              <span className="greyText">{star.percentage}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
