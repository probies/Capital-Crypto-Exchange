import { createContext, useState, useEffect } from 'react';
import { FetchContract } from '../actions/FetchContract';

export const ContractData = createContext();

//This is the provider component that provides the data to the all the component from global context
export function ContractDataProvider({children}) {

    const [contract, SetContract] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetchData(); 
    },[]);

    //Fetch Contract Data from API and Update the global state
    const fetchData = async () => {

        const data = await FetchContract();

        if(data.success){

            SetContract(data.result);
            setloading(loading => !loading);

            let socket = new WebSocket('wss://production-esocket.delta.exchange');

            const payload = {
                "type": "subscribe",
                "payload": {
                    "channels": [
                        {
                            "name": "v2/ticker",
                            "symbols": data.result.map(item => item.symbol)
                        }
                    ]
                }
            }

            //Send the payload to the socket on connection
            socket.onopen = function(event) {
                console.log(event)
                socket.send(JSON.stringify(payload)) 
            }
    
            //Receive the Mark_Price data from the socket and update the global state
            socket.onmessage = function(event) {

                const mark_data = JSON.parse(event.data);

                //check is msg of channel v2/ticker
                if (mark_data.type === "v2/ticker") {
                    SetContract( (contract) => {
                        const index = contract.findIndex(contract_item => contract_item.symbol === mark_data.symbol);
                        contract[index]['mark_price'] = mark_data.mark_price;
                        return [...contract];
                    });
                }

            };

            socket.onclose = function (event) {
                console.log('The connection has been closed successfully.');
            };

            socket.onerror = function (event) {
                console.log('WebSocket error: ', event);
            };

        }

    };

    return (
        <ContractData.Provider value={{ contract,loading }}>
            {children}
        </ContractData.Provider>
    );
}