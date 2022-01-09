import SelecteRowsPagination from "./SelecteRowsPagination/SelecteRowsPagination";
import ActiveCustomer from "./ActiveCustomer/ActiveCustomer";


export const Footer=({arrayToRender})=>{
  return (
    <footer>
      <ActiveCustomer arrayToRender={arrayToRender}/>
      <SelecteRowsPagination />
    </footer>

  );
}
export default Footer;