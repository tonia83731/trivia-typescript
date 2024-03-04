import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Result() {
  return (
    <section className="mt-10 text-center">
      <h3 className="text-2xl text-blue-950">Choose quiz categories?</h3>

      <div className="">
        <button className="bg-amber-300 text-blue-950 text-lg hover:font-bold hover:shadow-md">
          <FontAwesomeIcon icon={faAngleLeft} /> Back to numbers
        </button>
        <button className="bg-amber-300 text-blue-950 text-lg hover:font-bold hover:shadow-md">
          Go to categories <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
}
