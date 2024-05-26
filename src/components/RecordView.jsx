import { groupByUser } from "./aggregate";
import { unit } from "./config";

const removeRecordByIndex = (records, index) =>
  records.filter((_, _idx) => _idx !== index);

export const RecordsTotalView = ({ records, setRecords }) => {
  const removeRecordByIndex = (index) => {
    setRecords(removeRecordByIndex(records, index));
  };

  return (
    <div>
      <div className="Card">
        <h2>record</h2>
        <div className="Line" />
        {records.length === 0 ? (
          <p>no records</p>
        ) : (
          records.map((record, index) => (
            <div key={index} className="HStack">
              <div className="Column">
                <p>{record.name}</p>
              </div>
              <div className="Column">
                <p>{record.title}</p>
              </div>
              <div className="Column">
                <p>
                  {unit} {record.amount}
                </p>
              </div>
              <div className="Column">
                <button onClick={() => removeRecordByIndex(index)}>
                  delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export const RecordsUserView = ({ records }) => {
  const recordByUser = groupByUser(records);

  return (
    <div>
      <h2>record by user</h2>
      {recordByUser.map((user) => (
        <div key={user.name} className="Card">
          <div className="HStack">
            <h3>{user.name}</h3>
            <h4>
              total - {unit} {user.totalAmount}
            </h4>
          </div>
          <div className="Line" />
          {user.records.map((record, index) => (
            <div key={index} className="HStack">
              <p>{record.title}</p>
              <p>
                {unit} {record.amount}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};