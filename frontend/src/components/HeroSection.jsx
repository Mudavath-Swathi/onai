import { FiHeart } from 'react-icons/fi'
import { BsStars } from 'react-icons/bs'
import heroBag from '../assets/images/hero-bag.png'
import { useState } from 'react'

function HeroSection() {
  const [shopHover, setShopHover] = useState(false)
  const [customHover, setCustomHover] = useState(false)

  return (
    <section style={{ backgroundColor: 'rgba(253,240,243,0.85)' }}>
      <div className="hero-grid">

        {/* LEFT */}
        <div className="hero-left">

          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#c94f6d'
          }}>
            Handmade Crochet Bags
          </span>

          <div>
            <h1 className="hero-h1">Crochet bags</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 className="hero-h2">that stands out</h2>
              <FiHeart style={{ color: '#c94f6d', fill: '#c94f6d', flexShrink: 0 }} size={18} />
            </div>
          </div>

          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', color: '#2d1a1a', margin: 0 }}>
              Main character energy only 🎀
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#9b7b80', marginTop: '6px', lineHeight: '1.7' }}>
              Cute, colourful & completely you.<br />
              Handmade with love, just for you.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onMouseEnter={() => setShopHover(true)}
              onMouseLeave={() => setShopHover(false)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                backgroundColor: shopHover ? '#a83a57' : '#c94f6d',
                color: 'white', fontFamily: 'Inter, sans-serif',
                fontSize: '13px', fontWeight: '500',
                padding: '11px 24px', borderRadius: '999px',
                border: 'none', cursor: 'pointer',
                transform: shopHover ? 'scale(1.03)' : 'scale(1)',
                boxShadow: shopHover ? '0 6px 20px rgba(201,79,109,0.35)' : '0 2px 8px rgba(201,79,109,0.2)',
                transition: 'all 0.2s ease'
              }}>
              Shop Collection
              <FiHeart size={13} style={{ fill: 'white' }} />
            </button>

            <button
              onMouseEnter={() => setCustomHover(true)}
              onMouseLeave={() => setCustomHover(false)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                backgroundColor: customHover ? '#fce8ed' : 'transparent',
                color: '#c94f6d', fontFamily: 'Inter, sans-serif',
                fontSize: '13px', fontWeight: '500',
                padding: '11px 24px', borderRadius: '999px',
                border: '1.5px solid #c94f6d', cursor: 'pointer',
                transform: customHover ? 'scale(1.03)' : 'scale(1)',
                transition: 'all 0.2s ease'
              }}>
              Customise Yours
              <BsStars size={13} />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', top: '12px', right: '12px', zIndex: 10,
            backgroundColor: 'white', borderRadius: '50%',
            width: '72px', height: '72px',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            border: '1px solid #f4a0b5', textAlign: 'center', padding: '6px'
          }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '8px', color: '#c94f6d', fontWeight: '700', lineHeight: '1.4', margin: 0 }}>
              100%<br />Handmade
            </p>
            <p style={{ fontFamily: 'Dancing Script, cursive', fontSize: '11px', color: '#c94f6d', margin: 0 }}>with love</p>
          </div>

          <img
            src={heroBag}
            alt="Onai Crochet Bag"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection