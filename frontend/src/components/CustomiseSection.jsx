import { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { BsStars } from 'react-icons/bs'
import fibre from '../assets/images/fibre.png'
import colors from '../data/colors'

const charms = [
  { name: 'Flower', emoji: '🌸' },
  { name: 'Heart', emoji: '🤍' },
  { name: 'Bow', emoji: '🎀' },
  { name: 'Star', emoji: '⭐' },
  { name: 'Shell', emoji: '🐚' },
  { name: 'Cherry', emoji: '🍒' },
  { name: 'Sparkle', emoji: '✨' },
]

function CustomiseSection() {
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedCharm, setSelectedCharm] = useState(null)

  return (
    <section style={{
      backgroundColor: 'rgba(252,232,237,0.80)',
      padding: '64px 0',
      width: '100%'
    }}>
      <div className="section-container">
        <div className="customise-grid">

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#c94f6d',
                margin: 0
              }}>
                Make it yours
              </p>
              <FiHeart style={{ color: '#c94f6d', fill: '#c94f6d' }} size={12} />
            </div>

            {/* Heading */}
            <div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '38px',
                fontWeight: '700',
                color: '#2d1a1a',
                margin: 0,
                lineHeight: '1.2'
              }}>
                Customise your
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                <h2 style={{
                  fontFamily: 'Dancing Script, cursive',
                  fontSize: '40px',
                  color: '#c94f6d',
                  margin: 0
                }}>
                  Onai bag
                </h2>
                <FiHeart style={{ color: '#c94f6d', fill: '#c94f6d' }} size={20} />
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#9b7b80',
              margin: 0,
              lineHeight: '1.7'
            }}>
              Pick your vibe. Pick your colour.<br />
              Add your charm. Make it uniquely you
              <BsStars style={{ display: 'inline', marginLeft: '4px', color: '#c94f6d' }} size={13} />
            </p>

            {/* Color Picker */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: '600',
                color: '#2d1a1a',
                margin: 0
              }}>
                So many colours, so many moods!
                <FiHeart style={{ display: 'inline', marginLeft: '4px', color: '#c94f6d', fill: '#c94f6d' }} size={11} />
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    title={color.name}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: color.hex,
                      border: selectedColor === color.name ? '2.5px solid #c94f6d' : '2px solid white',
                      cursor: 'pointer',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                      transform: selectedColor === color.name ? 'scale(1.15)' : 'scale(1)',
                      transition: 'all 0.2s ease'
                    }}
                  />
                ))}
              </div>
              {selectedColor && (
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9b7b80', margin: 0 }}>
                  Selected: <span style={{ color: '#c94f6d', fontWeight: '600' }}>{selectedColor}</span>
                </p>
              )}
            </div>

            {/* Charm Picker */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: '600',
                color: '#2d1a1a',
                margin: 0
              }}>
                Pick your charm
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {charms.map((charm) => (
                  <button
                    key={charm.name}
                    onClick={() => setSelectedCharm(charm.name)}
                    title={charm.name}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                      border: selectedCharm === charm.name ? '2px solid #c94f6d' : '2px solid transparent',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      transform: selectedCharm === charm.name ? 'scale(1.15)' : 'scale(1)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {charm.emoji}
                  </button>
                ))}
              </div>
              {selectedCharm && (
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9b7b80', margin: 0 }}>
                  Selected: <span style={{ color: '#c94f6d', fontWeight: '600' }}>{selectedCharm}</span>
                </p>
              )}
            </div>

            {/* CTA */}
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#c94f6d',
              color: 'white',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: '500',
              padding: '12px 28px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              width: 'fit-content',
              boxShadow: '0 2px 10px rgba(201,79,109,0.2)'
            }}>
              Start Customising
              <BsStars size={14} />
            </button>

          </div>

          {/* Right - Image */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={fibre}
              alt="Yarn colours"
              style={{
                width: '100%',
                maxWidth: '460px',
                objectFit: 'contain',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
              }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default CustomiseSection