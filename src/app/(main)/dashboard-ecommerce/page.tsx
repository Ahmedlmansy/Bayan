"use client";
import AllRating from "@/components/DashboardEcommerceComponents/AllRating";
import AverageDailySales from "@/components/DashboardEcommerceComponents/AverageDailySales";
import DailyVisitors from "@/components/DashboardEcommerceComponents/DailyVisitors";
import MonthlyEarnings from "@/components/DashboardEcommerceComponents/MonthlyEarnings";
import OrderThisMonth from "@/components/DashboardEcommerceComponents/OrderThisMonth";
import RecentOrders from "@/components/DashboardEcommerceComponents/RecentOrders";
import ReturningRate from "@/components/DashboardEcommerceComponents/ReturningRate";
import Sales from "@/components/DashboardEcommerceComponents/Sales";
import TopProducts from "@/components/DashboardEcommerceComponents/TopProducts";
import TopSeller from "@/components/DashboardEcommerceComponents/TopSeller";
import React from "react";

export default function DashboardEcommerce() {
  return (
    <div>
      <div className="row gap-3 p-3">
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 container-chart mdflex  flex_one ">
          <DailyVisitors />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 container-chart mdflex  flex_one ">
          <AverageDailySales />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 container-chart mdflex  flex_one ">
          <OrderThisMonth />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 p-3 container-chart mdflex  flex_one ">
          <MonthlyEarnings />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two ">
          <Sales />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12  container-chart flex_one ">
          <AllRating />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
          <RecentOrders />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 p-3 container-chart flex_one">
          <TopSeller />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 p-3 container-chart flex_one">
          <ReturningRate />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
          <TopProducts />
        </div>
      </div>
    </div>
  );
}
