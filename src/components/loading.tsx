import React from "react";

export default function Loading() {
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
        <img
          src="/images/favicon.ico"
          alt="App Logo"
          className="mb-3"
          style={{ width: "80px", height: "80px", objectFit: "contain" }}
        />
        <h4 className="fw-bold"> Bayan </h4>
        <p className="text-muted"> </p>
      </div>
    </div>
  );
}
