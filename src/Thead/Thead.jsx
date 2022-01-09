import './Thead-style.css';

function Thead() {
    return (
        <thead>
            <tr id="row-header" className="row-header">
                <td className="checkbox"><input type="checkbox" id="checkbox" /></td>
                <td className="name">
                    <div id="sort-name">
                        <span id="name">NAME</span>
                        <div id="group-name" className="group-cta">
                            <div id="arrow-top"></div>
                            <div id="arrow-bottom"></div>
                        </div>
                    </div>
                </td>
                <td className="description">DESCRIPTION</td>
                <td className="rate">RATE</td>
                <td className="balance">BALANCE</td>
                <td className="deposoit">DEPOSIT</td>
                <td className="staus">
                    <div id="sort-status">
                        <span id="status">STATUS</span>
                        <div className="group-cta" id="group-cta-status">
                            <div id="arrow-top-status"></div>
                            <div id="arrow-bottom-status"></div>
                        </div>
                    </div>
                </td>
                <td className="delete">
                    <div className="cercles">
                        <div className="cercle"></div>
                        <div className="cercle"></div>
                        <div className="cercle"></div>
                    </div>
                </td>
            </tr>
        </thead>
    );
}

export default Thead;
