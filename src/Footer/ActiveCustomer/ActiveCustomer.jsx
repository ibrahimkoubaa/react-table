import "./ActiveCustomer.css";

export const ActiveCustomer = ({ arrayToRender }) => {
  const activeCustomes = arrayToRender.filter(x => { if (x.status === "active") { return x.status } })
  return (
    <div className="left-footer">
      <span>active customers:
        <b id="active-customers">{activeCustomes.length}</b>
        <span id="length">/{arrayToRender.length}</span>
      </span>
    </div>

  );
}

export default ActiveCustomer;