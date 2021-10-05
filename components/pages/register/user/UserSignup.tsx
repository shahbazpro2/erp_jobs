import React from "react";
import SignUp from "./SignUp";

const UserSignup = () => {
  return (
    <div className="bg-[#F2F2F2] ">
      <div className="container mx-auto py-10">
        <div className="flex justify-center min-h-[83vh]">
          <div className="w-full mt-7">
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
