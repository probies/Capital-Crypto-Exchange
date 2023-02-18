import axios from "axios";
//function to fetch data from delta exchange API and return data
export const FetchContract = async (after) => {
  console.log(after);
  try {
    const response = await axios.get(
      `https://capital-crypto-exchange-api.cyclic.app/api/products${after ? `&after=${after}` : ""}`);
    return await response.data;
  } catch (err) {
    return console.log(err);
  }
};
