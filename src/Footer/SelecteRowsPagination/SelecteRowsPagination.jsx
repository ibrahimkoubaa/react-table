import "./SelecteRowsPagination.css";
function SelecteRowsPagination() {
  return (
    <div className="right-footer">
                <div className="selection-row">
                    <span className="rows-select">Rows per page:</span>
                    <select name="custumer" id="rows-select" style={{border: "none"}}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                    </select>
                </div>
                <span id="rows-page"></span>
                <div className="group-btn-table">
                    <button><div id="arrow-left"></div></button>
                    <button><div id="arrow-right"></div></button>
                </div>
            </div>
      
  );
}
export default SelecteRowsPagination;

