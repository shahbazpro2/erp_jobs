/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Autocomplete, TextField } from '@mui/material';
import { useLazyQuery } from '@apollo/client';
import FeedbackApi from '@components/common/feedback/FeedbackAPi';
import { AllSkills } from '@graphql/queries/common/AllSkills';
import SimpleWrapper from './common/SimpleWrapper';
import { addUserSkills, getUserSkills } from '@api/skills';
import { useAppSelector } from '@redux/Store';
import { LoadingButton } from '@mui/lab'


type AllSkill = {
    id: string,
    name: string
}
type PostSkills = {
    user: string,
    skills: number[]
}
const Skills = () => {
    const user: any = useAppSelector(state => state.authReducer)
    const [allSkillsFetch, { data }] = useLazyQuery(AllSkills)
    const [allSkills, setAllSkills] = useState<AllSkill[]>([])
    const [value, setValue] = React.useState<any>([]);
    const [apiError, setApiError] = useState<string[]>([])
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        getData()
    }, [data])

    const getData = async () => {
        if (data?.allSkills?.length) {
            setAllSkills(data?.allSkills);
            const res = await getUserSkills()

            const filterSkills = []
            let { allSkills } = data
            for (const all of allSkills) {
                if (res?.data.length) {
                    for (const resSkill of res?.data[0]?.skills) {
                        if (Number(all.id) === Number(resSkill))
                            filterSkills.push(all)
                    }
                } else break
            }
            setValue(filterSkills)
        }
    }

    useEffect(() => {
        allSkillsFetch()
    }, [])



    const addNewSkills = async () => {

        const skillsId = value.map((f: AllSkill) => {
            return Number(f.id)
        })

        const skillsData: PostSkills = {
            user: user?.user?.id,
            skills: skillsId
        }
        setLoading(true)
        const res = await addUserSkills(skillsData)

        if (!res?.error) {
            setApiSuccess(['Skills updated successfully'])
            setLoading(false)
        }
        setLoading(false)
        setApiError(res?.data)

    }


    return (
        <>
            <SimpleWrapper title="Skills">
                <div className="mt-7">
                    <Autocomplete
                        disableClearable
                        multiple
                        value={value}
                        id="multiple-limit-tags"
                        onChange={(event, newValue) => {
                            setValue(newValue)
                        }}
                        options={allSkills}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => (
                            <TextField variant="outlined"  {...params} placeholder="Skills" InputLabelProps={{
                                shrink: false,
                            }} />
                        )}

                    />
                </div>
                <div className="mt-7">
                    <LoadingButton loading={loading} variant="outlined" fullWidth onClick={addNewSkills}>Update Skills</LoadingButton>
                </div>
            </SimpleWrapper>
            <FeedbackApi apiError={apiError} apiSuccess={apiSuccess} setApiError={setApiError} setApiSuccess={setApiSuccess} />
        </>
    )
}

export default Skills
