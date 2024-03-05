export interface QuizParams {
  amount: number
  category: string
  difficulty: QuizDifficulty
  type: QuizType
}

export interface QuizCategoryRes {
  trivia_categories: QuizCategory[]
}
export interface QuizCategory {
  id:number
  name:string
}

export interface QuizRes {
  results: QuizItem[]
}

export interface QuizItem {
  category: string,
  correct_answer: string,
  difficulty: string,
  incorrect_answers: string[],
  question: string,
  type: string
}

export enum QuizDifficulty {
  Mix = "",
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}

export enum QuizType {
  Mix = "",
  Multiple = "multiple",
  Boolean = "boolean",
}
