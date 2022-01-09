import "./Status.css"
let Status=({status})=> {
    return (
<td className="btn"><button className={status==='inactive'?'cta-inactive cta-inactive-active':'cta-active cta-inactive-active'} id={status==='inactive'?"inactive":"active"}>{status}</button></td>

    );
}
export default Status;

