import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import "./PlayGraph.scss";
function PlayGraph(props) {
  const item = props.item;
  const data = [{
    title: item.title,
    uniquePlays: item.unique_plays,
    totalPlays: item.total_plays
  }];

  return (
    <div className="graph">
      <BarChart width={300} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uniquePlays" fill="#8884d8" />
        <Bar dataKey="totalPlays" fill="#82ca9d" />
      </BarChart>
      </div>
  )
};

export default PlayGraph;