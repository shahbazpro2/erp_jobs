import { Button, TextField } from '@mui/material'
import React from 'react'

const SubscriptionForm = () => {
    return (
        <div>
            <form>

                <div className="grid grid-cols-1 md:grid-cols-7 gap-5 ">
                    <div className="md:col-span-5 col-span-7">
                        <TextField
                            variant="outlined"
                            placeholder="Enter your email"
                            fullWidth
                        />
                    </div>
                    <div className="md:col-span-2 col-span-7">

                        <Button variant="contained" color="primary" className="h-full" disableElevation fullWidth>
                            Subscribe
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SubscriptionForm
