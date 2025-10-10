"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Tab, Tabs } from "@mui/material";
import Overview from "@/components/ProfileComponents/Overview";
import Projects from "@/components/ProfileComponents/Projects";
import Compaigns from "@/components/ProfileComponents/Compaigns";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
  const { t } = useTranslation("common");
  const userName = t("Ahmed_Mahmoud");
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="row gap-3 p-3">
        <div className="col-12 ">
          <div className="publicInfo ">
            <div className="coverPh">
              <img src="/images/user-cover-pic.png" alt="cover" className="" />
            </div>
            <div className="info text-center">
              <div className="ph-name">
                <Image
                  alt=""
                  src={"/images/users/user-1.png"}
                  width={100}
                  height={100}
                />
              </div>
              <p className="h4 my-2">{userName}</p>
              <div className="d-flex justify-content-center my-4 gap-3 align-items-center ">
                <p className="m-0 greyText  p-description">
                  <span>
                    <ApartmentIcon fontSize="small" className="me-1" />
                  </span>
                  <span> {t("Developer")} </span>
                </p>
                <p className="m-0 greyText  p-description">
                  <span>
                    <LocationOnIcon fontSize="small" className="me-1" />
                  </span>
                  <span> {t("Egypt-New_Damietta")}</span>
                </p>
                <p className="m-0 greyText  p-description">
                  <span>
                    <CalendarMonthIcon fontSize="small" className="me-1" />
                  </span>
                  <span> {t("Joined_March_17")}</span>
                </p>
              </div>
              <div className=" statistics my-4 d-flex justify-content-center gap-3 align-items-center">
                <div className="">
                  <p className="m-0 h3-landing mainText">{t("$4,550")}</p>
                  <p className="m-0 greyText">{t("Earnings")}</p>
                </div>
                <div className="">
                  <p className="m-0 h3-landing mainText">{t("60")}</p>
                  <p className="m-0 greyText">{t("Projects")}</p>
                </div>
                <div className="">
                  <p className="m-0 h3-landing warningText">{t("$2,800")}</p>
                  <p className="m-0 greyText">{t("Success_Rate")}</p>
                </div>
              </div>
            </div>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label={t("Overview")} {...a11yProps(0)} />
              <Tab label={t("Projects")} {...a11yProps(1)} />
              <Tab label={t("Compaigns")} {...a11yProps(2)} />
              <Tab label={t("Documents")} {...a11yProps(3)} />
              <Tab label={t("Connections")} {...a11yProps(4)} />
              <Tab label={t("Activity")} {...a11yProps(5)} />
            </Tabs>
          </div>
          <div className="">
            <CustomTabPanel value={value} index={0}>
              <Overview />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Projects />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Compaigns />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              Documents
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              Connections
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              Activity
            </CustomTabPanel>
          </div>
        </div>
      </div>
    </div>
  );
}
