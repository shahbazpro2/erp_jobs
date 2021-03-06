import { Button, Card, TextField } from '@mui/material'
import React from 'react'

const JobSearch = () => {
    return (
        <div className="rounded-lg primary-bg text-white py-1 boxShadow1">
            <div className="flex items-center md:h-[70px] py-7 md:py-0 w-full">
                <form className="w-full px-5">
                    <div className="grid md:grid-flow-col grid-flow-row gap-3">
                        <div className="col-span-3">
                            <TextField
                                variant="outlined"
                                placeholder="Job title or keyword"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none"
                                    },
                                }}
                            />

                        </div>
                        <div className="col-span-3">
                            <TextField
                                variant="outlined"
                                placeholder="City"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none"
                                    },
                                }}
                            />
                        </div>
                        <div className="col-span-3">
                            <TextField
                                variant="outlined"
                                placeholder="Salary"
                                fullWidth
                                sx={{
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none"
                                    },
                                }}
                            />
                        </div>
                        <div className="col-span-3 md:col-span-2">
                            <Button variant="contained" sx={{ height: '100%' }} fullWidth color="secondary" disableElevation>
                                Search
                            </Button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default JobSearch
