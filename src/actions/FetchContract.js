//function to fetch data from delta exchange API and return data
export const FetchContract = async () => {
    try {
        const response = await fetch(`https://api.delta.exchange/v2/products`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
            
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
}