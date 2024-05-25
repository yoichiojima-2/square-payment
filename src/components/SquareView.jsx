import { getSquareTaskByUser } from "./aggregate";

export const SquareView = ({ records }) => {
  getSquareTaskByUser(records);

  return (
    <div id="SquareView">
      <h2>square result</h2>
    </div>
  );
};