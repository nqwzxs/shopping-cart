import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center m-auto gap-8">
      <h1 className="font-bold text-2xl">You seem to be lost...</h1>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  )
}

export default ErrorPage
