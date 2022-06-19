import React from 'react'
import {TbTruckDelivery} from "react-icons/tb"
import {MdGpsFixed } from "react-icons/md"
import {MdOutlineRadioButtonChecked } from "react-icons/md"
import {Link} from 'react-router-dom'
import './cart.css'
export const CartCheckout = ({price,discount,tax,orderTotal,route}) => {
  return (
     <>
    <div className="cartRight">
    
      
        <div>
            <div>
                <div className="cartSum">
            <h2>Order Summary</h2>

                </div>
            <table className="tableTop"><tbody><tr>
         <th className="tableLeft">Product Subtotal</th><td>${price}</td></tr><tr className="discount">
       <th className="tableLeft">Order Discounts</th><td><div>${discount}</div></td></tr><tr>
          <th className="tableLeft">Estimated Shipping</th><td>Free</td></tr><tr>
      <th className="tableLeft">Environmental Handling Fees</th><td>$2.55</td></tr><tr>
   <th className="tableLeft tableE">Estimated Taxes</th><td>${tax}</td></tr></tbody><tfoot>
    <tr className="total">
          <th>Estimated Total</th>
       <td>${orderTotal}</td></tr>
       </tfoot></table>
            </div>
       
        </div>
       <div className="cP">
     
<div>
  {/* <Link></Link> */}
  <Link to={route}><button className="checkoutBtn">Checkout</button> </Link>

    
</div>

    </div> 
    </div>
  
    </>
  )
}
// // const mapStateToProps =state=>{
// //   return {
// //     products:state.shop.products
// //   }
// // }
// <div className="cartRight">
// <div>
//     <h3>What's your postal code?</h3>
//     <p>What's your postal code?
//         It'll help us estimate shipping and delivery.
//     </p>
//     <p>Change Postal Code</p>
// </div>
// <div className='cartSearch'>
//     <input type="text" />
//     <button>Search</button>
// </div>
// <div>
//     <div>
//     <h2>Product Summary</h2>
//     <table className="tableTop"><tbody><tr>
//  <th className="tableLeft">Product Subtotal</th><td>$2,999.98</td></tr><tr className="discount">
// <th className="tableLeft">Order Discounts</th><td><div>-$300.00</div></td></tr><tr>
//   <th className="tableLeft">Estimated Shipping</th><td>Free</td></tr><tr>
// <th className="tableLeft">Environmental Handling Fees</th><td>$2.55</td></tr><tr>
// <th className="tableLeft">Estimated Taxes</th><td>$351.33</td></tr></tbody><tfoot><tr className="total">
//   <th>Estimated Total</th>
// <td>$3,053.86</td></tr></tfoot></table>
//     </div>
// <div>
// {/* <p>Choose how you'd like to get your order:</p>
// <input type="radio" name="" id="" /><span>Get it Shipped</span>
// <input type="radio" name="" id="" /><span>Pick Up at Store</span>
// <p>The items in your cart are only available to ship</p> */}
// <button className="checkoutBtn">Continue Checkout</button>
// </div>
// <div>
// <h4>or</h4>
// <button className="paypalCheck">PayPal Checkout</button>
// </div>

// </div>
// </div>


