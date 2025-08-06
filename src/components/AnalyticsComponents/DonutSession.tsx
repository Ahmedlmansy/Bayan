import React from "react";
import SimpleApexChart from "../Chart";
import Image from "next/image";
import { useTranslation } from "react-i18next";
export default function DonutSession() {
  const { t } = useTranslation("common");
  const areaChartData = {
    series: [60, 10, 30],
    options: {
      labels: ["Chrome", "Opera Mini", "Mozilla"],
      chart: {
        type: "donut",
        width: 100, // تحديد العرض
        height: 100, // تحديد الارتفاع
      },
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
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
  const browserSessions = [
    {
      name: "Chrome",
      icon: "/images/chrome.svg",
      percentage: 60,
      change: "3.19%",
      changeType: "high",
      color: "#008CF5",
    },
    {
      name: "Opera Mini",
      icon: "/images/opera.svg",
      percentage: 10,
      change: "1.98%",
      changeType: "low",
      color: "#00DE92",
    },
    {
      name: "Mozilla",
      icon: "/images/mozilla.svg",
      percentage: 30,
      change: "2.23%",
      changeType: "high",
      color: "#F8AC18",
    },
  ];

  return (
    <div>
      <div className="donut-session">
        <p className="h3-landing mb-1">{t("Session_by_browser")}</p>
      </div>
      <div className="donut-chart">
        <SimpleApexChart
          options={areaChartData.options}
          series={areaChartData.series}
          type="donut"
        />
      </div>
      <div className="firstSession">
        {browserSessions.map((session, i) => {
          return (
            <div className="dount-data" key={i}>
              <div className="d-flex  gap-2">
                <Image src={session.icon} alt="" width={30} height={30} />
                <p className="m-0">
                  <span className="nameBrowser">{session.name}</span>
                </p>
              </div>

              <div className="data-percentage">
                <p className="p-description grey-des m-0">
                  <span
                    className="color-dot"
                    style={{ backgroundColor: session.color }}
                  ></span>{" "}
                  {session.percentage}%
                </p>
                <p className="m-0">
                  <span className={session.changeType}>{session.change}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
