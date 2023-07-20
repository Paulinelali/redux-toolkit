import { useDispatch } from "react-redux"
import { ChevronDown, ChevronUp } from "../icons"
import { removeItem } from "../redux/features/cart/cartSlice"


const CartItem = ({ id, img, title, price, amount}) => {
  const dispatch = useDispatch()
  return (
    <section>
      <article className="cart-item">
        <img src={img} alt={title}/>
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">{price}</h4>
          <button className="remove-btn" onClick={() => dispatch()}>remove</button>
        </div>
        <div>
          <button className="amount-btn">
            <ChevronUp />
          </button>
          <p className="amount">{amount}</p>
          <button className="amount-btn">
            <ChevronDown />
          </button>
        </div>
      </article>
    </section>
  )
}

export default CartItem