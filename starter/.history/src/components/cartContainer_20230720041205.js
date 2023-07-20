import { useSelector } from "react-redux"
import CartItem from "./cartItem"

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart)
  if(amount<1){
        return (
          <section className="cart">
            <header>
              <h2>Your bag</h2>
              <h4 className="empty-cart">Is currently empty!</h4>
            </header>
          </section>
        )
      }
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          <CartItem key={item.id} {...}
        })}
      </div>
    </section>
  )
}

export default CartContainer