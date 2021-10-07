import ObjectToArray from '@components/functions/ObjectToArray'
import { Alert, AlertColor, Snackbar } from '@mui/material'
import React from 'react'

interface Props {
    open: boolean,
    message: string[] | string,
    type: AlertColor,
    handleClose: () => void
}
const SnakbarAlert = ({ open, handleClose, message, type }: Props) => {
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>

                {
                    Array.isArray(message) ?
                        message.map((m, index) => <div key={index} className="text-base">{m}</div>) :
                        typeof message === 'object' ?
                            ObjectToArray(message).map((m, index) => <div key={index} className="text-base"> {m}</div>)
                            :
                            <div className="text-base">{message}</div>
                }
            </Alert>
        </Snackbar>
    )
}

export default SnakbarAlert
