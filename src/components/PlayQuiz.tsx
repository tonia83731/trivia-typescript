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
  const [availableAns, setAvailableAns] = useState<string[]>([]);
  const [selectAns, setSelectAns] = useState<string>("");

  console.log(quiz);

  const handleEnterClick = () => {
    if (quizIndex < quizQty - 1) {
      setQuizIndex(quizIndex + 1);
    }
  };

  const renderAns = availableAns.map((ans, index) => {
    return (
      <div className="">
        <input
          type="radio"
          id={`ans-${index}`}
          name={`quiz-${quizIndex}`}
          value=""
          className="mr-2"
          onChange={() => setSelectAns(ans)}
        />
        <label htmlFor="">{ans}</label>
      </div>
    );
  });

  useEffect(() => {
    setAvailableAns(makeAnswerRandom(quiz, quizIndex));
  }, [quizIndex]);

  return (
    <section className="mt-10 text-center">
      <h3 className="text-2xl text-blue-950">{quiz[quizIndex].question}</h3>
      <div className="min-h-[250px] w-4/5 mx-auto text-sm flex justify-center items-center">
        <div
          className={`grid gap-4 grid-rows-2 ${
            quiz[quizIndex].type === "multiple" ? "grid-cols-2" : "grid-cols-1"
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
