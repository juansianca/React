import React from 'react'
import cart from '../images/shopping-cart.png'

function CartWidget() {
    return(
    <> 
        <div className='cartCont'>
        <img src={cart} alt='cart' ClassName='CartIcon'/>
        <span className='cartCount'>3</span>
        </div>
    </>
    )
}

export default CartWidget