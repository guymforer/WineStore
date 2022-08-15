import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getGroupByAdd } from "../apiAdmin";
import Layout from "../../core/Layout";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const [vals, setVals] = useState();

  useEffect(() => {
    // setData(getOrderEnumStat())
    const getVals = async () => {
      const res = await getGroupByAdd();
      setVals(res);
      console.log("res is:", res);
    };
    getVals();
  }, []);

  const data = {
    labels: vals?.map((obj) => obj.address),
    datasets: [
      {
        label: "total$",
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
          </div>
          </div>
        </Layout> */}
        <Doughnut data={data} />;
    </div>
  );
};

export default DoughnutChart;
