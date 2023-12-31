import { CartIcon } from '../icons'
import useSelector from 'react-redux'

const NavBar = () => {
  const amount = useSelector((store) => store)
  return (
    <section>
      <nav>
        <div className='nav-center'>
          <h3>Redux toolkit</h3>
          <div className='nav-container'>
            <CartIcon />
            <div className='amount-container'>
              <p className='total-amount'>0</p>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default NavBar