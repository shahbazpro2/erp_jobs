import React from "react";
import UserNavbar from "../../common/userNavbar/UserNavbar";
import Stepper from "./stepper/Stepper";

const UserSignup = () => {
  return (
    <div className="bg-[#F2F2F2] ">
      <UserNavbar />
      <div className="container mx-auto">
        <div className="flex justify-center items-center min-h-[91vh]">
          <div className="w-full">
            <Stepper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
