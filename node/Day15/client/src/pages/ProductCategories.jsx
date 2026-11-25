import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'

const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

const ProductCategories = () => {
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading')

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')
  const [rating, setRating] = useState('')
  const categories = [...new Set(products.map(product => product.category))].sort()
  const query = search.trim().toLowerCase()
  const filtered = products.filter(product =>
    [product.title, product.brand, product.description].some(value => value?.toLowerCase().includes(query)) &&
    (!category || product.category === category) &&
    (!min || product.price >= Number(min)) &&
    (!max || product.price <= Number(max)) &&
    (!rating || product.rating >= Number(rating))
  )
  const invalidRange = min !== '' && max !== '' && Number(max) < Number(min)
  const reset = () => {
    setSearch('')
    setCategory('')
    setMin('')
    setMax('')
    setRating('')
  }
  const field = 'mt-1 block w-full box-border rounded-lg border border-solid border-stone-300 bg-white px-3 py-2 text-sm'

  useEffect(() => {
    const controller = new AbortController()
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=0', {
          signal: controller.signal,
        })
        if (!response.ok) throw new Error('Product request failed')
        const data = await response.json()
        if (!Array.isArray(data.products)) throw new Error('Invalid product list')
        setProducts(data.products)
        setStatus('ready')
      } catch {
        if (!controller.signal.aborted) setStatus('error')
      }
    }
    fetchProducts()
    return () => controller.abort()
  }, [])

  return (
    <>
      <Navbar />
    <main className="min-h-screen bg-stone-50 px-5 py-10 font-sans text-stone-900 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 border-b border-solid border-stone-200 pb-4">
          <h1 className="m-0 text-4xl font-semibold tracking-tight">Product Categories</h1>
          {status === 'ready' && <p aria-live="polite">{filtered.length} of {products.length} products</p>}
        </header>
        {status === 'ready' && (
          <section aria-label="Product filters" className="mb-6 rounded-xl bg-white p-5 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <label>Search<input type="search" className={field} value={search} placeholder="Search products" onChange={e => setSearch(e.target.value)} /></label>
              <label>Category<select className={field} value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">All categories</option>
                {categories.map(name => <option value={name} key={name}>{name.replaceAll('-', ' ')}</option>)}
              </select></label>
              <label>Min price ($)<input className={field} type="number" min="0" step="0.01" value={min} onChange={e => setMin(e.target.value)} /></label>
              <label>Max price ($)<input className={field} type="number" min="0" step="0.01" value={max} onChange={e => setMax(e.target.value)} /></label>
              <label>Minimum rating<select className={field} value={rating} onChange={e => setRating(e.target.value)}>
                <option value="">Any rating</option>
                {[3, 4, 4.5].map(n => <option key={n} value={n}>{n} stars and up</option>)}
              </select></label>
            </div>
            <button type="button" className="mt-4 cursor-pointer rounded-lg border-0 bg-teal-800 px-4 py-2 text-white" onClick={reset}>Clear filters</button>
            {invalidRange && <p role="alert">Maximum price must be at least the minimum price.</p>}
            {!invalidRange && !filtered.length && <p role="status">No products match your filters.</p>}
          </section>
        )}
        {status === 'loading' && <p role="status">Loading products…</p>}
        {status === 'error' && <p role="alert">Could not load products. Refresh the page to try again.</p>}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map(product => (
            <article key={product.id} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img src={product.thumbnail} alt={product.title} loading="lazy"
                className="block h-48 w-full bg-stone-100 object-contain" />
              <div className="p-5">
                <span className="text-xs font-semibold tracking-wide text-teal-700 uppercase">
                  {product.category.replaceAll('-', ' ')}
                </span>
                <h2 className="my-2 text-lg">{product.title}</h2>
                <strong>{price.format(product.price)}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
    </>
  )
}

export default ProductCategories

