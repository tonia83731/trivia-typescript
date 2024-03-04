import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function QuestionType() {
  return (
    <section className="mt-10 text-center text-2xl">
      <h3 className="">Choose question types?</h3>
      <div className="">
        <button className="bg-amber-300 text-blue-950 text-lg hover:font-bold hover:shadow-md">
          <FontAwesomeIcon icon={faAngleLeft} /> Back to difficluties
        </button>
        <button className="bg-amber-300 text-blue-950 text-lg hover:font-bold hover:shadow-md">
          Start game <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
}
