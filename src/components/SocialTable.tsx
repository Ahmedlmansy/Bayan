import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material";
import { LineChart, Line } from "recharts";

const data = [
  {
    source: "Dribbble",
    category: "Community",
    bounceRate: "70%",
    visit: "12,350",
    color: "#10b981",
    chartData: [5, 10, 8, 12, 11, 9],
    icon: "Dribbble",
  },
  {
    source: "LinkedIn",
    category: "Social Media",
    bounceRate: "60%",
    visit: "10,275",
    color: "#ec4899",
    chartData: [7, 6, 5, 8, 7, 6],
    icon: "linkedin",
  },
  {
    source: "Twitter",
    category: "Social Media",
    bounceRate: "50%",
    visit: "20,348",
    color: "#10b981",
    chartData: [4, 9, 6, 10, 8, 7],
    icon: "twitter",
  },
];

function SocialTable() {
  return (
    <>
      <div className="desSociacl">
        <p className="numSocial mb-1">
          1,315 <span className="high backHigh ">-12.5%</span>
        </p>
        <p className="m-0 source-category">Visits by Top Referral Source</p>
      </div>
      <TableContainer component={Paper} className="table-container">
        <Table className="custom-table">
          <TableHead>
            <TableRow>
              <TableCell className="table-head-cell">REFERRAL SOURCE</TableCell>
              <TableCell className="table-head-cell">BOUNCE RATE (%)</TableCell>
              <TableCell className="table-head-cell">VISIT</TableCell>
              <TableCell className="table-head-cell">CHART</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.source}>
                <TableCell>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <Avatar src={`/images/${row.icon}.svg`} alt={row.source} />
                    <div>
                      <div className="source-name">{row.source}</div>
                      <div className="source-category">{row.category}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="table-cell">{row.bounceRate}</TableCell>
                <TableCell className="table-cell">{row.visit}</TableCell>
                <TableCell>
                  <LineChart
                    width={80}
                    height={30}
                    data={row.chartData.map((y, i) => ({ x: i, y }))}
                  >
                    <Line
                      type="monotone"
                      dataKey="y"
                      stroke={row.color}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default SocialTable;
