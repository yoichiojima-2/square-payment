export const Controls = ({
  squareView,
  setSquareView,
  sortByUser,
  setSortByUser,
}) => {
  return (
    <div id="controls">
      {!squareView ? (
        <button onClick={() => setSortByUser(!sortByUser)}>
          {sortByUser ? "back" : "subtotal by user"}
        </button>
      ) : (
        <></>
      )}
      <button onClick={() => setSquareView(!squareView)}>
        {squareView ? "record management" : "square"}
      </button>
    </div>
  );
};
