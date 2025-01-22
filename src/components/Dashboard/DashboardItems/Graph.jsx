import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Sep 16", users: 40, language: 20 },
  { date: "Sep 17", users: 42, language: 22 },
  { date: "Sep 18", users: 20, language: 20 },
  { date: "Sep 19", users: 45, language: 27 },
  { date: "Sep 20", users: 25, language: 30 },
  { date: "Sep 21", users: 30, language: 20 },
  { date: "Sep 22", users: 50, language: 50 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 p-2 rounded shadow">
        <p className="text-gray-500 text-sm">{`Date: ${label}`}</p>
        <p className="font-semibold text-black">{`Users: ${payload[0].value}`}</p>
        <p className="font-semibold text-black">{`User English Language : ${payload[0].payload.language}`}</p>
      </div>
    );
  }
  return null;
};

const Graph = () => {
  return (
    <div className="border border-gray-300 rounded-lg mt-4 bg-white">
      <div className="m-5">
        <div className="font-inter font-semibold">Users Stats</div>
        <div className="text-gray-600">
          <p>Track how your Users Stats Works</p>
        </div>
      </div>
      <ResponsiveContainer width="95%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          {/* Display only the 'users' line */}
          <Line
            type="monotone"
            dataKey="users"
            stroke="#FFB800"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
