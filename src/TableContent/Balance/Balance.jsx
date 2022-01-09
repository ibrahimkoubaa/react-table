import "./Balance.css"
let Balance = ({ balance, currency }) => {
    return (
        <td className={"balance"}><div className="divBalance"><span className={balance > 0 ? 'balance-green balance-value' : balance < 0 ? 'balance-red balance-value' : 'balance-value'}>{balance}</span><span className="spanCurrency">{currency}</span></div></td>
    );
}
export default Balance;


