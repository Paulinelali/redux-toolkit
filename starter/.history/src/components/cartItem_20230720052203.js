import { ChevronDown, ChevronUp } from "../icons"
const CartItem = ({ id, img, title, price, amount}) => {
  return (
    <section>
      <article className="cart-item">
        <img src={img} alt={title}/>
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">{ptice}</h4>
        </div>
      </article>
    </section>
  )
}

export default CartItem