import { useState } from "react";
function App() {
  const colorData = [
    {
      color: "red",
    },
    {
      color: "green",
    },
    {
      color: "yellow",
    },
    {
      color: "blue",
    },
    {
      color: "lightblue",
    },
    {
      color: "purple",
    },
  ];
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-2 rounded-3xl">
          {colorData.map((col, key) => {
            return (
              <>
                <button
                  className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
                  style={{ backgroundColor: col.color }}
                  onClick={() => setColor(col.color)}
                  key={key}
                >
                  {col.color}
                </button>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
