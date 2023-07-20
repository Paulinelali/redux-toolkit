import { useSelector } from "react-redux"
import CartItem from "./cartItem"

const CartContainer = () => {
  const { cartItem, amount, total } = useSelector((store) => store.cart)
  if(amount<1){
        return (
          <section className="cart">
            <header>
              <h2>Your bag</h2>
              <h4 cl>Is currently empty!</h4>
            </header>
          </section>
        )
      }
  return (
    <section>
      
    </section>
  )
}

export default CartContainer