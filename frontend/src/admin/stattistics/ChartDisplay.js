import React from "react";
import Layout from "../../core/Layout";
import ChartData from "./ChartData";
import DoughnutChart from "./DoughnutChart";

const ChartDisplay = () => {
  return (
    <div>
      {/* <Layout
        title="Statistics Dashboard"
        description={`G'day !`}
        className="container-fluid"
      > */}
      <div className="row">
        {/* <Statsticsfuncs /> */}
        <div className="col-8">
          <br />
          <h3> Updated stattistics:</h3>
          <h3>Orders status and profit of each status:</h3>
          <ChartData />
        </div>
        <div className="col-8">
        <h3>popular regions and each region profit:</h3>
          <DoughnutChart />
        </div>
      </div>
      {/* </Layout> */}
    </div>
  );
};

export default ChartDisplay;
