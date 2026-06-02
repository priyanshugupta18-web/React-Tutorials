/*import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    let [data, setData] = useState([])
  useEffect(
    (currency) => {
      fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
      )
        .then((response) => response.json())
        .then(() => {
          setData(response);
        });
    },
    [currency],
  );

  return data;
}

export default useCurrencyInfo;
*/

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response[currency]);
      })
      .catch((error) => {
        console.error("Currency API error:", error);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;