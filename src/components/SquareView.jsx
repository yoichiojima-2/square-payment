import { groupByUser } from "./aggregateUser";

export const SquareView = ({ records }) => {
  const recordByUser = groupByUser(records);
  console.log("record by user", recordByUser);

  return (
    <div id="SquareView">
      <h2>square result</h2>
    </div>
  );
};
