import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'

const Notification = () => {
    const [check, setCheck] = useState(false)
    return (
        <div className="font-semibold">
            <div className="text-2xl">
                Change Notification Settings
            </div>
            <div className="mt-3 subtitle-clr">
                Do you want to receive emails to inform you of the latest suitable jobs ?
            </div>
            <div className="flex mt-5">
                <FormControlLabel control={<Checkbox color="primary" checked={check} onChange={() => setCheck(true)} />} label="Yes" />
                <FormControlLabel control={<Checkbox color="primary" checked={!check} onChange={() => setCheck(false)} />} label="No" />

            </div>
        </div>
    )
}

export default Notification
