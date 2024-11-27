import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './CustomPieChart.css'

const data = [
  { name: 'Your Files', value: 63, color: '#4A56E2' },
  { name: 'System', value: 25, color: '#38BDF8' },
  { name: 'Other', value: 12, color: '#E5E7EB' }, // For the light background color
];

const CustomPieChart = ({ data }) => {
  return (
    <div className="chart-container">
      <h3 className="chart-title">% of Customers who would Recommend Services</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius="100%"
            paddingAngle={5}
            dataKey="value"
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="chart-legend">
        {data.slice(0, 2).map((entry, index) => (
          <div key={index} className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className="legend-text">{entry.name}</span>
            <span className="legend-value">{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomPieChart;