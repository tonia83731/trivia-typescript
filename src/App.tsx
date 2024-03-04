import { useState } from "react";
import SetQuizLayout from "./components/SetQuizLayout";
import SetQuizQty from "./components/SetQuizQty";
import SetQuizCategory from "./components/SetQuizCategory";
import SetQuizDifficulty from "./components/SetQuizDifficulty";
import SetQuizType from "./components/SetQuizType";
import PlayQuiz from "./components/PlayQuiz";
import Result from "./components/Result";

import { QuizParmas, QuizDifficulty, QuizType } from "./types/quiz-type";

enum QuizSteps {
  setQty,
  setCategory,
  setDifficulty,
  setType,
  Play,
  Result,
}

export default function App() {
  const [status, setStatus] = useState<QuizSteps>(QuizSteps.setQty);
  const [params, setParams] = useState<QuizParmas>({
    amount: 10,
    category: "",
    difficulty: QuizDifficulty.Mix,
    type: QuizType.Mix,
  });

  console.log(params);

  const renderScreenByStatus = () => {
    switch (status) {
      case QuizSteps.setQty:
        return (
          <SetQuizQty
            defaultValue={params.amount}
            onQtyChange={(value: number | number[]) => {
              if (typeof value === "number") {
                setParams({ ...params, amount: value });
              } else {
                setParams({ ...params, amount: value[0] });
              }
            }}
            onNextClick={() => setStatus(QuizSteps.setCategory)}
          />
        );
      case QuizSteps.setCategory:
        return <SetQuizCategory />;
      case QuizSteps.setDifficulty:
        return <SetQuizDifficulty />;
      case QuizSteps.setType:
        return <SetQuizType />;
      case QuizSteps.Play:
        return <PlayQuiz />;
      case QuizSteps.Result:
        return <Result />;
      default:
        return <></>;
    }
  };
  return <SetQuizLayout>{renderScreenByStatus()}</SetQuizLayout>;
}
