import {
  Avatar,
  AvatarGroup,
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

export default function AllCampaigns() {
  const { t } = useTranslation("common");
  const campaigns = [
    {
      id: 1,
      name: "Valentine Day",
      date: "14th February, 2022",
      status: "Live Now",
      classStatus: "shipped",
      duration: "14 Feb - 21 Feb, 2022",
    },
    {
      id: 2,
      name: "Mother's Day",
      date: "2nd April, 2022",
      dateFormatted: "2022-04-02",
      status: "Reviewing",
      classStatus: "confirmed",
      duration: "2 Apr - 5 Apr, 2022",
    },
    {
      id: 3,
      name: "Cyber Monday",
      date: "17th January, 2022",
      dateFormatted: "2022-01-17",
      status: "Paused",
      classStatus: "rejected",
      duration: "17 Jan - 21 Jan, 2022",
    },
    {
      id: 4,
      name: "Valentine Day",
      date: "14th February, 2022",
      dateFormatted: "2022-02-14",
      status: "Live Now",
      classStatus: "shipped",
      duration: "14 Feb - 21 Feb, 2022",
    },
  ];
  return (
    <div>
      {" "}
      <div className="desSociacl ">
        <p className="h4 my-1">{t("All_Campaigns")}</p>
        <p className="m-0 source-category">{t("+20_Active_Campaign")}</p>
      </div>
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell">{t("Name")}</TableCell>
              <TableCell className="table-head-cell">
                {t("team_member")}
              </TableCell>
              <TableCell className="table-head-cell">{t("status")}</TableCell>
              <TableCell className="table-head-cell">{t("Duration")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <Image
                      width={40}
                      height={40}
                      src={`/images/Campaigns/${campaign.id}.png`}
                      alt={campaign.name}
                    />
                    <div>
                      <div className="source-name">{campaign.name}</div>
                      <div className="source-category">{campaign.date}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="table-cell">
                  <div className="d-flex">
                    <AvatarGroup total={5} max={4}>
                      <Avatar alt="Remy Sharp" src="/images/Avatar/1.png" />
                      <Avatar alt="Travis Howard" src="/images/Avatar/2.png" />
                      <Avatar alt="Agnes Walker" src="/images/Avatar/3.png" />
                    </AvatarGroup>
                  </div>
                </TableCell>
                <TableCell className="table-cell ">
                  <span className={`${campaign.classStatus} statusOrders`}>
                    {campaign.status}
                  </span>
                </TableCell>
                <TableCell className="table-cell ">
                  <span> {campaign.duration} </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
