import axios from "axios"
import { QuizCategoryRes } from '../types/quiz-type';
const BASE_URL = 'https://opentdb.com'
export const getCategories = async () => {
    try {
        const {data} = await axios.get<QuizCategoryRes>(`${BASE_URL}/api_category.php`)
        return data.trivia_categories
    } catch (error) {
        console.log('[Get categories failed]:', error)
    }
}