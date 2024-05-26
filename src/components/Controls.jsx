export const Controls = ({ setAddMode, setViewMode }) => {
  return (
    <div id="controls">
      <button onClick={() => setAddMode(true)}>add</button>
      <button onClick={() => setViewMode("raw")}>raw</button>
      <button onClick={() => setViewMode("userView")}>user</button>
      <button onClick={() => setViewMode("square")}>square</button>
    </div>
  );
};
