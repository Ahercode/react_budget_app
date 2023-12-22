
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const changeLocation = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
        setNewCurrency(val)
    }

 console.log("currency",currency)
    return (
        <div className={`alert alert-success`}>
            <span>Currency: </span>
            <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>	
        </div>
    );
};
export default Currency;