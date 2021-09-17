import { Alert, AlertColor, Snackbar } from '@mui/material'
import React from 'react'

interface Props {
    open: boolean,
    message: string[],
    type: AlertColor,
    handleClose: () => void
}
const SnakbarAlert = ({ open, handleClose, message, type }: Props) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {message.map((m, index) => <div key={index} className="text-base">{m}</div>)

                }
            </Alert>
        </Snackbar>
    )
}

export default SnakbarAlert
