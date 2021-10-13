
export const jobStatusOptions = {
    "UNEMPLOYED": "Unemployed",
    "ACTIVELY_LOOKING": "Actively looking",
    "PASSIVELY_LOOKING": "Passively looking"
}

export const profileVisibilityOptions = {
    "PUBLIC": "Public",
    "ANONYMOUS_CV": "Anonymous CV",
    "HIDDEN": "Hidden"
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