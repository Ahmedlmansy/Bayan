import { Step, StepContent, StepLabel, Stepper } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Activity() {
  return (
    <div>
      <div className="p-3  container-chart">
        <Stepper orientation="vertical" connector={null}>
          <Step key={1}>
            <StepLabel>
              <div className="">
                <p className="m-0 p-description fw-bold darkText">
                  There are 2 new tasks for you in Alphp Plus project:
                </p>
                <p className="m-0 p-description greyText">
                  Added at 4.23 PM by{" "}
                  <span>
                    <Image
                      src={"/images/Avatar/1.png"}
                      alt=""
                      width={20}
                      height={20}
                      style={{ borderRadius: "50%" }}
                    />
                  </span>
                </p>
              </div>
            </StepLabel>
            <StepContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut,
              aliquam earum in fugit quos aspernatur non, necessitatibus,
              reiciendis saepe esse veniam ea accusamus repellendus at
              consequuntur praesentium iste tempore!
            </StepContent>
          </Step>
          <Step key={2}>
            <StepLabel>
              <div className="">
                <p className="m-0 p-description fw-bold darkText">
                  Invitation for crafting engaging designs that speak human
                  workshop
                </p>
                <p className="m-0 p-description greyText">
                  Added at 4.23 PM by{" "}
                  <span>
                    <Image
                      src={"/images/Avatar/2.png"}
                      alt=""
                      width={20}
                      height={20}
                      style={{ borderRadius: "50%" }}
                    />
                  </span>
                </p>
              </div>
            </StepLabel>
            <StepContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut,
              aliquam earum in fugit quos aspernatur non, necessitatibus,
              reiciendis saepe esse veniam ea accusamus repellendus at
              consequuntur praesentium iste tempore!
            </StepContent>
          </Step>
          <Step key={3}>
            <StepLabel>
              <div className="">
                <p className="m-0 p-description fw-bold darkText">
                  Invitation for crafting engaging designs that speak human
                  workshop
                </p>
                <p className="m-0 p-description greyText">
                  Added at 4.23 PM by{" "}
                  <span>
                    <Image
                      src={"/images/Avatar/3.png"}
                      alt=""
                      width={20}
                      height={20}
                      style={{ borderRadius: "50%" }}
                    />
                  </span>
                </p>
              </div>
            </StepLabel>
            <StepContent></StepContent>
          </Step>
          <Step key={4}>
            <StepLabel>
              <div className="">
                <p className="m-0 p-description fw-bold darkText">
                  Task #45890 merged with #45890 in “Ads Pro Admin Dashboard
                  project:
                </p>
                <p className="m-0 p-description greyText">
                  Added at 4.23 PM by{" "}
                  <span>
                    <Image
                      src={"/images/Avatar/2.png"}
                      alt=""
                      width={20}
                      height={20}
                      style={{ borderRadius: "50%" }}
                    />
                  </span>
                </p>
              </div>
            </StepLabel>
            <StepContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut,
              aliquam earum in fugit quos aspernatur non, necessitatibus,
              reiciendis saepe esse veniam ea accusamus repellendus at
              consequuntur praesentium iste tempore!
            </StepContent>
          </Step>
        </Stepper>
      </div>
    </div>
  );
}
