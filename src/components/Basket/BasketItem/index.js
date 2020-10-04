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
    items: propTypes.array,
}

export default BasketItem;