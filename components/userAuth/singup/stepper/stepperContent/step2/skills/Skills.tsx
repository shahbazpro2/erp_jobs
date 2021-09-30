/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { Autocomplete, Chip, Divider, TextField } from '@mui/material';
import AddItemsWrapper from '@components/common/addItemsWrapper/AddItemsWrapper';
import { useLazyQuery, useMutation } from '@apollo/client';
import FeedbackApi from '@components/common/feedback/FeedbackAPi';
import { AllEducations } from '@graphql/queries/user/education/AllEducations';
import SkillsContent from './SkillsContent';

interface Props {
    setActive: Dispatch<SetStateAction<string>>
}


const Skills = ({ setActive }: Props) => {
    const [allEducations, { data }] = useLazyQuery(AllEducations, { fetchPolicy: 'cache-and-network' })
    const fixedOptions = [{ id: 0, name: 'reactjs' }, { id: 1, name: 'angular' }, { id: 2, name: 'nodejs' }];
    const [value, setValue] = React.useState<any>([]);
    const [apiError, setApiError] = useState<string[]>([])
    const [apiSuccess, setApiSuccess] = useState<string[]>([])




    console.log('data', data)

    const onBack = () => {
        setActive('career')
    }

    const onContinue = () => {
        setActive('skills')
    }

    useEffect(() => {
        allEducations()
    }, [])



    return (
        <div className="grid grid-cols-7 justify-center">
            <div className="col-start-3 col-span-3">
                <AddItemsWrapper title="Skills" subtitle="Add your skills, you can add multiple skills" disabled={true} onBack={onBack} onContinue={onContinue} skip={true}>
                    <div className="mt-7 grid gap-2">
                        <Autocomplete
                            multiple
                            id="fixed-tags-demo"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue([
                                    ...fixedOptions,
                                    ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
                                ]);
                            }}
                            options={fixedOptions.map(op => op.name)}
                            renderTags={(tagValue, getTagProps) => {
                                console.log('tag', tagValue, getTagProps)
                                return tagValue.map((option, index) => (
                                    <Fragment key={index}>

                                        <Chip
                                            label={option.name}

                                        />
                                    </Fragment>
                                ))
                            }
                            }
                            renderInput={(params) => (
                                <TextField {...params} label="Add skills" placeholder="Favorites" InputLabelProps={{
                                    shrink: true,
                                }} />
                            )}
                        />
                    </div>
                    <div className="my-7">
                        <Divider />
                    </div>
                </AddItemsWrapper>

                <FeedbackApi apiError={apiError} apiSuccess={apiSuccess} setApiError={setApiError} setApiSuccess={setApiSuccess} />
            </div>
        </div>
    )
}

export default Skills
