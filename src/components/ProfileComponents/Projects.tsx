import { Avatar, AvatarGroup, LinearProgress } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation("common");
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      des: "A complete online store built with React, Redux Toolkit, and Node.js including product management and secure payments.",
      iconProject: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#febf06"
          viewBox="0 0 640 640"
        >
          <path d="M320 64C355.3 64 384 92.7 384 128C384 163.3 355.3 192 320 192C284.7 192 256 163.3 256 128C256 92.7 284.7 64 320 64zM416 376C416 401 403.3 423 384 435.9L384 528C384 554.5 362.5 576 336 576L304 576C277.5 576 256 554.5 256 528L256 435.9C236.7 423 224 401 224 376L224 336C224 283 267 240 320 240C373 240 416 283 416 336L416 376zM160 96C190.9 96 216 121.1 216 152C216 182.9 190.9 208 160 208C129.1 208 104 182.9 104 152C104 121.1 129.1 96 160 96zM176 336L176 368C176 400.5 188.1 430.1 208 452.7L208 528C208 529.2 208 530.5 208.1 531.7C199.6 539.3 188.4 544 176 544L144 544C117.5 544 96 522.5 96 496L96 439.4C76.9 428.4 64 407.7 64 384L64 352C64 299 107 256 160 256C172.7 256 184.8 258.5 195.9 262.9C183.3 284.3 176 309.3 176 336zM432 528L432 452.7C451.9 430.2 464 400.5 464 368L464 336C464 309.3 456.7 284.4 444.1 262.9C455.2 258.4 467.3 256 480 256C533 256 576 299 576 352L576 384C576 407.7 563.1 428.4 544 439.4L544 496C544 522.5 522.5 544 496 544L464 544C451.7 544 440.4 539.4 431.9 531.7C431.9 530.5 432 529.2 432 528zM480 96C510.9 96 536 121.1 536 152C536 182.9 510.9 208 480 208C449.1 208 424 182.9 424 152C424 121.1 449.1 96 480 96z" />
        </svg>
      ),
      statusProjects: "Running",
      color: "#febf06",
      progress: 72,
      remainingDays: 8,
    },
    {
      id: 2,
      name: "Company Portfolio Website",
      des: "A responsive corporate portfolio website showcasing services, team, and previous projects using Next.js and Tailwind CSS.",
      iconProject: "💼",
      statusProjects: "Completed",
      color: "#11b886",
      progress: 100,
      remainingDays: 0,
    },
    {
      id: 3,
      name: "Mobile App Dashboard",
      des: "An admin dashboard to monitor mobile app usage analytics and manage content, built with React and Material UI.",
      iconProject: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#6950e8"
          viewBox="0 0 640 640"
        >
          <path d="M272 112C272 85.5 293.5 64 320 64C346.5 64 368 85.5 368 112C368 138.5 346.5 160 320 160C293.5 160 272 138.5 272 112zM272 528C272 501.5 293.5 480 320 480C346.5 480 368 501.5 368 528C368 554.5 346.5 576 320 576C293.5 576 272 554.5 272 528zM112 272C138.5 272 160 293.5 160 320C160 346.5 138.5 368 112 368C85.5 368 64 346.5 64 320C64 293.5 85.5 272 112 272zM480 320C480 293.5 501.5 272 528 272C554.5 272 576 293.5 576 320C576 346.5 554.5 368 528 368C501.5 368 480 346.5 480 320zM139 433.1C157.8 414.3 188.1 414.3 206.9 433.1C225.7 451.9 225.7 482.2 206.9 501C188.1 519.8 157.8 519.8 139 501C120.2 482.2 120.2 451.9 139 433.1zM139 139C157.8 120.2 188.1 120.2 206.9 139C225.7 157.8 225.7 188.1 206.9 206.9C188.1 225.7 157.8 225.7 139 206.9C120.2 188.1 120.2 157.8 139 139zM501 433.1C519.8 451.9 519.8 482.2 501 501C482.2 519.8 451.9 519.8 433.1 501C414.3 482.2 414.3 451.9 433.1 433.1C451.9 414.3 482.2 414.3 501 433.1z" />
        </svg>
      ),
      statusProjects: "Pending",
      color: "#6950e8",
      progress: 0,
      remainingDays: 18,
    },
    {
      id: 4,
      name: "Learning Management System",
      des: "A web-based LMS that allows teachers to upload lessons, track student progress, and manage assignments easily.",
      iconProject: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#febf06"
          viewBox="0 0 640 640"
        >
          <path d="M320 64C355.3 64 384 92.7 384 128C384 163.3 355.3 192 320 192C284.7 192 256 163.3 256 128C256 92.7 284.7 64 320 64zM416 376C416 401 403.3 423 384 435.9L384 528C384 554.5 362.5 576 336 576L304 576C277.5 576 256 554.5 256 528L256 435.9C236.7 423 224 401 224 376L224 336C224 283 267 240 320 240C373 240 416 283 416 336L416 376zM160 96C190.9 96 216 121.1 216 152C216 182.9 190.9 208 160 208C129.1 208 104 182.9 104 152C104 121.1 129.1 96 160 96zM176 336L176 368C176 400.5 188.1 430.1 208 452.7L208 528C208 529.2 208 530.5 208.1 531.7C199.6 539.3 188.4 544 176 544L144 544C117.5 544 96 522.5 96 496L96 439.4C76.9 428.4 64 407.7 64 384L64 352C64 299 107 256 160 256C172.7 256 184.8 258.5 195.9 262.9C183.3 284.3 176 309.3 176 336zM432 528L432 452.7C451.9 430.2 464 400.5 464 368L464 336C464 309.3 456.7 284.4 444.1 262.9C455.2 258.4 467.3 256 480 256C533 256 576 299 576 352L576 384C576 407.7 563.1 428.4 544 439.4L544 496C544 522.5 522.5 544 496 544L464 544C451.7 544 440.4 539.4 431.9 531.7C431.9 530.5 432 529.2 432 528zM480 96C510.9 96 536 121.1 536 152C536 182.9 510.9 208 480 208C449.1 208 424 182.9 424 152C424 121.1 449.1 96 480 96z" />
        </svg>
      ),
      statusProjects: "Running",
      color: "#febf06",
      progress: 56,
      remainingDays: 12,
    },
    {
      id: 5,
      name: "Social Media App",
      des: "A full-stack social media app with real-time chat, user profiles, and post interactions using MERN stack.",
      iconProject: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#11b886"
          viewBox="0 0 640 640"
        >
          <path d="M377.9 130.8C388.3 116.5 385.1 96.5 370.8 86.1C356.5 75.7 336.5 78.9 326.1 93.2L220.1 238.9L182.6 201.4C170.1 188.9 149.8 188.9 137.3 201.4C124.8 213.9 124.8 234.2 137.3 246.7L201.3 310.7C207.9 317.3 217.1 320.7 226.4 320C235.7 319.3 244.3 314.5 249.8 306.9L377.8 130.9zM505.9 266.8C516.3 252.5 513.1 232.5 498.8 222.1C484.5 211.7 464.5 214.9 454.1 229.2L284.1 462.9L214.6 393.4C202.1 380.9 181.8 380.9 169.3 393.4C156.8 405.9 156.8 426.2 169.3 438.7L265.3 534.7C271.9 541.3 281.1 544.7 290.4 544C299.7 543.3 308.3 538.5 313.8 530.9L505.8 266.9z" />
        </svg>
      ),
      statusProjects: "Completed",
      color: "#11b886",
      progress: 100,
      remainingDays: 0,
    },
    {
      id: 6,
      name: "Freelance Management System",
      des: "A system to connect clients with freelancers, featuring project tracking, payments, and performance reports.",
      iconProject: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#6950e8"
          viewBox="0 0 640 640"
        >
          <path d="M272 112C272 85.5 293.5 64 320 64C346.5 64 368 85.5 368 112C368 138.5 346.5 160 320 160C293.5 160 272 138.5 272 112zM272 528C272 501.5 293.5 480 320 480C346.5 480 368 501.5 368 528C368 554.5 346.5 576 320 576C293.5 576 272 554.5 272 528zM112 272C138.5 272 160 293.5 160 320C160 346.5 138.5 368 112 368C85.5 368 64 346.5 64 320C64 293.5 85.5 272 112 272zM480 320C480 293.5 501.5 272 528 272C554.5 272 576 293.5 576 320C576 346.5 554.5 368 528 368C501.5 368 480 346.5 480 320zM139 433.1C157.8 414.3 188.1 414.3 206.9 433.1C225.7 451.9 225.7 482.2 206.9 501C188.1 519.8 157.8 519.8 139 501C120.2 482.2 120.2 451.9 139 433.1zM139 139C157.8 120.2 188.1 120.2 206.9 139C225.7 157.8 225.7 188.1 206.9 206.9C188.1 225.7 157.8 225.7 139 206.9C120.2 188.1 120.2 157.8 139 139zM501 433.1C519.8 451.9 519.8 482.2 501 501C482.2 519.8 451.9 519.8 433.1 501C414.3 482.2 414.3 451.9 433.1 433.1C451.9 414.3 482.2 414.3 501 433.1z" />
        </svg>
      ),
      statusProjects: "Pending",
      color: "#6950e8",
      progress: 0,
      remainingDays: 20,
    },
  ];

  return (
    <div>
      <div className="row g-3">
        {projects.map((project) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12" key={project.id}>
              <div className="container-chart p-3">
                <div className="statusProject d-flex justify-content-between align-items-center">
                  <div className="arrow">{project.iconProject}</div>
                  <div
                    className="type"
                    style={{ backgroundColor: project.color }}
                  >
                    <p className="m-0 px-1 py-1"> {project.statusProjects} </p>
                  </div>
                </div>
                <div className="">
                  <p className="my-3 h3-landing">{project.name}</p>
                  <p className="m-0 greyText">{project.des}</p>
                </div>
                <div className="d-flex my-3 gap-2 jstify-content-center align-items-center">
                  <LinearProgress
                    variant="determinate"
                    value={project.progress}
                    sx={{
                      width: "90%",
                      height: 10,
                      borderRadius: 5,
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: project.color,
                      },
                    }}
                  />
                  <span className="darkText"> {project.progress}%</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <AvatarGroup total={3} max={3}>
                      <Avatar alt="Remy Sharp" src="/images/Avatar/1.png" />
                      <Avatar alt="Travis Howard" src="/images/Avatar/2.png" />
                    </AvatarGroup>
                  </div>
                  <div className="">
                    <span className="greyText">
                      {" "}
                      {project.remainingDays} {t("Days_Left")}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
