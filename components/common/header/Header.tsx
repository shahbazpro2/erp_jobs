import { Button } from "@mui/material";
import React from "react";
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from "@redux/Store";
import objectIsEmpty from "@components/functions/objectIsEmpty";
import { setLogoutState } from "@redux/auth";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from "next/router";
import { url_userProfile, url_userSettings } from "@components/functions/pageUrls";


interface Props {
  bg: string,
  boxShadow: string
}

const Header = ({ bg, boxShadow }: Props) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { user } = useAppSelector(state => state.authReducer)


  return (
    <div className={`${bg} ${boxShadow} absolute w-full`}>
      <div className="container mx-auto">
        <div className="grid grid-flow-col justify-between h-[80px]">
          <div className="logo flex items-center">
            <h2><Link href="/"><a href="#">Erp jobs</a></Link></h2>
          </div>
          <div className="links flex items-center">
            <div className="grid grid-flow-col gap-12">
              <Link href="/"><a className="user-links">Home</a></Link>
              <div className="user-links">Find Jobs</div>
              <div className="user-links">Career Advice</div>
              <div className="user-links">Upload CV</div>
            </div>
          </div>
          <div className="auth-links flex items-center space-x-5">
            {objectIsEmpty(user) ? <>
              <Link href="/login/user"><a className="user-links">Login</a></Link>
              <Link href="/register/user"><a className="user-links">Sign up</a></Link>
              <div>
                <Button variant="contained" color="secondary" disableElevation>
                  Post a Job
                </Button>
              </div>
            </> :
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment >
                    <Button size="small" color="secondary" {...bindTrigger(popupState)} endIcon={<KeyboardArrowDownIcon />}>
                      My Account
                    </Button>
                    <Menu disableScrollLock sx={{ '& .MuiPaper-root': { width: '150px' } }} {...bindMenu(popupState)}>
                      <MenuItem onClick={() => { popupState.close(); router.push(url_userProfile) }}>Profile</MenuItem>
                      <MenuItem onClick={() => { popupState.close(); router.push(url_userSettings) }}>Setting</MenuItem>
                      <MenuItem onClick={() => { popupState.close(); dispatch(setLogoutState()) }}>Logout</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
              /*  <div className="user-links danger-clr" onClick={() => dispatch(setLogoutState())}>Logout</div> */
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
