import axios from "axios";

const url: string = "http://localhost:3400/api/v1/view-products";


export const getProduct = async () => {
  try {
    return await axios.get(url).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
