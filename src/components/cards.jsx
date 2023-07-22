import { Button } from "flowbite-react";
import React from "react";
import {
  FaPencilAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
  FaCheckCircle,
  FaUser,
} from "react-icons/fa";
import { AiOutlineAlignRight } from "react-icons/ai";

const Cards = (props) => {
  return (
    <div className="bg-white w-350 h-96 p-3">
      <div className="flex gap-3 w-full mb-10">
        <div className="w-16 h-16 flex justify-end">
          {props.profile ? (
            <img
              className="w-16 h-16 rounded-full inline"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="image"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-slate-200 text-slate-100 text-center pt-4">
              <FaUser size={30} className="inline" />
            </div>
          )}
          {props.profile && (
            <div className="relative">
              <FaCheckCircle
                className="absolute right-0"
                color="green"
                size={20}
              />
            </div>
          )}
        </div>

        <div className="pt-3 pb-3 grow h-14 text-gray-500">
          <span>
            <strong>Thomas Paul</strong>
          </span>
          <p className="w-fit text-sm">EDU 38293998</p>
        </div>
        {props.profile ? (
          <div className="p-3 text-center bg-slate-300 w-10 h-10 rounded-full">
            <FaPencilAlt />
          </div>
        ) : (
          <Button className="bg-green-100 text-green-700 hover:!bg-green-400 rounded-full capitalize">
            New
          </Button>
        )}
      </div>
      <div className="leading-10 text-gray-600 line-clamp-3">
        <FaPhoneAlt className="inline" />
        <span className="pl-2">+9133238923</span>
        <br />
        <FaEnvelope className="inline" />
        <span className="pl-2">sample@gmail.com</span>
        <br />
        <FaGraduationCap className="inline" />
        <span className="pl-2">MSC business with international </span>
      </div>
      <div className="flex items-end justify-between h-32">
        {props.profile ? (
          <Button className="bg-blue-300 text-blue-700 rounded-full capitalize">
            Add your rest documents
          </Button>
        ) : props.verified ? (
          <Button className="bg-blue-300 text-blue-700 rounded-full capitalize">
            Verified
          </Button>
        ) : (
          <Button className="bg-blue-300 text-blue-700 rounded-full capitalize">
            Applied
          </Button>
        )}
        <div className="rounded-full text-blue-700 border-3 border-gray-200 w-10 h-10 text-center flex items-center justify-center ">
          <AiOutlineAlignRight />
        </div>
      </div>
    </div>
  );
};

export default Cards;
