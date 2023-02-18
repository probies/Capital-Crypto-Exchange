import axios from "axios";
//function to fetch data from delta exchange API and return data
export const FetchContract = async (after) => {
  console.log(after);
  try {
    const response = await axios.get(
      `https://api.delta.exchange/v2/products?page_size=15${after ? `&after=${after}` : ""}`,
      {
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      }
    );
    return await response.data;
  } catch (err) {
    return console.log(err);
  }
};
