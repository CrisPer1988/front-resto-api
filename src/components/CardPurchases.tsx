import {useState} from "react"

const CardPurchases = ({price}) => {
  const [counter, setCounter] = useState(0)

  const addCart = () => {
    setCounter(prev => prev + 1)
  }

  const minnusCart = () => {
    setCounter(prev => prev - 1)
  }

const total = price * counter

  return (
    <div>
      <i className='bx bxs-cart-add'></i>
      <div>
        <p>{counter}</p>
        <span onClick={addCart}>+</span>
        <span onClick={minnusCart}>-</span>
        <h3>TOTAL: {total}</h3>
      </div>
    </div>
  )
}

export default CardPurchases