import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useState } from "react";

import { QuizCategory } from "../types/quiz-type";

type Cate_props = {
  // defaultCate: string;
  categories: QuizCategory[];
  value: string;
  onCateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onNextClick: () => void;
  onPrevClick: () => void;
};

export default function SetQuizCategory(props: Cate_props) {
  const { categories, value, onCateChange, onNextClick, onPrevClick } = props;
  // console.log(categories);
  const mixOption = categories[0];
  const options = categories.filter((option) => option.id !== -1);
  return (
    <section className="mt-10">
      <h3 className="text-2xl text-blue-950 text-center">
        Choose quiz categories?
      </h3>
      <p className="w-4/5 mx-auto text-sm text-slate-400 text-center mb-2">
        * Only <span className="font-bold">1</span> category can be selected per
        quiz. To get any questions from any category, select "Mixed".
      </p>
      <div className="w-4/5 mx-auto grid grid-cols-3 gap-2 text-sm">
        <div className="col-span-3 mb-2 cursor-pointer">
          <input
            type="radio"
            id={`category-${mixOption.id}`}
            name="category"
            value=""
            className="mr-2"
            checked={value === ""}
            onChange={onCateChange}
          />
          <label htmlFor={`category-${mixOption.id}`}>{mixOption.name}</label>
        </div>
        {options.map((option) => {
          return (
            <div key={option.id} className="">
              <input
                type="radio"
                id={`category-${option.id}`}
                name="category"
                value={option.id}
                className="mr-2"
                checked={value === option.id.toString()}
                onChange={onCateChange}
              />
              <label htmlFor={`category-${option.id}`}>{option.name}</label>
            </div>
          );
        })}
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
