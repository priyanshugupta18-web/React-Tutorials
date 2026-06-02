import { useEffect, useState} from "react";

function useOptions() {
    let [options, setOptions] = useState([])
    useEffect(() =>{fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
    .then((response)=>(response.json()))
    .then((response) => {
        setOptions(Object.keys(response));
    })
}, [""]);
return options;
}

export default useOptions;