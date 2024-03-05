import Slider from "rc-slider";
import "rc-slider/assets/index.css";

// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

type Qty_props = {
  defaultValue: number;
  onQtyChange: (value: number | number[]) => void;
  onNextClick: () => void;
};

export default function SetQuizQty(props: Qty_props) {
  // const [number, setNumber] = useState(5)
  const { defaultValue, onQtyChange, onNextClick } = props;
  // const [qtyInput, setQtyInput] = useState<number>(defaultValue);

  return (
    <section className="mt-10 text-center">
      <h3 className="text-2xl text-blue-950">How many numbers of quiz?</h3>
      <div className="min-h-[250px] w-3/5 mx-auto flex flex-col justify-center items-center">
        <div className="mb-6">
          Quiz Numbers: <span className="">{defaultValue}</span>
        </div>
        <Slider
          min={5}
          max={50}
          step={5}
          defaultValue={defaultValue}
          // value={defaultValue}
          // value={qtyInput}
          marks={{
            5: 5,
            10: "",
            15: "",
            20: 20,
            25: "",
            30: "",
            35: 35,
            40: "",
            45: "",
            50: 50,
          }}
          onChange={onQtyChange}
        />
      </div>
      <div className="mt-6 flext justify-between items-center">
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
