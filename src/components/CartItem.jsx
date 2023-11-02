const CartItem = ({ product, addItem, removeItem, quantity }) => {
  return (
    <div className="bg-white dark:bg-slate-800 flex rounded-3xl shadow-md gap-8 p-8 items-center flex-wrap">
      <img
        src={product.image}
        className="bg-white object-contain h-24 w-24 p-4 rounded-xl"
      ></img>
      <h1 className="font-bold text-lg text-ellipsis flex-2">
        {product.title}
      </h1>
      <div className="flex gap-4 items-center justify-between w-full">
        <div className="flex">
          <button
            className="p-2 bg-slate-100 rounded-l-full dark:bg-slate-700"
            onClick={() => removeItem(product.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>
          <p className="flex-1 w-full p-2 text-center bg-slate-50 dark:bg-slate-900">
            {quantity}
          </p>
          <button
            className="p-2 bg-slate-100 rounded-r-full dark:bg-slate-700"
            onClick={() => addItem(product.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>
        </div>
        <p className="ml-auto">${product.price}</p>
      </div>
    </div>
  )
}

export default CartItem
