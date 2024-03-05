export interface QuizParmas {
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
