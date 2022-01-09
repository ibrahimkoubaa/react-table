import "./Name.css"
let Name=({name,id})=> {
    return (
        <td className="name"><div className="divName"><span className="full-name">{name}</span><span className="id">{id}</span></div></td>
    );
}
export default Name;