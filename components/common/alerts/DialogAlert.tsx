import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

interface Props {
    title: string,
    message?: string,
    open: boolean,
    handleClose: () => void,
    handleAccept: () => Promise<void>
}

const DialogAlert = ({ open, message, title, handleClose, handleAccept }: Props) => {
    return (
        <div>
            <Dialog

                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent sx={{ paddingLeft: 30, paddingRight: 30 }}>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ marginRight: '10px', marginBottom: '5px' }}>
                    <Button variant="outlined" color="warning" onClick={handleClose}>Cancel</Button>
                    <Button variant="outlined" color="success" onClick={handleAccept} autoFocus>
                        Accept
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DialogAlert
