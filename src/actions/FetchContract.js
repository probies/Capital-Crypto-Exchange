import axios from "axios";
//function to fetch data from delta exchange API and return data
export const FetchContract = async (after) => {
  console.log(after);
  try {
    const response = await axios.get(
      `https://api.delta.exchange/v2/products?page_size=15${after ? `&after=${after}` : ""}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Credentials": "true",
        },
      }
    );
    return await response.data;
  } catch (err) {
    return console.log(err);
  }
};
