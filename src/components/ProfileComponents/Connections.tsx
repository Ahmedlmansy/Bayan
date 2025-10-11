import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Connections() {
  const { t } = useTranslation("common");
  const designers = [
    {
      id: 1,
      name: "Ava Johnson",
      role: "Visual Designer",
      income: 14500,
      avgIncome: 14500,
      connected: false,
      img: "/images/users/user-1.png",
    },
    {
      id: 2,
      name: "Liam Carter",
      role: "UX/UI Designer",
      income: 18700,
      avgIncome: 17300,
      connected: true,
      img: "/images/users/user-2.png",
    },
    {
      id: 3,
      name: "Sophia Martinez",
      role: "Graphic Designer",
      income: 16200,
      avgIncome: 15200,
      connected: false,
      img: "/images/users/user-3.png",
    },
    {
      id: 4,
      name: "Noah Williams",
      role: "Product Designer",
      income: 21000,
      avgIncome: 19800,
      connected: true,
      img: "/images/users/user-1.png",
    },
    {
      id: 5,
      name: "Olivia Smith",
      role: "Creative Director",
      income: 23000,
      avgIncome: 22500,
      connected: false,
      img: "/images/users/user-2.png",
    },
    {
      id: 6,
      name: "Ethan Brown",
      role: "Visual Designer",
      income: 15000,
      avgIncome: 14700,
      connected: true,
      img: "/images/users/user-3.png",
    },
  ];

  return (
    <div>
      <div className="row g-3">
        {designers.map((con) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12" key={con.id}>
              <div className="p-3 container-chart text-center">
                <div className="infoConn">
                  <img src={con.img} width={40} height={40} />
                  <p className="my-2 p-description fw-bold darkText">
                    {con.name}
                  </p>
                  <p className="m-0 p-description greyText"> {con.role}</p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="statistics my-4 d-flex justify-content-center gap-3 align-items-center">
                    <div className="">
                      <svg
                        focusable="false"
                        fill="#6b7280"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8,13v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,1,1-1H7A1,1,0,0,1,8,13Zm5-9H11a1,1,0,0,0-1,1V19a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V5A1,1,0,0,0,13,4Zm6,4H17a1,1,0,0,0-1,1V19a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V9A1,1,0,0,0,19,8Z"></path>
                      </svg>
                      <p className="m-0 p-description darkText">
                        {" "}
                        {con.income}{" "}
                      </p>
                      <p className="m-0 p-description greyText">
                        {" "}
                        {t("Income")}{" "}
                      </p>
                    </div>
                    <div className="">
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="#6b7280"
                      >
                        <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM13,7V6.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V7A2,2,0,0,0,9,9v.81a2,2,0,0,0,.73,1.54l3.43,2.83a.22.22,0,0,1,.09.19v.88h-2.5v-1a.5.5,0,0,0-.5-.5H9.5a.5.5,0,0,0-.5.5V15a2,2,0,0,0,2,2v.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V17a2,2,0,0,0,2-2v-.81a2,2,0,0,0-.73-1.54L10.84,9.82a.22.22,0,0,1-.09-.19V8.75h2.5v1a.5.5,0,0,0,.5.5h.75a.5.5,0,0,0,.5-.5V9A2,2,0,0,0,13,7Z"></path>
                      </svg>
                      <p className="m-0 p-description darkText">
                        {" "}
                        {con.avgIncome}
                      </p>
                      <p className="m-0 p-description greyText">
                        {" "}
                        {t("Avg_Income")}{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="btn-contect">
                  {con.connected ? (
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
                      {t("Connected")}
                    </Button>
                  ) : (
                    <Button
                      disabled
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
                      {t("Connect")}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
