import React from "react";
import { useTranslation } from "react-i18next";
import SimpleApexChart from "../Chart";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EditNoteIcon from "@mui/icons-material/EditNote";
export default function MostLeads() {
  const { t } = useTranslation("common");
  const donutData = {
    series: [60, 10, 20, 10],
    options: {
      labels: [t("Email"), t("Call"), t("Social"), t("Other")],
      colors: ["#674FE4", "#11B483", "#495361", "#CCD0D6"],
      chart: {
        type: "donut",
        width: 100,
        height: 100,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
          },
        },
      },
      legend: {
        show: false,
      },

      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 150,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  const leadsData = [
    {
      name: t("Email"),
      current: 500,
      target: 1000,
      percentage: "60%",
      icon: <EmailIcon sx={{ color: "#674FE4" }} />,
    },
    {
      name: t("Call"),
      current: 360,
      target: 965,
      percentage: "10%",
      icon: <CallIcon sx={{ color: "#11B483" }} />,
    },
    {
      name: t("Social"),
      current: 3684,
      target: 5000,
      percentage: "20%",
      icon: <PersonOutlineOutlinedIcon sx={{ color: "#495361" }} />,
    },
    {
      name: t("Other"),
      current: 469,
      target: 678,
      percentage: "10%",
      icon: <EditNoteIcon sx={{ color: "#CCD0D6" }} />,
    },
  ];

  return (
    <div className="h-100 d-flex flex-column justify-content-around">
      <div className="d-flex justify-content-center mt-3">
        <div className="" style={{ width: "150px" }}>
          <SimpleApexChart
            type="donut"
            series={donutData.series}
            options={donutData.options}
            height={150}
          />
        </div>
      </div>
      <div className="">
        {leadsData.map((lead, i) => {
          return (
            <div className="dount-data" key={i}>
              <div className="d-flex  gap-2">
                {lead.icon}
                <p className="m-0">
                  <span className="nameBrowser">{lead.name}</span>
                </p>
              </div>
              <div className="p-description grey-des m-0">
                <span className="mx-1">{lead.current}</span>
                {t("vs")}
                <span className="mx-1">{lead.target}</span>
              </div>
              <div className="data-percentage">
                <p className="m-0">
                  <span className="p-description darkText">
                    {lead.percentage}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
