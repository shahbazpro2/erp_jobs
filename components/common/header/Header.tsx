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
import { url_careerAdvice, url_loginUser, url_registerUser, url_userProfile, url_userSettings } from "@components/functions/pageUrls";
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import classNames from 'classnames'


interface Props {
  bg: string,
  boxShadow: string
}

const Header = ({ bg, boxShadow }: Props) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const path = router.asPath
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
              <Link href="/"><a className={classNames("user-links", { "active-links": path === '/' })}>Home</a></Link>
              <div className="user-links">Find Jobs</div>
              <Link href={url_careerAdvice}><a className={classNames("user-links", { "active-links": path === url_careerAdvice })}>Career Advice</a></Link>
              <div className="user-links">Upload CV</div>
            </div>
          </div>
          <div className="auth-links flex items-center space-x-5">
            {objectIsEmpty(user) ? <>
              <Link href="/login/user"><a className={classNames("user-links", { "active-links": path === url_loginUser })}>Login</a></Link>
              <Link href={url_registerUser}><a className={classNames("user-links", { "active-links": path === url_registerUser })}>Sign up</a></Link>
              <div>
                <Button variant="contained" color="secondary" disableElevation>
                  Post a Job
                </Button>
              </div>
            </> :
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment >
                    <div className="flex font-semibold cursor-pointer" {...bindTrigger(popupState)}>
                      <div className="mr-1">My Account</div>
                      <KeyboardArrowDownIcon />
                    </div>
                    <Menu disableScrollLock sx={{ '& .MuiPaper-root': { width: '150px' }, marginTop: '10px' }} {...bindMenu(popupState)}>
                      <MenuItem onClick={() => { popupState.close(); router.push(url_userProfile) }}><PersonIcon sx={{ width: '18px' }} /><div className="ml-2">Profile</div></MenuItem>
                      <MenuItem onClick={() => { popupState.close(); router.push(url_userSettings) }}><SettingsIcon sx={{ width: '18px' }} /><div className="ml-2">Setting</div></MenuItem>
                      <MenuItem onClick={() => { popupState.close(); dispatch(setLogoutState()) }}><ExitToAppIcon sx={{ width: '18px' }} /><div className="ml-2">Logout</div></MenuItem>
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
