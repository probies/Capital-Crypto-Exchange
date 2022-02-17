import { useContext } from "react";
import { ContractData } from "../context/ContractData";

export default function ContractTable() {

    const {contract,loading} = useContext(ContractData);

    if(loading){
        return ( <h3>Loading...</h3> )
    }
    
    return (
    <div style={{'margin':'10px'}}>

        <table style={{'width':'100%'}}>

            <thead >
                <tr style={{'padding':'10px'}}>
                    <th style={{'textAlign':'start'}}>Symbol</th>
                    <th style={{'textAlign':'center'}}>Description</th>
                    <th style={{ 'textAlign':'end' }}>Underlying Asset</th>
                    <th style={{'textAlign':'end'}}>Mark Price</th>
                </tr> 
            </thead>

            <tbody>
                {contract.map((item) => {
                    return(
                        <tr key={item.id}>
                            <td style={{'textAlign':'start','fontWeight':'bold'}}>{ item.symbol }</td>
                            <td style={{'textAlign':'center'}}>{ item.description }</td>
                            <td style={{'textAlign':'end'}}>{ item.underlying_asset.symbol }</td>
                            <td style={{'textAlign':'end','fontWeight':'bold','color':'blue'}}>
                                {(item.hasOwnProperty('mark_price'))
                                    ?
                                    item.mark_price
                                    : 'Fetching..'
                                }
                            </td>
                        </tr>
                    )
                })}
            </tbody>

        </table>

      </div>
  )
}
