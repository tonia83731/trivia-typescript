import axios from "axios"
const BASE_URL = 'https://opentdb.com'
export const getCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api_category.php`)
        console.log(response)
    } catch (error) {
        console.log('[Get categories failed]:', error)
    }
}