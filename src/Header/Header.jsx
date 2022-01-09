import Search from "../Search/Search"
import "./Header.css";

export const Header=({myArray,funToRender})=>{
return (
    <div className="search-header">
      <Search myArray={myArray} funToRender={funToRender} />
    </div>
  );
}
  

export default Header;