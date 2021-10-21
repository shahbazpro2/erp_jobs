import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { setLogoutState } from "@redux/auth";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { url_userProfile, url_userSettings } from "@components/functions/pageUrls";
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import classNames from 'classnames'
import { useAppDispatch } from '@redux/Store';
import { withUserList } from './EmployerHeader';


const WithUser = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const path = router.asPath
    return (
        <>
            <div className="hidden lg:block ml-16">
                <div className="links flex items-center h-full w-full xl:space-x-10 md:space-x-5">
                    {withUserList.map((link, index) => (
                        <Link key={index} href={link.url}><a className={classNames(`font-bold primary-clr-hover `, { "active-links": path === link.url })}>{link.title}</a></Link>
                    ))}
                </div>

            </div>
            <div className="flex h-full items-center ml-auto">
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
        </>
    )
}

export default WithUser
