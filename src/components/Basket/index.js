import React from "react";
import propTypes from 'prop-types';
import BasktItem from './BasketItem';

const Basket = ({ items }) => {
    return (
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                { items.map((item, index) =>
                <BasktItem
                    price={ item.price }
                    name={ item.name }
                    index={ index + 1 }
                />
                ) }
            </tbody>
        </table>
    )
}

Basket.propTypes = {
    items: propTypes.array,
}

export default Basket;