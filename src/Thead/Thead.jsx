import './Thead-style.css';
import React, { useState } from 'react';

let orderToSortName = undefined
export const Thead = ({ myArray, arrayToRender, funToRender }) => {
    const [sortName, setsortName] = useState(orderToSortName);
{console.log(arrayToRender)}
    if (sortName == undefined) {
        //c
        
        }
       
    if (sortName == 'atz') {
        
        arrayToRender.sort((a, b) => {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        
    };

    if (sortName == 'zta') {
        
        arrayToRender.sort((a, b) => {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        });
        console.log(arrayToRender)
        funToRender(arrayToRender)
    };
    






    return (
        <thead>
            <tr id="row-header" className="row-header">
                <td className="checkbox"><input type="checkbox" id="checkbox" /></td>
                <td className="name">
                    <div id="sort-name" onClick={() => {
                        if (sortName == undefined ) {
                            setsortName('atz')

                            // arrowNBottom.id = 'display';
                        } else if ( sortName == 'atz') {
                            setsortName('zta')

                            // arrowNTop.id = 'display';
                            // arrowNBottom.id = 'arrow-bottom';
                        } else if (sortName == 'zta') {

                            setsortName(undefined)

                            // arrowNTop.id = 'arrow-top';
                        }
                        
                    }

                    }>
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
