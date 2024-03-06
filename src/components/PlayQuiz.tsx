import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { QuizItem } from "../types/quiz-type";
import { useEffect, useState } from "react";

type Play_props = {
  quiz: QuizItem[];
  quizQty: number;
  // onEnterClick: () => void
};

const makeAnswerRandom = (quiz: QuizItem[], index: number): string[] => {
  const answer = [quiz[index].correct_answer, ...quiz[index].incorrect_answers];
  answer.sort(() => Math.random() - 0.5);
  return answer;
};

export default function PlayQuiz(props: Play_props) {
  const { quiz, quizQty } = props;

  const [quizIndex, setQuizIndex] = useState<number>(0);
  const currentQuizItem = quiz[quizIndex];
  const [availableAns, setAvailableAns] = useState<string[]>([]);
  const [selectAns, setSelectAns] = useState<string>("");
  const [quizStatus, setQuizStatus] = useState<
    "valid" | "invalid" | "unanswered"
  >("unanswered");
  // const initialHistory = Array.from({ length: quizQty }, () => "");
  const [history, setHistory] = useState<(string | boolean)[]>([]);

  const handleEnterClick = () => {
    if (quizIndex < quizQty - 1) {
      setQuizIndex(quizIndex + 1);
      setQuizStatus("unanswered");
    }
  };

  const isValidAns = (selectAns: string): boolean => {
    return selectAns === currentQuizItem.correct_answer;
  };

  const renderAnsBar = quiz.map((_, index) => {
    return (
      <span
        className={`w-5 h-2 rounded-sm ${
          index >= quizIndex
            ? "bg-slate-200"
            : history[index] === true
            ? "bg-green-600"
            : "bg-rose-600"
        }`}
        key={`status-${index}`}
      ></span>
    );
  });

  const renderAns = availableAns.map((ans, index) => {
    return (
      <div className="">
        <input
          type="radio"
          id={`ans-${index}`}
          key={`ans-${index}`}
          name={`quiz-${quizIndex}`}
          // defaultValue=""
          value={ans}
          className="mr-2"
          onChange={() => setSelectAns(ans)}
          // checked={selectAns === ans}
        />
        <label
          htmlFor={`ans-${index}`}
          className={`${
            quizStatus === "unanswered"
              ? ""
              : isValidAns(ans)
              ? "text-green-600"
              : "text-rose-600"
          } ${selectAns === ans ? "font-bold" : ""}`}
          dangerouslySetInnerHTML={{ __html: ans }}
        ></label>
      </div>
    );
  });

  useEffect(() => {
    setAvailableAns(makeAnswerRandom(quiz, quizIndex));
  }, [quizIndex]);

  useEffect(() => {
    if (selectAns) {
      const isValid = isValidAns(selectAns);
      if (isValid) {
        setQuizStatus("valid");
      } else {
        setQuizStatus("invalid");
      }
      // history[quizIndex] = isValid;
      setHistory([...history, isValid]);
    }
  }, [selectAns]);

  return (
    <section className="mt-10 text-center">
      <h3
        className="text-2xl text-blue-950"
        dangerouslySetInnerHTML={{ __html: currentQuizItem.question }}
      ></h3>
      <div className="min-h-[250px] w-4/5 mx-auto text-sm flex flex-col justify-center items-center">
        <div className="gap-2 flex justify-center items-center mb-6">
          {renderAnsBar}
        </div>
        <div
          className={`grid gap-4 grid-rows-2 text-start ${
            currentQuizItem.type === "multiple" ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {renderAns}
        </div>
      </div>
      <div className="mt-6 flext justify-between items-center">
        <button
          className="bg-amber-300 text-blue-950 text-lg hover:font-bold hover:shadow-md"
          onClick={handleEnterClick}
        >
          Enter <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
}
