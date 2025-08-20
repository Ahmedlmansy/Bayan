import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function DealForecast() {
  const { t } = useTranslation("common");
  const dealForecastData = [
    {
      id: 1,
      name: "Astole Banne",
      ownerAmount: "$25,360",
      ownerAmountNumeric: 25360,
      dealWonAmount: "$25,000",
      dealWonAmountNumeric: 25000,
      difference: "$360",
      differenceNumeric: 360,
      avatar: "1",
    },
    {
      id: 2,
      name: "Jhone Abela",
      ownerAmount: "$25,360",
      ownerAmountNumeric: 25360,
      dealWonAmount: "$25,000",
      dealWonAmountNumeric: 25000,
      difference: "$360",
      differenceNumeric: 360,
      avatar: "2",
    },
    {
      id: 3,
      name: "Lisa Been",
      ownerAmount: "$25,360",
      ownerAmountNumeric: 25360,
      dealWonAmount: "$25,000",
      dealWonAmountNumeric: 25000,
      difference: "$360",
      differenceNumeric: 360,
      avatar: "3",
    },
  ];
  return (
    <div>
      <p className="h4">{t("Deal_Forecast_by_Owner")}</p>
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell">{t("Owner")}</TableCell>
              <TableCell className="table-head-cell">{t("Deal_Won")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dealForecastData.map((infoSelas) => (
              <TableRow key={infoSelas.id}>
                <TableCell>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div className="selerIcon">
                      <Image
                        width={40}
                        height={40}
                        src={`/images/Avatar/${infoSelas.avatar}.png`}
                        alt={infoSelas.name}
                      />
                    </div>
                    <div>
                      <div className="source-name">{infoSelas.name}</div>
                      <div className="source-category">
                        {infoSelas.ownerAmount}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="table-cell">
                  {infoSelas.dealWonAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
