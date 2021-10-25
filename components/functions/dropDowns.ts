
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

export const companySize = {
    "1-10": "1-10",
    "11-50": "11-50",
    "51-100": "51-100",
    "101-200": "101-200",
    "201-500": "201-500",
    "501-1000": "501-1000",
    "1001-2000": "1001-2000"
}

export const companyIndustry = {
    "Computer Industry": "Computer Industry",
    "IT Industry": "IT Industry",
    "Telecommunication Industry": "Telecommunication Industry",
    "Education Industry": "Education Industry",
    "Pharmaceutical Industry": "Pharmaceutical Industry",
    "Food Industry": "Food Industry",
    "Manufacturing Industry": "Manufacturing Industry",
    "Worldwide web": "Worldwide web",
    "Electronics Industry": "Electronics Industry"
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