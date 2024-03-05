import { useEffect, useState } from "react";
import SetQuizLayout from "./components/SetQuizLayout";
import SetQuizQty from "./components/SetQuizQty";
import SetQuizCategory from "./components/SetQuizCategory";
import SetQuizDifficulty from "./components/SetQuizDifficulty";
import SetQuizType from "./components/SetQuizType";
import PlayQuiz from "./components/PlayQuiz";
import Result from "./components/Result";

import { getCategories } from "./api/getTriviaData";
import {
  QuizParmas,
  QuizDifficulty,
  QuizType,
  QuizCategory,
} from "./types/quiz-type";

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
  const [categories, setCategories] = useState<QuizCategory[]>([]);

  console.log(params);

  useEffect(() => {
    const getCategoriesAsync = async () => {
      try {
        const data = await getCategories();
        if (Array.isArray(data)) {
          setCategories([{ id: -1, name: "Mixed" }, ...data]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCategoriesAsync();
  }, []);

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
        return (
          <SetQuizCategory
            categories={categories}
            value={params.category}
            onCateChange={(event) => {
              const value = event.target.value;
              setParams({ ...params, category: value });
            }}
            onPrevClick={() => setStatus(QuizSteps.setQty)}
            onNextClick={() => setStatus(QuizSteps.setDifficulty)}
          />
        );
      case QuizSteps.setDifficulty:
        return (
          <SetQuizDifficulty
            value={params.difficulty}
            onDiffChange={(diff) => {
              console.log(diff);
              setParams({ ...params, difficulty: diff });
            }}
            onPrevClick={() => setStatus(QuizSteps.setCategory)}
            onNextClick={() => setStatus(QuizSteps.setType)}
          />
        );
      case QuizSteps.setType:
        return (
          <SetQuizType
            value={params.type}
            onTypeChange={(type) => {
              console.log(type);
              setParams({ ...params, type: type });
            }}
            onPrevClick={() => setStatus(QuizSteps.setCategory)}
            onNextClick={() => setStatus(QuizSteps.setType)}
          />
        );
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
