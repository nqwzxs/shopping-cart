import { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import { Outlet } from 'react-router-dom'

const App = () => {
  const [products, setProducts] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const addItemToCart = (id) => {
    const selectedCartItem = selectCartItem(id)

    if (selectedCartItem) {
      const newCartItems = cartItems.map((cartItem) => {
        if (cartItem.productId === id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        }
        return cartItem
      })

      setCartItems(newCartItems)
      return
    }

    setCartItems([...cartItems, { productId: id, quantity: 1 }])
  }

  const removeItemFromCart = (id) => {
    const newCartItems = []
    cartItems.forEach((cartItem) => {
      if (cartItem.productId === id) {
        if (cartItem.quantity === 1) {
          return
        }

        newCartItems.push({
          ...cartItem,
          quantity: cartItem.quantity - 1,
        })
        return
      }
      newCartItems.push(cartItem)
      return
    })

    setCartItems(newCartItems)
  }

  const getQuantity = (id) => {
    const selectedCartItem = selectCartItem(id)
    return selectedCartItem ? selectedCartItem.quantity : 0
  }

  const selectCartItem = (id) => {
    return cartItems.find((cartItem) => cartItem.productId === id)
  }

  const clearCart = () => {
    setCartItems([])
  }

  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode'))

    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('server error')
        }
        return res.json()
      })
      .then((json) => setProducts(json))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div
      className={
        (darkMode ? 'dark ' : '') + 'flex flex-col min-h-screen mx-auto'
      }
    >
      <NavigationBar
        itemsCount={cartItems.length}
        switchDarkMode={switchDarkMode}
      />
      <div className="flex-1 bg-slate-100 dark:bg-slate-900 dark:text-white p-8">
        {isLoading && (
          <div className="mx-auto max-w-min min-h-full">
            <svg
              width={48}
              height={48}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <style>
                {
                  '.spinner_ZCsl{animation:spinner_qV4G 1.2s cubic-bezier(0.52,.6,.25,.99) infinite}.spinner_gaIW{animation-delay:.6s}@keyframes spinner_qV4G{0%{r:0;opacity:1}100%{r:11px;opacity:0}}'
                }
              </style>
              <circle className="spinner_ZCsl" cx={12} cy={12} r={0} />
              <circle
                className="spinner_ZCsl spinner_gaIW"
                cx={12}
                cy={12}
                r={0}
              />
            </svg>
            {error && <p>{error}</p>}
          </div>
        )}
        {products && (
          <Outlet
            context={{
              products,
              cartItems,
              addItemToCart,
              removeItemFromCart,
              getQuantity,
              clearCart,
            }}
          />
        )}
      </div>
    </div>
  )
}

export default App
