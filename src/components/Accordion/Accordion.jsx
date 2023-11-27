import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Accordion = ({children,icon,label}) => {
  const [open, setOpen] = useState(false);

  const handleToggleActive = () => {
    setOpen(!open);
  };

    return (
      <div className="mb-3">
        <div className={`w-full rounded-md  duration-100 group ${open ? "is-active" : ""}`}>
          <div className="flex items-center">
            <div
              className={`flex text-blue-500 group-[.is-active]:text-white group-[.is-active]:bg-blue-500   w-full items-center  rounded-lg outline  outline-blue-500 py-3 px-3 text-left text-sm font-medium  hover:bg-slate-200`}
              onClick={handleToggleActive}
            >
              <FontAwesomeIcon icon={icon} className="w-[5%]" />
              <span className="w-[90%] text-lg ">{label}</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-xl w-[5%] cursor-pointer duration-200 group-[.is-active]:rotate-[180deg]" />
            </div>
          </div>
          <div className="overflow-hidden w-full duration-100 max-h-0 group-[.is-active]:max-h-full px-1">{children}</div>
        </div>
      </div>
    );
};
export default Accordion;
