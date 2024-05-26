export const Controls = ({ viewMode, setAddMode, setViewMode }) => (
  <div id="controls">
    <button onClick={() => setAddMode(true)}>add</button>
    {viewMode !== "raw" && (
      <button onClick={() => setViewMode("raw")}>raw</button>
    )}
    {viewMode !== "userView" && (
      <button onClick={() => setViewMode("userView")}>user</button>
    )}
    {viewMode !== "square" && (
      <button onClick={() => setViewMode("square")}>square</button>
    )}
  </div>
);
