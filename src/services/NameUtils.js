
export default {
    getName: u => 
        u.displayName,

    getFirstName: u =>
        (u || '').split(' ')[0],

    getLastName: u => {
        const fullName = (u || '').split(' ')
        return fullName[fullName.length - 1]
    }

}