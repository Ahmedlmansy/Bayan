import React from "react";

export default function Documents() {
  const foldersData = [
    {
      id: 1,
      folderName: "Customer",
      filesCount: 7,
    },
    {
      id: 2,
      folderName: "Buyer",
      filesCount: 25,
    },
    {
      id: 3,
      folderName: "Documents",
      filesCount: 18,
    },
    {
      id: 4,
      folderName: "File Manager",
      filesCount: 27,
    },
    {
      id: 5,
      folderName: "Apps",
      filesCount: 13,
    },
    {
      id: 6,
      folderName: "Apk File",
      filesCount: 6,
    },
    {
      id: 7,
      folderName: "Finance",
      filesCount: 25,
    },
    {
      id: 8,
      folderName: "CRM Project",
      filesCount: 15,
    },
  ];

  return (
    <div>
      <div className="row g-3">
        {foldersData.map((folder) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6" key={folder.id}>
              <div className="p-3 container-chart text-center">
                <svg
                  style={{ height: "64px", width: "64px" }}
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-135ln59 fill-gray-500"
                  fill="#6b7280"
                  width="64"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M20,6H14.41a1,1,0,0,1-.7-.29L12.29,4.29a1,1,0,0,0-.7-.29H4A2,2,0,0,0,2,6V18a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V8A2,2,0,0,0,20,6Z"></path>
                </svg>
                <p className="m-0 p-description fw-bold darkText">
                  {" "}
                  {folder.folderName}{" "}
                </p>
                <p className="m-0 p-description greyText">
                  {folder.filesCount} Files
                </p>
              </div>
            </div>
          );
        })}
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="p-3 container-chart text-center">
            <img
              src="/images/Files/css.svg"
              style={{ height: "64px", width: "64px" }}
            />
            <p className="m-0 p-description fw-bold darkText"> Project CSS </p>
            <p className="m-0 p-description greyText">7 Files</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="p-3 container-chart text-center">
            <img
              src="/images/Files/html.svg"
              style={{ height: "64px", width: "64px" }}
            />
            <p className="m-0 p-description fw-bold darkText"> Project HTML </p>
            <p className="m-0 p-description greyText">12 Files</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="p-3 container-chart text-center">
            <img
              src="/images/Files/jpg.svg"
              style={{ height: "64px", width: "64px" }}
            />
            <p className="m-0 p-description fw-bold darkText"> Project JPG </p>
            <p className="m-0 p-description greyText">20 Files</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="p-3 container-chart text-center">
            <img
              src="/images/Files/pdf.svg"
              style={{ height: "64px", width: "64px" }}
            />
            <p className="m-0 p-description fw-bold darkText"> Project PDF </p>
            <p className="m-0 p-description greyText">100 Files</p>
          </div>
        </div>
      </div>
    </div>
  );
}
