import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavigationBar = ({ itemsCount, switchDarkMode }) => {
  return (
    <div className="p-8 w-full sticky top-0 bg-white shadow-md dark:bg-slate-800 dark:text-white">
      <div className="flex max-w-screen-xl mx-auto justify-start sm:justify-between gap-4">
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive
                  ? 'bg-slate-100 text-black dark:bg-slate-700 dark:text-white '
                  : 'text-slate-500 ') +
                'block hover:text-black transition p-4 hover:bg-slate-100 hover:dark:bg-slate-700 hover:dark:text-white rounded-md'
              }
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
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                (isActive
                  ? 'bg-slate-100 text-black dark:bg-slate-700 dark:text-white '
                  : 'text-slate-500 ') +
                'block hover:text-black transition p-4 hover:bg-slate-100 hover:dark:bg-slate-700 hover:dark:text-white rounded-md'
              }
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
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                (isActive
                  ? 'bg-slate-100 text-black dark:bg-slate-700 dark:text-white '
                  : 'text-slate-500 ') +
                'block hover:text-black transition p-4 hover:bg-slate-100 hover:dark:bg-slate-700 hover:dark:text-white rounded-md relative'
              }
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="rounded-full px-1 h-4 leading-4 text-sm absolute left-7 bottom-7 bg-slate-500 text-white">
                {itemsCount}
              </span>
            </NavLink>
          </li>
        </ul>
        <button
          className="text-slate-500 block hover:text-black transition p-4 hover:bg-slate-100 rounded-md hover:dark:bg-slate-700 hover:dark:text-white"
          onClick={switchDarkMode}
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
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

NavigationBar.propTypes = {
  itemsCount: PropTypes.number,
  switchDarkMode: PropTypes.func,
}

export default NavigationBar
