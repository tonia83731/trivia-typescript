import axios from "axios"
import { QuizParams, QuizCategoryRes, QuizCategory, QuizRes, QuizItem } from '../types/quiz-type';
const BASE_URL = 'https://opentdb.com'
export const getCategories = async (): Promise<QuizCategory[]> => {
    const {data} = await axios.get<QuizCategoryRes>(`${BASE_URL}/api_category.php`)
    return data.trivia_categories
}

export const getQuiz = async (params:QuizParams): Promise<QuizItem[]> => {
    const {data} = await axios.get<QuizRes>(`${BASE_URL}/api.php`, {params})
    return data.results
}