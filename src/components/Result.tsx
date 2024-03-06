import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

type Res_props = {
  results: boolean[];
  quizQty: number;
  onRestartClick: () => void;
};
export default function Result(props: Res_props) {
  const { results, quizQty, onRestartClick } = props;
  const results_correct = results.filter((item) => item === true);
  const correctLength = results_correct.length;
  const rate = (correctLength / quizQty) * 100;
  const message =
    rate < 0.25
      ? "Keep working hard!"
      : rate < 0.5
      ? "You're making progress!"
      : rate < 0.75
      ? " You're doing well"
      : "Fantastic job! ";

  return (
    <section className="mt-10 text-center">
      <h3 className="text-2xl text-blue-950">Check the Results</h3>
      <div className="min-h-[250px] w-4/5 mx-auto flex flex-col justify-center items-center text-lg">
        <div className="font-bold">Quiz result:</div>
        <div className="">
          {correctLength} / {quizQty}{" "}
        </div>
        <div className="mt-6">{message}</div>
      </div>
      <div className="mt-6 flext justify-between items-center">
        <button
          className="bg-amber-300 text-blue-950 text-lg hover:font-bold hover:shadow-md"
          onClick={onRestartClick}
        >
          Restart the quiz <FontAwesomeIcon icon={faPowerOff} />
        </button>
      </div>
    </section>
  );
}
