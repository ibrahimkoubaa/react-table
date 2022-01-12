import "./Rate.css"
let Rate=({rate,currency})=> {
    return (
<td className="rate"><div className="divRate"><span className="spanPrice">{rate}</span><span className="spanCurrency">{currency}</span></div></td>

    );
}
export default Rate;