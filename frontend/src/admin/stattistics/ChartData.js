import React, { useEffect, useState } from "react";
import { getOrderEnumStat } from "../apiAdmin";
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Layout from "../../core/Layout";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartData = () => {
  const [vals, setVals] = useState();

  useEffect(() => {
    // setData(getOrderEnumStat())
    const getVals = async () => {
      const res = await getOrderEnumStat();
      setVals(res);
      console.log("res is:", res);
    };
    getVals();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        test: "products by status",
      },
    },
  };

  const data = {
    labels: vals?.map((obj) => obj.status),
    datasets: [
      {
        label: "status",
        data: vals?.map((obj) => obj.amount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {/* <Layout
        title="Dashboard"
        description={`G'day }!`}
        className="container-fluid"
      >
        <div className="row">
     
          <div className="charts-div">
            <Bar options={options} data={data} />
          </div>
        </div>
      </Layout> */}

      <Bar options={options} data={data} />
    </div>
  );
};

export default ChartData;
