import { useEffect } from "react";

const Box = ({ count, setCount }) => {
  useEffect(() => {
    if (count === 0) return;

    console.log(count);
  }, [count]);

  return (
    <div className="w-40 h-40 bg-blue-300 flex justify-center items-center">
      {count}
      <button className="ml-2" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default Box;
