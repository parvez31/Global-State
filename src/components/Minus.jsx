import { countAtom } from "@/utils/atoms";
import { useAtom } from "jotai";

const Minus = () => {
  const [count, setCount] = useAtom(countAtom);

  const minusOne = function () {
    setCount(count - 1);
  };

  const minusTen = function () {
    setCount(count - 10);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <button
          className="bg-red-500 px-4 py-2 rounded-lg shadow-lg font-semibold shadow-red-300"
          onClick={minusOne}
        >
          Minus - 1
        </button>
        <button
          className="bg-red-500 px-4 py-2 rounded-lg shadow-lg font-semibold shadow-red-300"
          onClick={minusTen}
        >
          Minus - 10
        </button>
      </div>
    </>
  );
};

export default Minus;
