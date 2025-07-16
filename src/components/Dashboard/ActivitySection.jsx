import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Week 1", Guest: 400, User: 420 },
  { name: "Week 2", Guest: 210, User: 140 },
  { name: "Week 3", Guest: 300, User: 430 },
  { name: "Week 4", Guest: 430, User: 250 },
];

const ActivitySection = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Activities</h3>
        <select className="text-gray-500 border-none bg-transparent">
          <option>May - June 2021</option>
        </select>
      </div>

      <div style={{ width: "100%", height: 270 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: '#888888' }} />
            <YAxis tick={{ fill: '#888888' }} domain={[0, 500]} />
            <Tooltip />
            <Legend verticalAlign="top" align="right" iconType="circle" height={36} />
            <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="User" stroke="#9BDD7C" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivitySection;
