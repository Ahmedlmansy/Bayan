import React from "react";
import {
  Avatar,
  AvatarGroup,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import Image from "next/image";
export default function Overview() {
  const { t } = useTranslation("common");
  const skills = [
    {
      name: t("Graphic_Design"),
      level: 40,
    },
    {
      name: t("Font_And_Dev"),
      level: 32,
    },
    {
      name: t("Figma_Design"),
      level: 50,
    },
    {
      name: t("Web_Design"),
      level: 32,
    },
  ];
  const teams = [
    {
      name: t("SRB_Themes"),
      description: t("Software_Engineers"),
      formation_date: "2021-01-12",
      members_count: 30,
      icon: (
        <svg focusable="false" viewBox="0 0 24 24">
          <path d="M10.67,3a2,2,0,0,1,1.42.59l7.62,7.62a1,1,0,0,1,.29.7v.18a1,1,0,0,1-.29.7l-7.62,7.62a2,2,0,0,1-1.42.59H4a1,1,0,0,1-1-1V18.51a1,1,0,0,1,.42-.81l3.32-2.37A3,3,0,0,0,8,12.88V11.12A3,3,0,0,0,6.74,8.67L3.42,6.3A1,1,0,0,1,3,5.49V4A1,1,0,0,1,4,3Z"></path>
        </svg>
      ),
    },
    {
      name: t("Team_Uko"),
      description: t("Visual_Designers"),
      formation_date: "2021-01-22",
      members_count: 30,
      icon: (
        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
          <path
            d="M16,5c0.1,0,0.2,0,0.3,0.1l1.7,1.7c1.3,1.3,2.1,3.1,2.1,4.9V13c0,3.3-2.7,6-6,6h-4c-3.3,0-6-2.7-6-6v-1
            c0-1.3,0.6-2.4,1.6-3.2C6.3,8.3,7.1,8,8,8h1.3c0.5,0,1,0.2,1.4,0.6l0.1,0.1c0.6,0.6,1.3,0.9,2.1,0.9c1.7,0,3-1.3,3-3L16,5L16,5
            M16,3L16,3c-1.1,0-2,0.9-2,2v1.6c0,0.6-0.5,1-1,1c-0.2,0-0.5-0.1-0.7-0.3l-0.1-0.1C11.4,6.4,10.4,6,9.3,6H8C6.7,6,5.4,6.4,4.4,7.2
            h0C2.9,8.3,2,10.1,2,12v1c0,4.4,3.6,8,8,8h4c4.4,0,8-3.6,8-8v-1.3c0-2.4-0.9-4.7-2.6-6.4l-1.7-1.7C17.3,3.3,16.6,3,16,3L16,3z
            M7.5,13C6.7,13,6,12.3,6,11.5S6.7,10,7.5,10S9,10.7,9,11.5S8.3,13,7.5,13z M9.5,17C8.7,17,8,16.3,8,15.5S8.7,14,9.5,14
            s1.5,0.7,1.5,1.5S10.3,17,9.5,17z M14.5,17c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S15.3,17,14.5,17z M16.5,13
            c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S17.3,13,16.5,13z"
          ></path>
        </svg>
      ),
    },
    {
      name: t("Team_Olly"),
      description: t("Web_Developers"),
      formation_date: "2021-01-12",
      members_count: 30,
      icon: (
        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12,20a6,6,0,0,1-6-6c0-2.47,1.61-5.28,4.91-8.59L12,4.33Zm.15-18h-.3a.75.75,0,0,0-.53.22L9.5,4C6.86,6.64,4,10.19,4,14a8,8,0,0,0,16,0c0-3.81-2.86-7.36-5.5-10L12.68,2.18A.75.75,0,0,0,12.15,2Z"></path>
        </svg>
      ),
    },
  ];
  const hobbies = [
    t("Dota_2"),
    t("Dog"),
    t("Basketball"),
    t("Football"),
    t("Skateboarding"),
    t("Rock_Climbing"),
    t("Painting"),
    t("Cars"),
    t("Video_Games"),
    t("Climbing"),
  ];
  const posts = [
    {
      title: t("Crypto_is_the_future"),
      category: t("Environment"),
      publishDate: "Jun 21, 2021",
    },
    {
      title: t("Global_Warming_Conclusion"),
      category: t("Environment"),
      publishDate: "Aug 21, 2021",
    },
    {
      title: t("The_International_on_the_way_2021"),
      category: t("Esports"),
      publishDate: "Nov 21, 2021",
    },
  ];
  const portfolio = [
    {
      id: 1,
      title: t("Luxury_Apartment_Interior"),
      category: t("Modern"),
      img: "/images/Portfolio/port-1.png",
      date: "08",
      month: "Feb",
      fullDate: "12.00 Feb 08, 2025",
    },
    {
      id: 2,
      title: t("Corporate_Office_Design"),
      category: t("Minimal"),
      img: "/images/Portfolio/port-2.png",
      date: "15",
      month: "Mar",
      fullDate: "15.30 Mar 15, 2025",
    },
    {
      id: 3,
      title: t("Industrial_Factory_Painting"),
      category: t("Dark"),
      img: "/images/Portfolio/port-3.png",
      date: "26",
      month: "Apr",
      fullDate: "10.00 Apr 26, 2025",
    },
  ];

  const connections = [
    {
      name: t("Ahmed_Hassan"),
      title: t("Developer"),
      img: "/images/Avatar/profile.jpg",
    },
    {
      name: t("Mohammed_Ali"),
      title: t("Developer"),
      img: "/images/Avatar/profile.jpg",
    },
    {
      name: t("Fatima_Ahmed"),
      title: t("Developer"),
      img: "/images/Avatar/profile.jpg",
    },
    {
      name: t("Layla_Mahmoud"),
      title: t("Developer"),
      img: "/images/Avatar/profile.jpg",
    },
  ];
  const details = {
    email: "ahmed.elmansy@gmail.com",
    language: "Arabic, English",
    nickname: "Elmansy",
    joinDate: "September 10th, 2023",
    workHistory: "Shawahid for Finishing & Construction",
    education: "Damietta University - Faculty of Arts",
  };

  const items = [
    {
      icon: <EmailOutlinedIcon color="primary" />,
      label: t("Email"),
      value: details.email,
    },
    {
      icon: <LanguageOutlinedIcon color="secondary" />,
      label: t("Language"),
      value: details.language,
    },
    {
      icon: <PersonOutlineOutlinedIcon sx={{ color: "#ff9800" }} />,
      label: t("Nickname"),
      value: details.nickname,
    },
    {
      icon: <CalendarMonthOutlinedIcon color="success" />,
      label: t("Join_Date"),
      value: details.joinDate,
    },
    {
      icon: <WorkOutlineOutlinedIcon sx={{ color: "#f44336" }} />,
      label: t("Work_History"),
      value: details.workHistory,
    },
    {
      icon: <SchoolOutlinedIcon sx={{ color: "#ffca28" }} />,
      label: t("Education"),
      value: details.education,
    },
  ];
  return (
    <div>
      <div className="row g-3">
        <div className="col-lg-8 p-3 col-md-12 col-sm-12">
          <div className=" my-3 container-chart p-3  Summary">
            <p className="m-0 h3-landing"> {t("Summary")} </p>
            <p className="my-2 mx-0 greyText p-description">
              {t("SummaryDescription_one")}
            </p>
            <p className="my-2 mx-0 greyText p-description">
              {t("SummaryDescription_two")}
            </p>
          </div>
          <div className=" my-3 p-3 container-chart g-0 row skills">
            <p className="m-0 h3-landing"> {t("Skills")} </p>
            {skills.map((skill, i) => {
              return (
                <div className="p-2 col-lg-4 col-md-6 col-sm-12" key={i}>
                  <div className="skill   ps-2 pe-0">
                    <p className="m-0 p-description fw-bold darkText">
                      {skill.name}
                    </p>
                    <span className="p-description fw-bold greyText">
                      {skill.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-3 p-3 container-chart teams">
            <p className="h3-landing"> {t("Teams")} </p>
            <TableContainer component={Paper} className="table-container">
              <Table className="custom-table">
                <TableBody>
                  {teams.map((team) => (
                    <TableRow key={team.name}>
                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <div className="arrow">{team.icon}</div>
                          <div>
                            <div className="source-name">{team.name}</div>
                            <div className="source-category">
                              {team.description}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="table-cell">
                        <p className="m-0">
                          {" "}
                          {t("Formed")} {team.formation_date}
                        </p>
                      </TableCell>
                      <TableCell className="table-cell ">
                        <AvatarGroup max={3}>
                          <Avatar alt="Remy Sharp" src="/images/avatar/1.png" />
                          <Avatar
                            alt="Travis Howard"
                            src="/images/avatar/2.png"
                          />
                          <Avatar
                            alt="Cindy Baker"
                            src="/images/avatar/3.png"
                          />
                          <Avatar
                            alt="Agnes Walker"
                            src="/images/avatar/1.png"
                          />
                        </AvatarGroup>
                      </TableCell>
                      <TableCell className="table-cell ">
                        <span className="members">
                          {" "}
                          {team.members_count} {t("members")}{" "}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className=" my-3 p-3 container-chart hobbies">
            <p className="m-0 h3-landing"> {t("Hobbies")} </p>
            <div className="mt-2">
              {hobbies.map((h, i) => {
                return (
                  <span
                    key={i}
                    className=" hoppy p-2 darkText  m-1 p-description"
                  >
                    {h}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="my-3 p-3 container-chart posts">
            <div className="d-flex justify-content-between align-items-center">
              <p className="m-0 h3-landing">{t("Posts")}</p>
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{
                  borderColor: "#000",
                  color: "#000",
                  "&:hover": {
                    borderColor: "#cccc",
                  },
                }}
              >
                {t("Create_a_Post")}
              </Button>
            </div>
            {posts.map((post, i) => {
              return (
                <div
                  className="post mt-3 d-flex justify-content-between align-items-center"
                  key={i}
                >
                  <div className="">
                    <p className="m-0 fw-bold darkText p-description">
                      {post.title}
                    </p>
                    <p className="m-0 p-description greyText">
                      {post.category}{" "}
                    </p>
                    <p
                      className="m-0  source-category"
                      style={{ fontSize: 12 }}
                    >
                      {" "}
                      <CalendarMonthIcon sx={{ fontSize: 12 }} />{" "}
                      {t("Publish_on")}
                      {post.publishDate}
                    </p>
                  </div>
                  <div className="">
                    <Image
                      alt=""
                      src={`/images/Posts/${i + 1}.png`}
                      width={120}
                      height={75}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-3 p-3 container-chart portfolio">
            <div className="d-flex justify-content-between align-items-center">
              <p className="m-0 h3-landing">{t("Portfolio")}</p>
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{
                  borderColor: "#000",
                  color: "#000",
                  "&:hover": {
                    borderColor: "#cccc",
                  },
                }}
              >
                {t("Add_New")}
              </Button>
            </div>
            <div className="row mt-2 g-3">
              {portfolio.map((item) => {
                return (
                  <div
                    className="col-lg-4 col-md-12 col-sm-12 p-"
                    key={item.id}
                  >
                    <div className="portfolio-item w-100">
                      <div className="position-relative  ph-portolio">
                        <div className="datePortolio">
                          <span className="d-block p-description">
                            {item.date}
                          </span>
                          <span className="d-block p-description">
                            {item.month}
                          </span>
                        </div>
                        <img alt=" " src={item.img} className="w-100" />
                      </div>
                      <div className="d-flex my-2 justify-content-between align-items-center">
                        <div className="type">
                          <p className="m-0 px-1  py-1"> {item.category} </p>
                        </div>
                        <div className="iconsSaved d-flex gap-1">
                          <div className="">
                            {" "}
                            <VerticalAlignBottomIcon />{" "}
                          </div>
                          <div className="">
                            <FavoriteBorderIcon />
                          </div>
                        </div>
                      </div>
                      <div className="name_deta">
                        <p className="m-0 fw-bold p-description darkText ">
                          {item.title}
                        </p>
                        <p className="m-0 p-description source-category">
                          {" "}
                          {item.fullDate}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className=" my-3 p-3 container-chart connections">
            <p className="m-0 h3-landing">{t("My_Connections")}</p>
            {connections.map((con, i) => {
              return (
                <div className="d-flex my-3 gap-2" key={i}>
                  <div className="imgConnections">
                    <img
                      src={con.img}
                      className="w-100"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className="bestConnections">
                    <p className="m-0 fw-bold darkText"> {con.name}</p>
                    <p className="m-0 source-category">{con.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" container-chart my-3 p-3  additional_Details">
            <p className="m-0 h3-landing">{t("Additional_Details")}</p>
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "6px 0",
                }}
              >
                <div
                  style={{
                    background: "#f6f6f6",
                    padding: "8px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "38px",
                    height: "38px",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#888",
                      margin: 0,
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      margin: 0,
                    }}
                    className="darkText"
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
