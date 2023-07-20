import { useSelector } from "react-redux"
import CartItem from "./cartItem"

const CartContainer = () => {
  const { cartItem, amount, total } = useSelector((store) => store.cart)
  return (
    <section>
      if(amount<1){
        
      }
    </section>
  )
}

export default CartContainer