import { useSelector } from "react-redux"
im

const CartContainer = () => {
  const { cartItem, amount, total } = useSelector((store) => store.cart)
  return (
    <div>Cart container</div>
  )
}

export default CartContainer