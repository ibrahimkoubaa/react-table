import "./Rate.css"
let Rate=({rate,currency})=> {
    return (
<td className="rate"><div class="divRate"><span className="spanPrice">{rate}</span><span className="spanCurrency">{currency}</span></div></td>

    );
}
export default Rate;