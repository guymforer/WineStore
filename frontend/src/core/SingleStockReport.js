import { useState } from "react";

function SingleStockReport(props) {
  const [curr, setCurr] = useState();
  const current = Date.now();

  fetch(`https://api.exchangerate.host/latest?base=USD&v=${current}`)
    .then((res) => res.json())
    .then((res) => {
      setCurr(res.rates[props.currSymbol]);
    });

  return (
    <div className="single-stock-report">
      <div className="stock-values">
        <span>{props.currSymbol}/USD</span>
      </div>
      {/* minus-index OR plus-index */}
      <div className="stock-index">
        <h4>{parseFloat(curr).toFixed(3)}</h4>
      </div>
    </div>
  );
}

export default SingleStockReport;
