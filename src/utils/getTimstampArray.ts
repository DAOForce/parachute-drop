interface getTimestampArrayParams {
  startDate: string;
  interval: number;
  rounds: number;
}
export const getTimestampArray = (
  startDate: string | number | Date,
  interval: number,
  rounds: number,
) => {
  console.log('>>>argsss', startDate, interval, rounds);
  const timeArray = [] as number[];
  const startDateObj = new Date(startDate);
  const iterator = new Array(rounds).fill(0);
  let currentDate = startDateObj;

  iterator.map((_) => {
    const unixTimestamp = Math.floor(currentDate.getTime() / 1000);

    timeArray.push(unixTimestamp);
    currentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + interval,
    );
  });

  return timeArray;
};
