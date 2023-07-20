import { ChevronDown, ChevronUp } from "../icons"
const CartItem = ({ id, img, title, price, amount}) => {
  return (
    <section>
      <article className="cart-item">
        <img src={img}
      </article>
    </section>
  )
}

export default CartItem