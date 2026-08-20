import ProductCard from '../cards/ProductCard.jsx'
import './ProductGrid.css'

export default function ProductGrid({ products }) {
  if (!products?.length) {
    return <p className="product-grid__empty">No products available right now.</p>
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
