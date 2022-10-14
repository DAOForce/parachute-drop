export const getTimestampArray = (
  startDate: string | number | Date,
  interval: number | null,
  rounds: number | null,
) => {
  const dateArray = startDate.toString().split('/');
  const timeArray = [] as number[];
  // @ts-ignore
  const startDateObj = new Date(`20${dateArray[0]}`, dateArray[1], dateArray[2]);
  const iterator = new Array(rounds).fill(0);
  let currentDate = startDateObj;

  iterator.map((_) => {
    const unixTimestamp = Math.floor(currentDate.getTime() / 1000);

    timeArray.push(unixTimestamp);
    currentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      // @ts-ignore
      currentDate.getDate() + interval,
    );
  });

  return timeArray;
};
