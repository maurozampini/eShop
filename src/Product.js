import React from 'react'
import './Product.css'

const Product = () => {
    return (
        <div>
            <div className='product'>
                <div className='product__info'>
                    <p>Bennett Mystic 16.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Red)</p>
                    <p className='product__price'>
                        <small>$</small>
                        <strong>30</strong>
                    </p>
                    <div className='product__rating'>⭐⭐</div>
                </div>

                <img src={require('./images/cartera.jpg')} alt='product'></img>

                <button>Add to basket</button>
            </div>
        </div>
    )
}

export default Product