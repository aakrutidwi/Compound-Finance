import React from "react";
import ReactApexChart from "react-apexcharts";
import "./SummaryChart.css";

const generateDayWiseTimeSeries = (startX, endX, step) => {
  const slope = Math.tan((40 * Math.PI) / 180); // Calculate slope in radians
  const data = [];

  for (let x = startX; x <= endX; x += step) {
    const y = slope * x;
    data.push({ x, y });
  }

  return data;
};
const generateDayWiseTimeSeries2 = (startX, endX, step) => {
  const slope = Math.tan((45 * Math.PI) / 180); // Calculate slope in radians
  const data = [];

  for (let x = startX; x <= endX; x += step) {
    const y = slope * x;
    data.push({ x, y });
  }

  return data;
};

const generateDataForHorizontalLine = (startX, endX, yValue) => {
  const data = [];
  for (let x = startX; x <= endX; x++) {
    data.push({ x, y: yValue });
  }
  return data;
};
const SummaryChart = () => {
  const seriesSmall2 = [
    {
      data: generateDayWiseTimeSeries(0, 10, 1),
      color: "#089973",
    },
  ];
  const seriesSmall3 = [
    {
      data: generateDayWiseTimeSeries2(0, 10, 1),
      color: "#F0F2F5",
    },
  ];
  const seriesSmall4 = [
    {
      data: generateDataForHorizontalLine(0, 10, 5),
      color: "#8762F1",
    },
  ];

  const optionsSmall2 = {
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    legend: {
      show: true,
    },
    chart: {
      id: "li",
      group: "social",
      type: "line",
      height: 160,
      width: 300,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    stroke: {
      width: 2,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    plotOptions: {
      area: {
        fillTo: "none",
      },
    },
    colors: ["#546E7A"],
  };

  return (
    <div>
      <div className="wrapper">
        <div id="chart-line" className="top">
          <div className="sum">
            <div className="one">Utilization 90.89%</div>
            <div className="two">Borrrow APR 3.99%</div>
            <div className="three">Earn APR 3.09%</div>
          </div>
        
        </div>
        <div className="graph">
        <ReactApexChart
            options={optionsSmall2}
            series={seriesSmall4}
            type="line"
            height={60}
            width={200}
          />
        <div id="chart-line2" className="middle">
          <ReactApexChart
            options={optionsSmall2}
            series={seriesSmall3}
            type="line"
            height={60}
            width={200}
          />
        </div>
        <div id="chart-small2" className="last">
          <ReactApexChart
            options={optionsSmall2}
            series={seriesSmall2}
            type="line"
            height={60}
            width={200}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default SummaryChart;
