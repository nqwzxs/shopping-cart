import { useOutletContext } from 'react-router-dom'
import CartItem from './CartItem'

const ShoppingCart = () => {
  const {
    products,
    addItemToCart,
    removeItemFromCart,
    getQuantity,
    cartItems,
    clearCart,
  } = useOutletContext()

  const productsInCart = cartItems.map((cartItem) => {
    return {
      product: products.find((product) => product.id === cartItem.productId),
      quantity: cartItem.quantity,
    }
  })

  if (productsInCart.length > 0) {
    const subtotal = productsInCart
      .reduce((sum, product) => {
        sum = sum + product.quantity * product.product.price
        return sum
      }, 0)
      .toFixed(2)

    return (
      <div className="mx-auto max-w-screen-xl flex gap-8 flex-wrap">
        <div className="flex flex-2 flex-col gap-8">
          {productsInCart.map((product) => (
            <CartItem
              key={product.product.id}
              product={product.product}
              addItem={addItemToCart}
              removeItem={removeItemFromCart}
              quantity={getQuantity(product.product.id)}
            />
          ))}
        </div>
        <div className="flex-1 flex gap-4 flex-col bg-white rounded-3xl p-8 h-min shadow-md dark:bg-slate-800">
          <h1 className="text-3xl font-bold">Order Summary</h1>
          <div className="flex gap-4 justify-between items-center mb-8">
            <h2 className="">Subtotal: ${subtotal}</h2>
            <p className="text-slate-500">{cartItems.length} items</p>
          </div>
          <button
            className="p-4 bg-green-200 hover:bg-green-300 rounded-2xl text-black"
            onClick={clearCart}
          >
            Checkout
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center place-items-center">
      <h1 className="text-center">Shopping cart is empty</h1>
    </div>
  )
}

export default ShoppingCart
