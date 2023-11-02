import PropTypes from 'prop-types'

const ProductCard = ({ product, addItem, removeItem, quantity }) => {
  return (
    <div className="bg-white flex flex-col rounded-3xl shadow-md dark:bg-slate-800">
      <img
        src={product.image}
        className="bg-white object-contain w-full h-72 p-4 rounded-t-3xl"
      ></img>
      <hr />
      <div className="flex flex-col p-4 gap-4 flex-1">
        <h1 className="font-bold text-lg line-clamp-2">{product.title}</h1>
        <div className="inline-flex justify-between gap-2 mt-auto">
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="yellow"
              className="w-6 h-6 inline"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <p>
              {product.rating.rate}/5 ({product.rating.count})
            </p>
          </div>
          <p className="text-xl">${product.price}</p>
        </div>
        {quantity > 0 ? (
          <div className="flex max-w-">
            <button
              className="p-2 bg-slate-100 dark:bg-slate-700 rounded-l-full"
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
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
        ) : (
          <button
            className="bg-green-100 p-2 rounded-full text-black hover:bg-green-200"
            onClick={() => addItem(product.id)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
  quantity: PropTypes.number,
}

export default ProductCard
