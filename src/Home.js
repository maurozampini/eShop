import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className='home__container'>
                    <img src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg'
                        alt='' className='home__image'></img>

                    <div className='home__row'>
                        <Product
                            id="123456"
                            title="Bennett Mystic 16.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Red)"
                            price={11.96}
                            rating={5}
                            image={require('./images/cartera.jpg')}
                        />
                        <Product
                            id="123456"
                            title="Bennett Mystic 16.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Red)"
                            price={15}
                            rating={3}
                            image={require('./images/cartera.jpg')}
                        />
                    </div>

                    <div className='home__row'>
                        <Product
                            id="123456"
                            title="Bennett Mystic 16.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Red)"
                            price={6.60}
                            rating={3}
                            image={require('./images/cartera.jpg')}
                        />                        <Product
                            id="123456"
                            title="Bennett Mystic 16.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Red)"
                            price={11.96}
                            rating={1}
                            image={require('./images/cartera.jpg')}
                        />                        <Product
                            id="123456"
                            title="Bennett Mystic 16.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Red)"
                            price={56.52}
                            rating={4}
                            image={require('./images/cartera.jpg')}
                        />
                    </div>

                    <div className='home__row'>
                        <Product
                            id="123456"
                            title="Bennett Mystic 16.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Red)"
                            price={18.30}
                            rating={5}
                            image={require('./images/cartera.jpg')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home