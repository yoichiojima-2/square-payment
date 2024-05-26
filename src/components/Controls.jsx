export const Controls = ({ setViewMode }) => {
  return (
    <div id="controls">
      <button onClick={() => setViewMode("raw")}>raw mode</button>
      <button onClick={() => setViewMode("userView")}>user view</button>
      <button onClick={() => setViewMode("square")}>square</button>
    </div>
  );
};
