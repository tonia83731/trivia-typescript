import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

import { getCategories } from "../lib/getTriviaData";

type Cate_props = {
  defaultCate: string;

  onNextClick: () => void;
  onPrevClick: () => void;
};

export default function SetQuizCategory() {
  useEffect(() => {
    const getCategoriesAsync = async () => {
      const data = await getCategories();
      console.log(data);
    };
    getCategoriesAsync();
  }, []);
  return (
    <section className="mt-10 text-center">
      <h3 className="text-2xl text-blue-950">Choose quiz categories?</h3>
      <div className="h-[400px] w-3/5 mx-auto flex flex-col justify-center items-center"></div>
      <div className="flext justify-between items-center">
        <button className="bg-amber-300 text-blue-950 text-lg hover:font-bold hover:shadow-md">
          Previous <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className="bg-amber-300 text-blue-950 text-lg hover:font-bold hover:shadow-md">
          Next <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
}
