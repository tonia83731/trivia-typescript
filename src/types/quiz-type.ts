export interface QuizParmas {
  amount: number
  category: string
  difficulty: QuizDifficulty
  type: QuizType
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
