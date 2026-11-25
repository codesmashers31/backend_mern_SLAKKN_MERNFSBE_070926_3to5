import { Link } from 'react-router-dom'

const Navbar = () => (
  <>
    <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
      <div className="text-xl font-bold">Logo</div>
      <div className="flex flex-wrap gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/components">Components</Link>
        <Link to="/products">Products</Link>
      </div>
    </div>
  </>
)

export default Navbar