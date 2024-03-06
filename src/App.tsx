import { useEffect, useState } from "react";
import SetQuizLayout from "./components/SetQuizLayout";
import SetQuizQty from "./components/SetQuizQty";
import SetQuizCategory from "./components/SetQuizCategory";
import SetQuizDifficulty from "./components/SetQuizDifficulty";
import SetQuizType from "./components/SetQuizType";
import PlayQuiz from "./components/PlayQuiz";
import Result from "./components/Result";

import { getCategories, getQuiz } from "./api/getTriviaData";
import {
  QuizParams,
  QuizDifficulty,
  QuizType,
  QuizCategory,
  QuizItem,
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
  const [params, setParams] = useState<QuizParams>({
    amount: 10,
    category: "",
    difficulty: QuizDifficulty.Mix,
    type: QuizType.Mix,
  });
  const [categories, setCategories] = useState<QuizCategory[]>([]);
  const [quiz, setQuiz] = useState<QuizItem[]>([]);
  const [results, setResults] = useState<boolean[]>([]);
  const initializedData = () => {
    setParams({
      amount: 10,
      category: "",
      difficulty: QuizDifficulty.Mix,
      type: QuizType.Mix,
    });
    setCategories([]);
    setQuiz([]);
    setResults([]);
  };

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
    // getQuizAsync();
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
              setParams({ ...params, type: type });
            }}
            onPrevClick={() => setStatus(QuizSteps.setCategory)}
            onNextClick={async () => {
              const quizData = await getQuiz(params);
              if (quizData.length > 0) {
                setQuiz(quizData);
                setStatus(QuizSteps.Play);
              } else {
                alert(
                  `Couldn't find ${params.amount} question for category: ${params.category}`
                );
                setStatus(QuizSteps.setQty);
              }
            }}
          />
        );
      case QuizSteps.Play:
        return (
          <PlayQuiz
            quiz={quiz}
            quizQty={params.amount}
            onSubmitClick={(history) => {
              setResults(history);
              setStatus(QuizSteps.Result);
            }}
          />
        );
      case QuizSteps.Result:
        return (
          <Result
            results={results}
            quizQty={params.amount}
            onRestartClick={() => {
              setStatus(QuizSteps.setQty);
              initializedData();
            }}
          />
        );
      default:
        return <></>;
    }
  };
  return <SetQuizLayout>{renderScreenByStatus()}</SetQuizLayout>;
}
