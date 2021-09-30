import { Button } from "@mui/material";
import classNames from "classnames";
import React from "react";


interface Props {
  bg?: string,
  boxShadow?: string
}

const UserNavbar = ({ bg, boxShadow }: Props) => {
  return (
    <div className={`${bg} ${boxShadow}`}>
      <div className="container mx-auto">
        <div className="grid grid-flow-col justify-between h-[80px]">
          <div className="logo flex items-center">
            <h2>Erp jobs</h2>
          </div>
          <div className="links flex items-center">
            <div className="grid grid-flow-col gap-12">
              <div className="user-links">Home</div>
              <div className="user-links">Find Jobs</div>
              <div className="user-links">Career Advice</div>
              <div className="user-links">Upload CV</div>
            </div>
          </div>
          <div className="auth-links flex items-center">
            <div className="user-links">Login/Sign up</div>
            <div className="ml-5">
              <Button variant="contained" color="secondary" disableElevation>
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
