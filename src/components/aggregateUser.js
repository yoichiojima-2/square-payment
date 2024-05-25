export const groupByUser = (records) => {
  const userTotals = records.reduce((acc, record) => {
    if (!acc[record.name]) {
      acc[record.name] = { totalAmount: 0, records: [] };
    }
    acc[record.name].totalAmount += record.amount;
    acc[record.name].records.push(record);
    return acc;
  }, {});

  return Object.keys(userTotals).map((name) => ({
    name,
    totalAmount: userTotals[name].totalAmount,
    records: userTotals[name].records,
  }));
};
