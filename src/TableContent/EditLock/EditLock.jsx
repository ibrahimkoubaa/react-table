import "../EditLock/EditLock.css"
let EditLock=({lock})=> {
    return (
        <td className="iconsBox">
            <div className="divOfIcons edit-delete">
                <img id="edit" className="width" src="images/edit.png" alt="edit image" />
                <img id={lock?"lock":"unlock"} className="width" src="images/lock.png" alt="lock image" />

            </div>
        </td>
        
    );
}
export default EditLock;


