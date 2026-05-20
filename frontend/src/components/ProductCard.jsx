import { useState } from 'react'
import { FiHeart } from 'react-icons/fi'

function ProductCard({ product }) {
  const [wished, setWished] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      cursor: 'pointer'
    }}>

      {/* Image Container */}
      <div
        style={{
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: hovered
            ? '0 8px 24px rgba(201,79,109,0.15)'
            : '0 2px 10px rgba(0,0,0,0.06)',
          transition: 'box-shadow 0.3s ease'
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Wishlist */}
        <button
          onClick={() => setWished(!wished)}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            zIndex: 10,
            backgroundColor: 'white',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          <FiHeart
            size={13}
            style={{
              color: wished ? '#c94f6d' : '#9b7b80',
              fill: wished ? '#c94f6d' : 'none'
            }}
          />
        </button>

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="product-img"
          style={{
            width: '100%',
            objectFit: 'cover',
            display: 'block',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.4s ease'
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: '0 2px' }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px',
          fontWeight: '600',
          color: '#2d1a1a',
          margin: 0,
          lineHeight: '1.3'
        }}>
          {product.name}
        </p>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#c94f6d',
          fontWeight: '600',
          margin: '3px 0 0 0'
        }}>
          ₹{product.price.toLocaleString()}
        </p>
      </div>

    </div>
  )
}

export default ProductCard