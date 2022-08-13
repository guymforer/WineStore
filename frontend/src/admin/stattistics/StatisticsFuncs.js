import React, { useState, useEffect } from "react";
import { getProducts } from "./apiStatics";


const StatisticsFuncs = () => {
  const [productPrice, setProductPrice] = useState([]);
  const [error, setError] = useState(false);

    const loadStats = () => {
      console.log("data stats");
        getProducts().then((data) => {
            console.log("data stats:", data);
      if (data.error) {
        setError(data.error);
      } else {
        setProductPrice(data);
        // fetch related products
      }
    });
  };

  useEffect(() => {
      loadStats();
  }, []);
    
    const handleChange = (e) => {
       
        loadStats();
    }

  return (
    <div>
          <h2 className="mb-4">Stats Product</h2>
          <button onClick={handleChange}> dis</button>
    
      </div>
 
  );
};

export default StatisticsFuncs;
