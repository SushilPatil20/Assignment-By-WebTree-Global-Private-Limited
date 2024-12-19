export const getUsers = async () => {
    try {
        const response = await fetch('https://randomuser.me/api')
        const users = await response.json()
        return users.results[0]
    } catch (error) {
        console.log(error.message)
    }
}