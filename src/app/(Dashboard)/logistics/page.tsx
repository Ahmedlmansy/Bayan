"use client";
import CompanyProgress from "@/components/logisticsComponents/CompanyProgress";
import LastMonthShipment from "@/components/logisticsComponents/LastMonthShipment";
import OurTransportation from "@/components/logisticsComponents/OurTransportation";
import RoleManagement from "@/components/logisticsComponents/RoleManagement";
import ShipmentHistory from "@/components/logisticsComponents/ShipmentHistory";
import ShippingOrders from "@/components/logisticsComponents/ShippingOrders";
import TopSellingCategories from "@/components/logisticsComponents/TopSellingCategories";
import VisitsByCountry from "@/components/logisticsComponents/VisitsByCountry";
import React from "react";

export default function Logistics() {
  return (
    <div>
      <div className="row gap-3 p-3">
        <div className="col-lg-6 col-md-12 col-sm-12  flex_three">
          <LastMonthShipment />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 p-3 flex_three d-flex">
          <ShippingOrders />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
          <CompanyProgress />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 p-3 container-chart flex_one">
          <RoleManagement />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 p-3 container-chart flex_one">
          <OurTransportation />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
          <TopSellingCategories />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 p-3 container-chart flex_one">
          <VisitsByCountry />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
          <ShipmentHistory />
        </div>
      </div>
    </div>
  );
}
