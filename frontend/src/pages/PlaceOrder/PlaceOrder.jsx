import { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
   <form className='place-order'>
<div className='place-order-left'>
  <p className="title">Delivery Information</p>

    <div className="multi-fields">
      <input type="text" placeholder='first name' />
      <input type="text" placeholder='last name'/>
    </div>

    <div className="multi-fields">
<input type="text" placeholder='Email address' />
<input type="text" placeholder='Street'/>
</div>

<div className="multi-fields">
      <input type="text" placeholder='City' />
      <input type="text" placeholder='State'/>
    </div>


<div className="multi-fields">
      <input type="text" placeholder='Zip-Code' />
      <input type="text" placeholder='Country'/>
    </div>
<input type="text" placeholder='Phone' />
</div>

<div className='place-order-right'>
<div className="cart-total">
            <h2>
               Cart Totals
            </h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>&#8377;{getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
            <p>&#8377;{2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>&#8377;{getTotalCartAmount()+2}</b>
            </div>
        <button>Proceed To Payment</button>
        </div>
  
</div>
     
   </form>
  )
}

export default PlaceOrder