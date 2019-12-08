import React from "react";
import { StyledWrapper } from "./styles";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Legend,
  PieChart,
  Pie
} from "recharts";

const data = [
  {
    name: "Mon",
    ThisWeek: 1,
    LastWeek: 0.5,
    amt: 2400
  },
  {
    name: "Tue",
    ThisWeek: 0.8,
    LastWeek: 1,
    amt: 2210
  },
  {
    name: "Wed",
    ThisWeek: 3,
    LastWeek: 1.5,
    amt: 2290
  },
  {
    name: "Thu",
    ThisWeek: 2.5,
    LastWeek: 2,
    amt: 2000
  },
  {
    name: "Fri",
    ThisWeek: 1,
    LastWeek: 0.8,
    amt: 2181
  },
  {
    name: "Sat",
    ThisWeek: 1.5,
    LastWeek: 1.2,
    amt: 2500
  },
  {
    name: "Sun",
    ThisWeek: 1.3,
    LastWeek: 1,
    amt: 2100
  }
];

const data01 = [
  {
    name: "Group A",
    value: 400
  },
  {
    name: "Group B",
    value: 300
  },
  {
    name: "Group C",
    value: 300
  },
  {
    name: "Group D",
    value: 200
  },
  {
    name: "Group E",
    value: 278
  },
  {
    name: "Group F",
    value: 189
  }
];
const data02 = [
  {
    name: "Group A",
    value: 2400
  },
  {
    name: "Group B",
    value: 4567
  },
  {
    name: "Group C",
    value: 1398
  },
  {
    name: "Group D",
    value: 9800
  },
  {
    name: "Group E",
    value: 3908
  },
  {
    name: "Group F",
    value: 4800
  }
];

const Stats = () => (
  <StyledWrapper>
    <h2> Weekly results </h2>
    <br />
    <LineChart width={340} style={{ marginLeft: -20 }} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="ThisWeek" stroke="#489AF1" />
      <Line type="monotone" dataKey="LastWeek" stroke="#8CE7F5" />
      <Legend verticalAlign="top" height={36} />
    </LineChart>
    <br />
    <PieChart width={320} height={250}>
      <Pie
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill=" #8CE7F5"
      />
      <Pie
        data={data02}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#489AF1"
        label
      />
    </PieChart>
  </StyledWrapper>
);

export default Stats;
