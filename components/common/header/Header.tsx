import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";
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
import Image from 'next/image'
import Container from '@components/common/container/Container'
import SideDrawer from "./SideDrawer";


interface Props {
  bg: string,
  boxShadow: string
}

export const linkList = [
  { link: '/', title: 'Home' },
  { link: '/findjobs', title: 'Find Jobs' },
  { link: url_careerAdvice, title: 'Career Advice' },
  { link: '/uploadcv', title: 'Upload CV' }
]


const Header = ({ bg, boxShadow }: Props) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const path = router.asPath
  const { user } = useAppSelector(state => state.authReducer)
  const [open, setOpen] = useState(false)



  return (
    <div className={`${bg} ${boxShadow} absolute w-full`}>
      <Container>
        <div className="flex md:justify-between h-[80px]">
          <div className="rounded-lg gray-bg w-16 h-10 my-auto md:hidden flex justify-center cursor-pointer " onClick={() => setOpen(!open)}>
            <Image src="/assets/images/2lines.svg" width="35%" height="35%" alt="lines" />
          </div>
          <Drawer
            anchor={"left"}
            open={open}
            onClose={() => setOpen(false)}
          >
            <SideDrawer />
          </Drawer>
          <div className="ml-5 md:ml-0">
            <div className="logo flex items-center h-full">
              <h2><Link href="/"><a href="#">Erp jobs</a></Link></h2>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="links flex items-center h-full w-full justify-center xl:space-x-10 md:space-x-5">
              {linkList.map((link, index) => (
                <Link key={index} href={link.link}><a className={classNames("user-links", { "active-links": path === link.link })}>{link.title}</a></Link>
              ))}
            </div>

          </div>
          {objectIsEmpty(user) ?
            <div className="hidden sm:block ml-auto md:ml-0">
              <div className="auth-links flex items-center justify-end h-full space-x-5">
                <Link href="/login/user"><a className={classNames("user-links", { "active-links": path === url_loginUser })}>Login</a></Link>
                <Link href={url_registerUser}><a className={classNames("user-links", { "active-links": path === url_registerUser })}>Sign up</a></Link>
                <div>
                  <Button variant="contained" color="secondary" disableElevation>
                    Post a Job
                  </Button>
                </div>
              </div>
            </div>
            :
            <div className="flex h-full items-center ml-auto md:ml-0">
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
            </div>
          }
        </div>
      </Container>
    </div>
  );
};

export default Header;
