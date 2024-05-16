import { useState } from "react";
import Box from "./components/Box";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <Box count={count} setCount={setCount} />
    </div>
  );
};

export default App;
