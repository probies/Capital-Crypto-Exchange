//function to fetch data from delta exchange API and return data
export const FetchContract = async (after) => {
    console.log(after);
    try {
        const response = await fetch(`https://api.delta.exchange/v2/products?page_size=15${after?`&after=${after}`:''}`, {
            method: 'GET',
            mode:'cors',
            headers: {
                Accept: 'application/json',
            },
            
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
}