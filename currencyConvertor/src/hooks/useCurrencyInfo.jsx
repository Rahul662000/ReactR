import { set } from "mongoose";
import { useEffect , useState } from "react";

function useCurrencyInfo(currency) {

    const [data , setData] = useState({});

    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        // .then((res) => res.json())
        // .then((res) => setData(res[currency]));
        // console.log(data)

        if (!currency) return;

        const fetchCurrency = async () => {
        try {
            const res = await fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`
            );
            console.log(res)
            const result = await res.json();
            console.log(result)
            setData(result[currency.toLowerCase()] || {});
            console.log(data)
        } catch (error) {
            console.error("Failed to fetch currency data:", error);
            setData({});
        }
        };

        fetchCurrency();
    } , [currency] );

    return data;

}

export default useCurrencyInfo;