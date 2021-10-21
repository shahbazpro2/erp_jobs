import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

interface Props {
    onValueChange: (val: number) => void
}

const IncDecCounter = ({ onValueChange }: Props) => {
    const [value, setValue] = useState(1)

    const onChangeVal = (action: string) => {
        if (action === 'inc') {
            setValue(value + 1)
            onValueChange(value + 1)
        } else {
            if ((value - 1) !== 0) {
                setValue(value - 1)
                onValueChange(value - 1)
            }
        }
    }


    return (
        <div className="space-x-3">
            <Button variant="contained" sx={{ borderRadius: '100%', padding: 0, minWidth: '30px', backgroundColor: '#E7E9ED', color: '#0D152E', '&:hover': { backgroundColor: '#cdcdcd', } }} onClick={() => onChangeVal('dec')}>-</Button>
            <TextField value={value} disabled sx={{ width: 50, ' .css-dtpfc0-MuiInputBase-root-MuiOutlinedInput-root': { height: 30, borderRadius: '5px' }, '.css-24rejj-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': { WebkitTextFillColor: '#0D152E', opacity: 1, textAlign: 'center' } }} />
            <Button variant="contained" sx={{ borderRadius: '100%', padding: 0, minWidth: '30px', backgroundColor: '#E7E9ED', color: '#0D152E', '&:hover': { backgroundColor: '#cdcdcd', } }} onClick={() => onChangeVal('inc')}>+</Button>
        </div>
    )
}

export default IncDecCounter
