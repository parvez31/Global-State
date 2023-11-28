import Counter from "./Counter";
import Minus from "./Minus";
import Plus from "./Plus";

const Display = () => {
  return (
    <>
      <div className="p-10 min-w-[300px] rounded-lg shadow-lg bg-white">
        <div className="grid grid-cols-2 gap-4">
          {/* Counter */}
          <Counter />

          {/* Plus */}
          <Plus />

          {/* Minus */}
          <Minus />
        </div>
      </div>
    </>
  );
};

export default Display;
