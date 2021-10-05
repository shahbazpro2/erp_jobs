import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React, { ReactNode } from 'react'
import EditIcon from '@mui/icons-material/Edit';


interface Props {
    children: ReactNode,
    title: string,
    onEditHandle: () => void
}

const WithEditWrapper = ({ children, title, onEditHandle }: Props) => {
    return (
        <BoxWrapper>
            <div className="flex justify-between">
                <div className="text-lg font-medium">
                    {title}
                </div>
                <div className="flex cursor-pointer primary-clr-hover" onClick={onEditHandle}>
                    <EditIcon sx={{ width: '16px' }} />
                    <div className="ml-1">Edit</div>
                </div>
            </div>
            <div className="mt-10">
                {children}
            </div>
        </BoxWrapper>
    )
}

export default WithEditWrapper