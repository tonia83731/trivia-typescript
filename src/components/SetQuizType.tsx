import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { QuizType } from "../types/quiz-type";

type Type_props = {
  value: QuizType;
  onTypeChange: (type: QuizType) => void;
  onNextClick: () => void;
  onPrevClick: () => void;
};

export default function QuestionType(props: Type_props) {
  const { value, onTypeChange, onNextClick, onPrevClick } = props;
  const renderOptions = Object.values(QuizType).map((obj) => {
    return (
      <div key={obj} className="">
        <input
          type="radio"
          id={obj === "" ? "mixed" : obj}
          name="type"
          value={obj}
          className="mr-2"
          checked={value === obj}
          onChange={() => onTypeChange(obj)}
        />
        <label htmlFor={obj === "" ? "mixed" : obj} className="capitalize">
          {obj === QuizType.Mix ? "Mixed" : obj}
        </label>
      </div>
    );
  });

  return (
    <section className="mt-10 text-center text-2xl">
      <h3 className="">Choose question types?</h3>
      <div className="min-h-[250px] w-4/5 mx-auto flex flex-col gap-2 text-sm justify-center items-center">
        {renderOptions}
      </div>
      <div className="mt-6 w-4/5 mx-auto flex justify-between items-center">
        <button
          className="bg-amber-300 text-blue-950 text-lg hover:font-bold hover:shadow-md"
          onClick={onPrevClick}
        >
          <FontAwesomeIcon icon={faAngleLeft} /> Previous
        </button>
        <button
          className="bg-amber-300 text-blue-950 text-lg hover:font-bold hover:shadow-md"
          onClick={onNextClick}
        >
          Next <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
}
