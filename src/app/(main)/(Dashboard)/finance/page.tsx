"use client";
import Audits from "@/components/FinanceComponenrs/Audits";
import CurrentCurrency from "@/components/FinanceComponenrs/CurrentCurrency";
import CustomerTransactions from "@/components/FinanceComponenrs/CustomerTransactions";
import Investment from "@/components/FinanceComponenrs/Investment";
import MyBalance from "@/components/FinanceComponenrs/MyBalance";
import MySavings from "@/components/FinanceComponenrs/MySavings";
import PaymentForm from "@/components/FinanceComponenrs/QuickTransfer";
import Reports from "@/components/FinanceComponenrs/Reports";
import TopActivity from "@/components/FinanceComponenrs/TopActivity";
import Transactions from "@/components/FinanceComponenrs/Transactions";
import YourCard from "@/components/FinanceComponenrs/YourCard";
import React from "react";
export default function Finance() {
  return (
    <div>
      <div className="row gap-3 p-3">
        <div className="col-lg-6 col-md-12 col-sm-12 container-chart flex_three p-3">
          <MyBalance />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 container-chart flex_three p-3">
          <CurrentCurrency />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
          <Transactions />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12  container-chart flex_one p-3">
          <YourCard />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12  flex_three  ">
          <PaymentForm />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 container-chart flex_three  ">
          <CustomerTransactions />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
          <Investment />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12  container-chart flex_one p-3">
          <TopActivity />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12  container-chart flex_four p-3">
          <MySavings />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12  container-chart flex_four p-3">
          <Audits />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12  container-chart flex_four p-3">
          <Reports />
        </div>
      </div>
    </div>
  );
}
