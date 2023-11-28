import { countAtom } from "@/utils/atoms";
import { useAtom } from "jotai";

const Plus = () => {
  const [count, setCount] = useAtom(countAtom);

  const plusOne = function () {
    setCount(count + 1);
  };

  const plusTen = function () {
    setCount(count + 10);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <button
          className="bg-green-500 px-4 py-2 rounded-lg shadow-lg font-semibold shadow-green-300"
          onClick={plusOne}
        >
          Plus + 1
        </button>
        <button
          className="bg-green-500 px-4 py-2 rounded-lg shadow-lg font-semibold shadow-green-300"
          onClick={plusTen}
        >
          Plus + 10
        </button>
      </div>
    </>
  );
};

export default Plus;
