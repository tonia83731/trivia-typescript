import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function SetQuizDifficulty() {
  return (
    <section className="mt-10 text-center text-2xl">
      <h3 className="">Choose difficluties of question?</h3>
      <div className="">
        <button className="bg-amber-300 text-blue-950 text-lg hover:font-bold hover:shadow-md">
          <FontAwesomeIcon icon={faAngleLeft} /> Back to categories
        </button>
        <button className="bg-amber-300 text-blue-950 text-lg hover:font-bold hover:shadow-md">
          Go to types <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
}
