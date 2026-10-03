import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <h1>This page is not found</h1>
    <Link to={"/"}>Home</Link>
    </>
  )
}

export default NotFound