export const only_upper = (s) => {
    return s.split("").filter((item)=> item == item.toUpperCase() && item != item.toLowerCase())

};