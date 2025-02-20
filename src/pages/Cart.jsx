import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import CartEmpty from "../components/cart/CartEmpty";
import '../scss/pages/cart.scss';
import { clearCart } from "../utils/redux/cartSlice";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {

        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        calcSubTotal();

    }, [])    

    const clearCartItems = () => {
        dispatch(clearCart());
    }

    const calcSubTotal = () => {

        let totalPrice = 0;

        cartItems.map((el) => {
            el.value.price ?
            totalPrice += el.quantity*el.value.price : 
            totalPrice += el.quantity*el.value.defaultPrice;
        })

        setSubTotal(Math.round(totalPrice/100));
    }

    const makePayment = async() => {
        const stripe = await loadStripe("pk_test_51NGd2xSB2ndbvdA1bFTV57ZxT28xjnnJKOx4PHPovf1W2HBmOcNlsjG56X742leP4dIOFIKbZsSGswhR58OkGdL200TD34Tiwg");

        const body = {
            cartItems: cartItems
        }

        const headers = {
            "Content-Type": "application/json" 
        }

        const response = await fetch(`${apiUrl}/create-checkout-session`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId: session.id
        });

        if((await result).error) {
            console.log((await result).error);
        }

    }

    console.log(cartItems);
    
    return (
        <>
            {
                cartItems.length === 0 ? <CartEmpty /> :
                <div className="cart">
                    <div className="cart__lt">
                        <div className="cart__lt__top">
                            <div className="cart__head">Cart <span className="cart__head__items">{`(${cartItems.length} items)`}</span></div>
                            <div className="cart__clearAll" onClick={()=>{clearCartItems()}}>Clear All</div>
                        </div>
                        <div className="cart__details">
                            <div className="cart__details__nav">
                                <div className="cart__details__item">Product Details</div>
                                <div className="cart__details__item">Price</div>
                                <div className="cart__details__item">Quantity</div>
                            </div>
                            <ul className="cart__list">
                                {
                                    cartItems.map((item, index) => {
                                        return (
                                            <CartItem key={index} data={item} />
                                        )
                                    })
                                }
                            </ul>

                        </div>
                    </div>
                    <div className="cart__rt">
                        <div className="cart__rt__head">Order Summary</div>
                        <ul className="cart__rt__list">
                            {
                                cartItems.map((item, index) => {

                                    const {name, price, defaultPrice} = item?.value;
                                    const {quantity} = item;

                                    return (
                                        <li className="cart__rt__list-item">
                                            <div className="cart__rt__list-name">{name}</div>
                                            <div className="cart__rt__list-val"><span className="rupees-arial">&#8377;</span>{price?Math.round(quantity*(price/100)):Math.round(quantity*(defaultPrice/100))}</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="cart__rt__total">Subtotal: <span className="cart__rt__total__val"><span className="rupees-arial">&#8377;</span>{subTotal}</span></div>
                        <div className="cart__rt__cta" onClick={() => makePayment()}>Checkout Now</div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart;