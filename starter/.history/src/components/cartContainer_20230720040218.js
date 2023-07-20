import { useSelector } from "react-redux"

const CartContainer = () => {
  const { cartItem, amount, total } = useSelector((store) => {})
  return (
    <div>Cart container</div>
  )
}

export default CartContainer