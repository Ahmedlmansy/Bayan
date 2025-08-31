"use client";
import ShipmentHistory from "@/components/logisticsComponents/ShipmentHistory";
import AllCampaigns from "@/components/marketingCompoents/AllCampaigns";
import AllChannels from "@/components/marketingCompoents/AllChannels";
import CheckUpdate from "@/components/marketingCompoents/CheckUpdate";
import SocialCampaign from "@/components/marketingCompoents/SocialCampaign";
import TotalItems from "@/components/marketingCompoents/TotalItems";
import TotallOrders from "@/components/marketingCompoents/TotallOrders";
import YearlyRevenue from "@/components/marketingCompoents/YearlyRevenue";
import YearlySales from "@/components/marketingCompoents/YearlySales";
import YouTubeCampaign from "@/components/marketingCompoents/YouTubeCampaign";
import React from "react";
export default function page() {
  return (
    <div>
      <div className="row gap-3 p-3">
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 container-chart mdflex  flex_one">
          <TotalItems />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 container-chart mdflex  flex_one">
          <YearlySales />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 container-chart mdflex  flex_one">
          <TotallOrders />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 container-chart mdflex  flex_one">
          <YearlyRevenue />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
          <SocialCampaign />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 container-chart mdflex  flex_one">
          <AllChannels />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 container-chart mdflex  flex_one">
          <YouTubeCampaign />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
          <AllCampaigns />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 container-chart mdflex  flex_one">
          <CheckUpdate />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
          <ShipmentHistory />
        </div>
      </div>
    </div>
  );
}
