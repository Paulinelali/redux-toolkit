import { useSelector } from "react-redux"
import CartItem from "./cartItem"

const CartContainer = () => {
  const { cartItem, amount, total } = useSelector((store) => store.cart)
  if(amount<1){
        return (
          
        )
      }
  return (
    <section>
      
    </section>
  )
}

export default CartContainer