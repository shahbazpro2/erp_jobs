import { Card, CardContent } from '@mui/material'
import React, { useContext } from 'react'
import { CareerModalContext } from '@context/ModalContext';
import { CareerQueryProps } from './types';
import CardContents from '../common/CardContents';

interface Props {
    data: CareerQueryProps,
    onDelete: (id: number) => void
}
const CareerCard = ({ data, onDelete }: Props) => {
    const context = useContext(CareerModalContext)
    return (
        <Card variant="outlined">
            <CardContent>
                <CardContents
                    onEdit={() => context.handleEdit(data)}
                    onDelete={() => onDelete(Number(data.id))}
                    currentWorkHere={data.currentWorkHere}
                    confidential={data.confidential}
                    date1={data.fromDate}
                    date2={data.toDate}
                >
                    <div className="text-sm">
                        <div className="font-medium">
                            {data.jobTitle.name}
                        </div>
                        <div className="subtitle-clr">
                            {data.companyName} | {data.companyLocation}
                        </div>
                        <div className="mt-2">
                            {data.description}
                        </div>
                    </div>
                </CardContents>
            </CardContent>
        </Card>
    )
}

export default CareerCard
