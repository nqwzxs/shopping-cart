import ProductCard from './ProductCard'
import { useOutletContext } from 'react-router-dom'

const Shop = () => {
  const { products, addItemToCart, removeItemFromCart, getQuantity } =
    useOutletContext()

  return (
    <div className="mx-auto max-w-screen-xl grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addItem={addItemToCart}
          removeItem={removeItemFromCart}
          quantity={getQuantity(product.id)}
        />
      ))}
    </div>
  )
}

export default Shop
