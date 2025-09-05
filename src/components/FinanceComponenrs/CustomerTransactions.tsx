import React from "react";
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
import { useTranslation } from "react-i18next";
export default function CustomerTransactions() {
  const { t } = useTranslation("common");
  const transactions = [
    {
      id: 1,
      name: "Arikunn",
      transactionId: "sbACR356LD",
      date: "31 Aug, 2022",
      dateFormatted: "2022-08-31",
      time: "10:30 AM",
      time24h: "10:30",
      amount: "$356.25",
      amountNumeric: 356.25,
    },
    {
      id: 2,
      name: "Ikauwis",
      transactionId: "izilMXDtjF",
      date: "30 Aug, 2022",
      dateFormatted: "2022-08-30",
      time: "01:30 PM",
      time24h: "13:30",
      amount: "$165.58",
      amountNumeric: 165.58,
    },
    {
      id: 3,
      name: "Dayet",
      transactionId: "Bfe_Rnaj3d",
      date: "29 Aug, 2022",
      dateFormatted: "2022-08-29",
      time: "07:30 PM",
      time24h: "19:30",
      amount: "$463.25",
      amountNumeric: 463.25,
    },
    {
      id: 4,
      name: "Ikauwis",
      transactionId: "3a2QN5oaji",
      date: "28 Aug, 2022",
      dateFormatted: "2022-08-28",
      time: "04:30 PM",
      time24h: "16:30",
      amount: "$185.58",
      amountNumeric: 185.58,
    },
  ];
  return (
    <div>
      <p className="my-3 h4">{t("Customer_Transactions")}</p>
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell">
                {t("Transaction")}
              </TableCell>
              <TableCell className="table-head-cell">{t("Time")}</TableCell>
              <TableCell className="table-head-cell">{t("Date")}</TableCell>
              <TableCell className="table-head-cell">{t("Amount")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((Transfer) => (
              <TableRow key={Transfer.id}>
                <TableCell>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <Image
                      width={40}
                      height={40}
                      src={`/images/Avatar/${Transfer.id}.png`}
                      alt={Transfer.name}
                    />
                    <div>
                      <div className="source-name">{Transfer.name}</div>
                      <div className="source-category">
                        {Transfer.transactionId}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="table-cell">
                  <p className="m-0">{Transfer.dateFormatted}</p>
                </TableCell>
                <TableCell className="table-cell ">{Transfer.time}</TableCell>
                <TableCell className="table-cell ">
                  <span> {Transfer.amount} </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
