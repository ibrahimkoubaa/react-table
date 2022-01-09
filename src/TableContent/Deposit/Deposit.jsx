import "./Deposit.css"
let Deposit=({deposit,currency})=> {
   
    return (
<td className="deposit"><div className="divDeposit"><span className="spanDeposit">{deposit}</span><span className="spanCurrency">{currency}</span></div></td>

    );
}
export default Deposit;
