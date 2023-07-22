import { Button } from "flowbite-react";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Submit = (props) => {
  return (
    <div className="flex justify-end gap-1">
      <Button className=" border-black bg-transparent hover:!bg-transparent hover:outline-none text-blue-800 !border-1 focus:!outline-none focus:!border-none">
        <FaArrowLeft />
        &nbsp;Prev
      </Button>
      <Button
        onClick={props?.handleSubmit}
        type="submit"
        className="bg-blue-900 hover:!bg-blue-900 focus:!border-blue-900 focus:!outline-none"
      >
        <FaArrowRight />
        &nbsp;Next
      </Button>
    </div>
  );
};

export default Submit;
