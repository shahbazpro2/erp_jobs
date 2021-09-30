import React from "react";
import UserNavbar from "../../common/userNavbar/UserNavbar";
import Stepper from "./stepper/Stepper";

const UserSignup = () => {
  return (
    <div className="bg-[#F2F2F2] ">
      <UserNavbar bg="bg-white" boxShadow="boxShadow" />
      <div className="container mx-auto py-10">
        <div className="flex justify-center min-h-[83vh]">
          <div className="w-full mt-7">
            <Stepper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
