import { Card, CardContent } from '@mui/material'
import React, { useContext } from 'react'
import { EducationModalContext } from '@context/ModalContext';
import { EducationQueryProps } from './types';
import CardContents from '../common/CardContents';

interface Props {
    data: EducationQueryProps,
    onDelete: (id: number) => void
}

const EducationCard = ({ data, onDelete }: Props) => {
    const context = useContext(EducationModalContext)
    return (
        <Card variant="outlined">
            <CardContent>
                <CardContents
                    onEdit={() => context.handleEdit(data)}
                    onDelete={() => onDelete(Number(data.id))}
                    date1={data.startDate}
                    date2={data.endDate}
                >
                    <div className="text-sm">
                        {data.degreeTitle} | {data.degreeType}
                        <div className="subtitle-clr">
                            {data.institution}
                        </div>
                    </div>
                </CardContents>
            </CardContent>
        </Card>
    )
}

export default EducationCard
