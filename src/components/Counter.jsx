import { countAtom } from "@/utils/atoms";
import { useAtom } from "jotai";

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <>
      <h1 className="col-span-2 text-3xl text-center">Counter : {count}</h1>
    </>
  );
};

export default Counter;
