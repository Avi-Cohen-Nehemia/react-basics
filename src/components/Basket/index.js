import React from "react";
import PropTypes from 'prop-types';
import BasktItem from './BasketItem';

const Basket = ({ items }) => {
    return (
        <table className="table table-striped table-dark">
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
                    key={ index }
                />
                ) }
            </tbody>
        </table>
    )
}

Basket.propTypes = {
    items: PropTypes.array,
}

export default Basket;