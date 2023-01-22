import React from 'react';
import { Area, AreaChart, CartesianAxis, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

interface DumpingChart {
  data: any;
}
function DumpingChart({ data }: DumpingChart) {
  return (
    <AreaChart
      width={965}
      height={300}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#EAEE41" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#EAEE41" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="date" />
      <YAxis />
      {/* <CartesianGrid strokeDasharray="3 0" /> */}
      <CartesianAxis y={1} />
      <Tooltip />
      <Area type="monotone" dataKey="amt" stroke="black" fillOpacity={1} fill="url(#colorUv)" />
    </AreaChart>
  );
}

export default DumpingChart;
