import React from 'react';

const ChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 p-2 rounded shadow">
        <p>Time: {label}</p>
        <p>Price: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default ChartTooltip;