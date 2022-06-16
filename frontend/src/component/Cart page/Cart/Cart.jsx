import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DELETE, ADD, REMOVE } from '../../../redux/actions';
import './cart.css'
import { CartCard } from './CartCard'
import {AiFillMinusCircle} from 'react-icons/ai'
import {AiFillPlusCircle} from 'react-icons/ai'
import {RiDeleteBin6Line} from 'react-icons/ri'
export const Cart = () => {

    const [price, setPrice] = useState(0);
    console.log(price);
    let discount = +(price * 0.05).toFixed(2);;
    let tax = +(price * 0.03).toFixed(2);
    let cartTotal = price - discount + tax
    let orderTotal = cartTotal.toFixed(2)
    const carts = useSelector((state) => state.cartreducer.carts);
    console.log(carts);

    const dispatch = useDispatch();

    const dlt = (id) => {
        dispatch(DELETE(id))
    }

    //add increment
    const send = (e) => {
        // console.log(e)
        dispatch(ADD(e));
    }

    //remove quantity by 1:-
    const remove = (item) => {
        dispatch(REMOVE(item))
    }

    const total = () => {
        let price = 0;
        carts.map((ele, k) => {
            price = ele.price * ele.qnty + price;
        });
        setPrice(Math.round(price * 100) / 100);
    }
    localStorage.setItem("total", JSON.stringify(price))

    useEffect(() => {
        total();
    }, [total])
    return (

        <div className="cartParent">

            {carts.length === 0 ? (
                <div className="cart-empty">
                    <p>Your Cart is currently empty</p>
                    <div className="start-shopping">
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="cartLeft">
                    {carts.map(cartItem => {
                        return (
                            <>
                                <div className="cartCard" key={cartItem.id}>
                                    <div className="cartCardImg"> <img src={cartItem.imgUrl} alt="" srcset="" /></div>
                                    <div className="cartCardTitle"> {cartItem.title}   <div className="cartCardCircle" >
                                        <AiFillMinusCircle size="30px" color='blue' onClick={cartItem.qnty <= 1 ? () => dlt(cartItem) : () => remove(cartItem)}/>
                                        <div className="count" style={{fontSize:'17px' ,margin:"5px 10px",color:'black'}} >{cartItem.qnty}</div>
                                        <AiFillPlusCircle  color='blue' size="30px"onClick={() => send(cartItem)}/>
                                    </div>
                                    <RiDeleteBin6Line className="cartCardBin" size="30px" color='blue' onClick= {()=>dlt(cartItem.id)}/> <div style={{display: 'inline' ,}}>Remove</div> </div>
                                    <div className="cartCardPrice"><h4>{cartItem.price}</h4></div>
                                </div>
                               
                            </>
                        )

                    })}
                </div>


            )}
            <CartCard price={price} discount={discount} tax={tax} orderTotal={orderTotal} />

        </div>

    )
}