import { API } from "../../config";

//orders

/**
 * to perform crud on product
 * get all products
 * get a single product
 * update single product
 * delete single product
 */

export const getProducts = () => {
  //console.log(name,email,password);
  return fetch(`${API}/products?sortBy=price&order=desc&limit=undefined`, {
    method: "GET",
  })
      .then((response) => {
        console.log("this is", response);
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const groupBy = () => {
  //console.log(name,email,password);
  return fetch(`${API}/groupBy`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};