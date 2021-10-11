
export const jobStatusOptions = {
    "FRESH_AND_LOOKING": "Unemployed. Looking for job",
    "WORKING_BUT_LOOKING": "Working but looking for new opportunities",
    "NOT_LOOKING": "Not looking for job"
}

export const profileVisibilityOptions = {
    "PUBLIC": "Public. Anyone can see my profile",
    "REGISTERED_ONLY": "Registered only. Employers only can see my profile",
    "HIDDEN": "Hidden. Only visible to employers I apply to"
}

export const degreeOptions = {
    "HIGH_SCHOOL": "High School",
    "UNFINISHED_BACHELOR": "Unfinished Bachelor's degree",
    "TWO_YEAR": "Two-year degree",
    "BACHELOR": "Bachelor's degree",
    "MASTER": "Master's degree",
    "DOCTORAL": "Doctoral degree"
}

export const getDropdown = (options: any) => {
    const dropArr = []
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            dropArr.push({ key, value: options[key] })
        }
    }

    return dropArr
}