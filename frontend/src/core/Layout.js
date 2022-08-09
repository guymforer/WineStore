import React from "react";
import Menu from "./Menu";
import "../styles.css";
import Footer from "./Footer";
import SingleStockReport from "./SingleStockReport";

const Layout = ({title = 'Title', description = 'Description',className, children}) =>(
    <div>
        <div>
   <Menu />
        <div className="jumbotron">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
        
        </div>

                    {/* Breaking News Area */}
                    <div className="col-12 col-md-6">
              <div className="breaking-news-area">
                <h5 className="breaking-news-title">Exchange Rate</h5>
              </div>
            </div>
            {/* Stock News Area */}
            <div className="col-12 col-md-6">
              <div className="stock-news-area">
                <div id="stockNewsTicker" className="ticker">
                  <ul>
                    <li>
                      <SingleStockReport currSymbol={"ILS"} />
                      <SingleStockReport currSymbol={"EUR"} />
                      <SingleStockReport currSymbol={"GBP"} />
                    </li>
                    <li>
                      <SingleStockReport currSymbol={"CAD"} />
                      <SingleStockReport currSymbol={"RON"} />
                      <SingleStockReport currSymbol={"AUD"} />
                    </li>
                    <li>
                      <SingleStockReport currSymbol={"DKK"} />
                      <SingleStockReport currSymbol={"CHF"} />
                      <SingleStockReport currSymbol={"PLN"} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
   
        
        <Footer/>
        
        </div>
    
   
);

export default Layout;