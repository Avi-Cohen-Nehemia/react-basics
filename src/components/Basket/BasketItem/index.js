import React from "react";
import PropTypes from 'prop-types';

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
    name: PropTypes.string,
    price: PropTypes.number,
    index: PropTypes.number
}

export default BasketItem;