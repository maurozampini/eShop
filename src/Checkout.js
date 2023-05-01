import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          <CheckoutProduct
            id="123456"
            title="Bennett Mystic 16.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Red)"
            price={11.96}
            rating={5}
            image={require('./images/cartera.jpg')}
          />
          <CheckoutProduct
            id="123456"
            title="Bennett Water Repellent Fabric for Men and Women (Red)"
            price={5.50}
            rating={3}
            image={require('./images/cartera.jpg')}
          />
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout