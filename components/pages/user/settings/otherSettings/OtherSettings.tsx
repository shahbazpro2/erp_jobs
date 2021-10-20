import { LoadingButton } from '@mui/lab'
import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'

const OtherSettings = () => {
    const [check, setCheck] = useState(false)
    return (
        <div className="font-semibold">
            <div className="md:text-2xl text-lg">
                Deactivate Account
            </div>
            <div className="mt-3 subtitle-clr">
                Deactivate your account:
            </div>
            <div className="mt-7 w-[50%] m-auto">
                <LoadingButton variant="contained" color="error" fullWidth>Deactivate</LoadingButton>

            </div>
        </div>
    )
}

export default OtherSettings
