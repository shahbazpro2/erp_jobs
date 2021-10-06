import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Button, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface Props {
    title: string,
    onBack: () => void
}

const JobsHeader = ({ title, onBack }: Props) => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center back space-x-2 cursor-pointer subtitle-clr font-medium" onClick={onBack}>
                <ArrowBackIcon />
                <div className="text-xl">
                    Back
                </div>
            </div>
            <div className="text-2xl font-semibold text-[#44444F]">
                {title}
            </div>
            <div className="sort flex items-center">
                <div className="subtitle-clr">
                    Sort by:

                </div>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment >
                            <span className="flex items-center cursor-pointer px-3"   {...bindTrigger(popupState)}>
                                Newest
                                <KeyboardArrowDownIcon sx={{ width: '20px' }} />
                            </span>
                            <Menu sx={{ '& .MuiPaper-root': { width: '150px' } }} {...bindMenu(popupState)}>
                                <MenuItem onClick={() => { popupState.close(); }}>Profile</MenuItem>
                                <MenuItem onClick={() => { popupState.close(); }}>Logout</MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
            </div>
        </div>

    )
}

export default JobsHeader
