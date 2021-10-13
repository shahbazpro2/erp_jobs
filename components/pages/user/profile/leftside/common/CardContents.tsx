import moment from 'moment'
import React, { ReactNode } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
    onDelete: () => void,
    onEdit: () => void,
    confidential?: boolean,
    currentWorkHere?: boolean,
    date1: string,
    date2?: string,
    children: ReactNode
}

const CardContents = ({ onEdit, onDelete, date1, date2 = '', confidential = false, currentWorkHere = false, children }: Props) => {


    return (
        <div className="grid md:grid-cols-12 grid-cols-1">
            <div className="col-span-9">

                {children}

            </div>
            <div className="col-span-3 order-first md:order-last md:mb-0 mb-2 text-sm">
                <div className="grid md:grid-cols-1 grid-cols-6">
                    <div className="md:ml-auto md:block sm:flex items-center col-span-4">
                        {moment(date1).format('MMM YYYY')} {date2 && <> - {currentWorkHere ? 'Present' : moment(date2).format('MMM YYYY')}</>}
                        {confidential && <div className="subtitle-clr md:text-right sm:ml-5">Confidential</div>}
                    </div>
                    <div className="col-span-2 hidden sm:flex ml-auto md:mt-3 text-xs subtitle-clr">
                        <div className="cursor-pointer mr-3 flex items-center primary-clr-hover" onClick={onEdit}>
                            <EditIcon style={{ width: 16, marginRight: '3px' }} /> Edit
                        </div>
                        <div className="cursor-pointer flex items-center hover:text-red-600" onClick={onDelete}>
                            <DeleteIcon style={{ width: 16, marginRight: '2px' }} /> Delete
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex ml-auto mt-3 text-xs subtitle-clr sm:hidden">
                <div className="cursor-pointer mr-3 flex items-center primary-clr-hover" onClick={onEdit}>
                    <EditIcon style={{ width: 16, marginRight: '3px' }} /> Edit
                </div>
                <div className="cursor-pointer flex items-center hover:text-red-600" onClick={onDelete}>
                    <DeleteIcon style={{ width: 16, marginRight: '2px' }} /> Delete
                </div>
            </div>
        </div >
    )
}

export default CardContents
