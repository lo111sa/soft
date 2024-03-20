import React from "react";
import VisitsSection from "./components/VisitsSection";
import AmbulSection from "./components/AmbulSection";
import PatientItem from "./components/PatientItem";
import { useAmbulRecordsStore } from "../../store/ambulRecords";
import AmbulSearchPanel from "./components/AmbulSearchPanel";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useModalStore } from "../../store/modalStore";
import PatientForm from "./components/patientForm/PatientForm";
import AmbulTable from "./components/tables/AmbulTable";

const Registry = () => {
  const visits = useAmbulRecordsStore();
  const modal = useModalStore();

  return (
    <div className="flex pt-1 h-[calc(100vh-65px)] bg-gray-100">
      {/* Sidebar */}
      <div className="min-w-[320px] pe-3">
        <div className="border h-full bg-white rounded-lg ">
          <AmbulSearchPanel />
        </div>
      </div>

      {/* Rightbar */}
      <div className="w-full flex flex-col gap-4 pe-2">
        <div className="flex items-center justify-between w-full p-3  rounded-lg bg-white border border-gray-300 shadow-md">
          ანკეტები
          {/*  <Link to={"/register-patient"}></Link> */}
          <img
            className="cursor-pointer"
            src="/img/add-file.png"
            alt=""
            onClick={() => modal.open(<PatientForm />, "პაციენტის რეგისტრაცია")}
          />
        </div>

        {/* {visits.amb?.length ? (
          visits.amb.map((item) => <PatientItem key={item.id} props={item} />)
        ) : (
          <p className="text-center">ჩანაწერები არ არის</p>
        )} */}
        <div className="overflow-auto pe-2">
          <AmbulTable />
        </div>
      </div>
    </div>
  );
};

export default Registry;
