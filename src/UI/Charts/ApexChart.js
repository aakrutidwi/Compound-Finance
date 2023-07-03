import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../style.css";

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
    
        type: "column",
        data: [
          440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160, 440, 505,
          414, 671, 227, 413, 201, 352, 752, 320, 257, 160, 450, 340,257, 160, 440, 505,
        ],
      },
      {
     
        type: "line",
        data: [
          23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 23, 42, 35, 27, 43,
          22, 17, 31, 22, 22, 12, 16,22, 22, 12, 16,
        ],
      },
    ],
 
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: "line",
      },
      stroke: {
        width: [3, 4],
      },

      dataLabels: {
        enabled: false,
        enabledOnSeries: [1],
      },
      grid: {
        show: false,
      },
      labels: [
        "01 Jun",
        "02 Jun",
        "03 Jun",
        "04 Jun",
        "05 Jun",
        "06 Jun",
        "07 Jun",
        "08 Jun",
        "09 Jun",
        "10 Jun",
        "11 Jun",
        "12 Jun",
        "13 Jun",
        "14 Jun",
        "15 Jun",
        "16 Jun",
        "17 Jun",
        "18 Jun",
        "19 Jun",
        "20 Jun",
        "21 Jun",
        "22 Jun",
        "23 Jun",
        "24 Jun",
        "25 Jun",
        "26 Jun",
        "27 Jun",
        "28 Jun",
        "29 Jun",
        "30 Jun",
      ],
      xaxis: {
        type: "datetime",
        show: false, 
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,},
          axisTicks: {
              show: false,}
      },
      yaxis: [
        {
          opposite: false,
          labels: {
            show: false,
          },
        },
      ],
    },
  
  });

  return (
    <div className="barchart">
    <div id="chart" className="barChart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={200}
        width={500}
      />
    </div>
    </div>
  );
};

export default ApexChart;
