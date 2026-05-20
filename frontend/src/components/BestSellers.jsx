import { FiHeart } from 'react-icons/fi'
import { BsStars } from 'react-icons/bs'
import ProductCard from './ProductCard'
import products from '../data/products'

function BestSellers() {
  return (
    <section style={{
      backgroundColor: 'rgba(253,240,243,0.85)',
      padding: '64px 0',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 48px'
      }} className="section-container">

        {/* Heading */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '48px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <BsStars style={{ color: '#c94f6d' }} size={14} />
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#c94f6d',
              margin: 0
            }}>
              Our Bestsellers
            </p>
            <BsStars style={{ color: '#c94f6d' }} size={14} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '38px',
              fontWeight: '700',
              color: '#2d1a1a',
              margin: 0
            }}>
              Loved by our{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                Onai girls
                <span style={{
                  position: 'absolute',
                  bottom: '-3px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#c94f6d'
                }} />
              </span>
            </h2>
            <FiHeart
              style={{ color: '#c94f6d', fill: '#c94f6d', flexShrink: 0 }}
              size={22}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#c94f6d',
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            fontWeight: '500',
            padding: '12px 32px',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(201,79,109,0.2)'
          }}>
            View All Bags
            <FiHeart size={14} style={{ fill: 'white' }} />
          </button>
        </div>

      </div>
    </section>
  )
}

export default BestSellers