"use client";
import AverageCall from "@/components/CrmComponents/AverageCall";
import DealForecast from "@/components/CrmComponents/DealForecast";
import DealStatus from "@/components/CrmComponents/DealStatus";
import DealType from "@/components/CrmComponents/DealType";
import MostLeads from "@/components/CrmComponents/MostLeads";
import ProfitRate from "@/components/CrmComponents/ProfitRate";
import PublicView from "@/components/CrmComponents/PublicViewCrm";
import RecentLeads from "@/components/CrmComponents/RecentLeads";
import SalesForecast from "@/components/CrmComponents/SalesForecast";
import TaskList from "@/components/CrmComponents/ToDoList";

export default function CRM() {
  return (
    <div>
      <div className="row gap-3 p-3">
        <div className="col-lg-12 container-chart p-3">
          <PublicView />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
          <ProfitRate />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 p-3 container-chart flex_one">
          <MostLeads />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
          <DealStatus />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 p-3 container-chart flex_one">
          <DealType />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 p-3 container-chart flex_four">
          <AverageCall />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 p-3 container-chart flex_four ">
          <SalesForecast />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 p-3 container-chart flex_four ">
          <DealForecast />
        </div>
        <div className="col-lg-8 col-md-12 col-sm-12 p-3 container-chart flex_two">
          <RecentLeads />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 p-3 container-chart flex_one">
          <TaskList />
        </div>
      </div>
    </div>
  );
}
