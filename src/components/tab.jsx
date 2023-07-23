import { Button } from "flowbite-react";
import React, { useState } from "react";
import {
  FaFileAlt,
  FaRegTimesCircle,
  FaRegSave,
  FaFileArchive,
  FaTrophy,
  FaRegMoneyBillAlt,
  FaMoneyBillAlt,
} from "react-icons/fa";
import BasicInfoForm from "./form";
import Cards from "../components/cards";
const Tab = () => {
  const [formData, setFormData] = useState([]);
  var submitFun;
  const handleSubmit = (subFun) => {
    submitFun = subFun;
  };
  const handleFormData = (data) => {
    const duplicateArray = [...formData];
    setFormData([duplicateArray, ...data]);
  };
  return (
    <div className="pl-36 pr-36 pt-10 bg-white shadow-sm h-120">
      <div className="flex bg-slate-100 h-auto mb-5 p-2 gap-x-2 overflow-x-auto style-scroll">
        <Cards profile={true} />
        <Cards profile={false} />
        <Cards profile={false} />
        <Cards profile={false} verified={true} />
      </div>
      {/*tab header */}
      <div className="flex gap-5 w-full mb-5">
        <h3 className="text-2xl font-medium">Course Creation</h3>
        <div className="grow h-14">
          <div className="w-100 h-6 bg-slate-100 text-12 rounded-full text-center pt-1 text-slate-500">
            Step 2 of 4
          </div>
        </div>
        <Button onClick={() => submitFun()} className="bg-blue-950">
          <FaRegSave size={20} /> &nbsp;Save As Draft
          <span></span>
        </Button>
        <FaRegTimesCircle size={20} />
      </div>
      <hr className="border-1 border-slate-100" />
      {/* div tab parent div */}
      <div className="flex justify-center">
        <div className="grid grid-cols-7 gap-y-1 mt-5">
          <div className="w-130 h-130">
            <div className=" flex justify-center items-center w-130 h-130 bg-slate-300 rounded-full">
              <FaFileAlt size={40} color="green" />
            </div>
          </div>
          <div className="w-full h-full">
            <div className="flex items-center w-full h-full">
              <div className="w-full h-0 border-1 border-gray-300"></div>
            </div>
          </div>
          <div className="w-130 h-130">
            <div className="flex justify-center items-center w-130 h-130 bg-slate-300 rounded-full">
              <FaFileArchive size={40} className="text-blue-950" />
            </div>
          </div>
          <div className="flex  items-center w-full h-full">
            <div className="w-full h-0 border-1 border-gray-300"></div>
          </div>
          <div className="w-130 h-130">
            <div className="flex justify-center items-center w-130 h-130 bg-slate-300 rounded-full">
              <FaTrophy size={40} color="gray" />
            </div>
          </div>
          <div className="flex items-center w-full h-full">
            <div className="w-full h-0 border-1 border-gray-300"></div>
          </div>
          <div className="w-130 h-130">
            <div className="flex justify-center items-center w-130 h-130 bg-slate-300 rounded-full">
              <FaMoneyBillAlt size={40} color="gray" />
            </div>
          </div>
          <div className="text-center text-xs w-130 h-130">
            <h3>Basic information</h3>
          </div>
          <div></div>
          <div className="text-center text-xs w-130 h-130">
            <h3>Additional information</h3>
          </div>
          <div></div>
          <div className="text-center text-xs w-130 h-130">
            <h3>Eligiblity & Syllabus</h3>
          </div>
          <div></div>
          <div className="text-center text-xs w-130 h-130">
            <h3>Fee & Scholarship</h3>
          </div>
        </div>
      </div>
      <BasicInfoForm
        handleSubmit={handleSubmit}
        handleFormData={handleFormData}
        formData={formData}
      />
    </div>
  );
};

export default Tab;
