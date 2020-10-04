import React from "react";
import propTypes from 'prop-types';

const BasketItem = ({ name, price, index }) => {
    return (
        <tr>
            <th scope="row">{ index }</th>
            <td>{ name }</td>
            <td>{ price }</td>
        </tr>
    )
}

BasketItem.propTypes = {
    name: propTypes.string,
    price: propTypes.number,
    index: propTypes.number
}

export default BasketItem;