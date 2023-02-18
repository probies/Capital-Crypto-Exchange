import { useContext } from "react";
import { ContractData } from "../context/ContractData";

export default function ContractTable() {
  const { contract, loading, LoaderFunction, after, before } =
    useContext(ContractData);

  if (loading) {
    return (
      <div className="container">
        <div className="mt-28 mb-10 mx-2 text-3xl text-stone-800 font-extrabold">
          Loading Contract Data ...
        </div>
      </div>
    );
  }

  return (
    //<div className="container">Table</div>
    <div className="container">
      <div className="mt-28 mb-10 mx-2 underline underline-offset-3 text-3xl text-stone-800 font-extrabold">
        Markets
      </div>

      <div>
        <div className="relative mb-12 mx-2 md:mx-0 overflow-x-auto tracking-wide shadow-xl border rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="px-6 py-4 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Contract
                </th>
                <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 items-center justify-center hidden sm:flex"
                >
                  Underlying Asset
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {contract.map((item) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={item?.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 flex items-center sm:flex-none font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        src={`https://www.delta.exchange/cryptoAssetIcons/color/${item.underlying_asset.symbol.toLowerCase()}.png`}
                        className="h-8 w-8 sm:hidden"
                        alt={item.underlying_asset.symbol}
                      />
                      <div className="px-2">{item.symbol}</div>
                    </th>
                    <td className="px-6 py-4 hidden sm:table-cell">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 hidden  items-center justify-center sm:flex">
                      <img
                        src={`https://www.delta.exchange/cryptoAssetIcons/color/${item.underlying_asset.symbol.toLowerCase()}.png`}
                        className="h-8 w-8"
                        alt={item.underlying_asset.symbol}
                      />
                      <div className="px-4">{item.underlying_asset.symbol}</div>
                    </td>
                    <td className="px-6 py-4 text-green-700 font-semibold">
                      {item.hasOwnProperty("mark_price")
                        ? parseFloat(item.mark_price).toFixed(2) + " $"
                        : "Fetching.."}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="bg-white border-b px-6 py-2  dark:bg-gray-800 dark:border-gray-700 flex justify-center">
            {after === null && before !== null ? (
              ""
            ) : (
              <button
                className="m-2 px-4 py-1 rounded text-center bg-blue-500 text-white"
                onClick={LoaderFunction}
              >
                Load More Contracts
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
