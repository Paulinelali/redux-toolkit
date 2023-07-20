import { useSelector } from "react-redux"
import CartItem from "./cartItem"

const CartContainer = () => {
  const { cartItem, amount, total } = useSelector((store) => store.cart)
  if(amount<1){
        return (
          <section cl>
            <header>
              <h2>Your bag</h2>
              <p>Is currently empty!</p>
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