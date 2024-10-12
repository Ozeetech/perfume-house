import React from 'react';
import Product from '../component/Product';
import Cart from '../component/Cart';

const Home = ({cart,setCart,handleAddToCart,removeItem,calcTotalPrice}) => {
  return (
    <>
     <main className='container py-4'>
        <section className='row'>
          <div className='col-lg-8'>
            <Product  cart={cart} setCart={setCart} handleAddToCart={handleAddToCart}/>
          </div>
          <div className='col-md-4'>
            <Cart calcTotalPrice={calcTotalPrice} cart={cart} setCart={setCart} removeItem={removeItem}/>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
