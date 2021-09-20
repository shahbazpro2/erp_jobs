const ObjetToArray = (val: any) => {
    return Array.from(Object.keys(val), k => val[k])[0]
}

export default ObjetToArray