

export const getUsers = async (pageNumber = 1, numberOfPepolesToAdd = 2, seed = "") => {
    try {
        const response = await fetch(`https://randomuser.me/api/?page=${pageNumber}&results=${numberOfPepolesToAdd}&seed=${seed}`)
        const users = await response.json()
        return users.results
    } catch (error) {
        console.log(error.message)
    }
}