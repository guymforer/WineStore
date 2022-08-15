import React from "react";
import Layout from "../../core/Layout";
import ChartData from "./ChartData";
import DoughnutChart from "./DoughnutChart";

const ChartDisplay = () => {
  return (
    <div>
      <Layout
        title="Statistics Dashboard"
        description={`G'day !`}
        className="container-fluid"
      >
        <div className="row">
          {/* <Statsticsfuncs /> */}
          <div className="bar-chart">
            <ChartData />
          </div>
          <div className="dough-chart">
            <DoughnutChart />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ChartDisplay;
