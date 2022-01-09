
import './Tbody-style.css';
import CheckBox from '../TableContent/CheckBox/CheckBox'
import Name from '../TableContent/Name/Name';
import Description from '../TableContent/Description/Description'
import Rate from '../TableContent/Rate/Rate'
import Balance from '../TableContent/Balance/Balance'
import Deposit from '../TableContent/Deposit/Deposit'
import Status from '../TableContent/Status/Status'
import EditLock from '../TableContent/EditLock/EditLock'

export let Tbody=({arrayToRender})=>{

    return (
        <tbody id="contentOfTable">
            {arrayToRender.map((customer,arr,index) => (
                <tr className='customer-data customer-data1' key={customer.id}>
                    <CheckBox />
                    <Name name={customer.name} id={customer.id} />
                    <Description description={customer.description} />
                    <Rate rate={customer.rate} currency={customer.currency} />
                    <Balance balance={customer.balance} currency={customer.currency} />
                    <Deposit deposit={customer.deposit} currency={customer.currency} />
                    <Status status={customer.status} />
                    <EditLock editLock={customer.protection} />
                </tr>
            ))}
        </tbody>
    )
};
export default Tbody;
