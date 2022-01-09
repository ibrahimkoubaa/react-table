import "./Search.css"
import React, { useState } from "react"


export const Input = ({ myArray, funToRender }) => {
  const [customerToSearch, setcustomerToSearch] = useState('');

  
  const searchedCustomers = myArray.filter((customer) => {
      let nameValue = customer.name.toLowerCase();
      let descriptionValue = customer.description.toLowerCase();
      if (nameValue !== undefined) {
          if (nameValue.includes(customerToSearch) || descriptionValue.includes(customerToSearch)) {
              return true
          }
      }
      return false
  })
  
  return (
    <div>
      <input onKeyUp={(event=>{
        setcustomerToSearch(event.target.value)
        funToRender(searchedCustomers)
      })

      }
        className="field-search"
        type="text"
        name="search"
        id="search"
        placeholder="Search" />
      <div className="icon-search"></div>
    </div>
  );
}
export default Input;