import React from 'react';
import { groupBy } from './apiStatics';
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import { Bar } from 'react-chartjs-2'

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ groupBy }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        test: "products by category",
      },
    },
  };

  const data = {
    labels: groupBy.map((obj) => obj.category),
    datasets: [
      {
        label: 'Products',
        data: groupBy.map((obj) => obj.amountSold),
        backgroundColor: 'rgba(53,162,235,0.5)',

      },
      {
        label: 'Profit',
        data: groupBy.map((obj) => obj.profit),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',

      },
    ],
  };
  return <Bar options={options} data={data} />
}

export default BarChart;