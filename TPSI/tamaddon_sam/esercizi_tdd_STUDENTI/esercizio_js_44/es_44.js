export const ordina = (l) => {
    return l.sort((a,b) => b.title.localeCompare(a.title)) 
};