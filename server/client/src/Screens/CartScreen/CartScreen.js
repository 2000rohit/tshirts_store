import React from 'react'
import './CartScreen.css'

import { deleteFromCart } from '../../Redux/Action/cartAction'

import { useSelector, useDispatch } from 'react-redux'

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer)
  const cartItems = cartState.cartItems
  console.log(cartItems)
  var subTotal = cartItems.reduce((x, item) => x + item.price, 0)

  const dispatch = useDispatch()

  return (
    <div className='p-3'>
      <div
        className='d-flex justify-content-around'
        style={{ backgroundColor: 'orange', width: '90vw', margin: 'auto' }}
      >
        <h1>product</h1>
        <h1>quantity</h1>
        <h1>subtotal</h1>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-11'>
          {cartItems &&
            cartItems.map((item, index) => {
              return (
                <div
                  className='m-3 p-3 flex-container d-flex'
                  key={item._id}
                  style={{
                    boxShadow: '0 0  0.8rem gray',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flex: '1 1 20rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div
                      className='d-flex justify-content-center align-items-center'
                      style={{ flex: '0 1 10rem' }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ height: '8rem', width: '8rem' }}
                      />
                    </div>
                    <div style={{ flex: '1 1 10rem' }}>
                      <h5 className='card-title'>{item.name}</h5>
                      <h1 style={{ fontSize: '1.4rem' }}>
                        Price ₹{Math.round(item.price)}
                      </h1>

                      <i
                        className='fas fa-trash'
                        onClick={() => {
                          dispatch(deleteFromCart(item))
                        }}
                      ></i>
                    </div>
                  </div>
                  <div
                    className='d-flex justify-content-center align-items-center'
                    style={{ flex: '1 1 20rem' }}
                  >
                    <h1>{item.quantity}</h1>
                  </div>
                  <div
                    className='d-flex justify-content-center align-items-center'
                    style={{ flex: '1 1 20rem' }}
                  >
                    <h1>₹{Math.round(item.price)}</h1>
                  </div>
                </div>
              )
            })}
        </div>
        <div
          className='d-flex justify-content-end'
          style={{ width: '90vw', margin: 'auto' }}
        >
          <div
            className='mt-4 hold d-flex justify-content-center align-items-center'
            style={{
              borderTop: '1px solid black',
              height: '8rem',
              width: '18rem',
              flexDirection: 'column',
            }}
          >
            <h2 style={{ fontSize: '1.5rem' }}>
              Subtotal: {Math.round(subTotal)} ₹
            </h2>
            <button className='btn' onClick={() => alert('Pay btn clicked')}>
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
