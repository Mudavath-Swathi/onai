import logo from '../assets/images/logo.png'
import { useState } from 'react'
import { FiShoppingBag } from 'react-icons/fi'

const navLinks = ['Home', 'Shop', 'Customise', 'About Us', 'Reviews', 'FAQ', 'Contact']

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: 'rgba(253,240,243,0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #fce8ed',
        width: '100%'
      }}>

        {/* DESKTOP */}
        <div className="desktop-nav" style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 48px',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <img src={logo} alt="Onai" style={{ width: '52px', height: '52px', objectFit: 'contain' }} />

          <ul style={{ display: 'flex', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map(item => (
              <li key={item}>
                <a href="#" style={{
                  fontSize: '13px', color: '#2d1a1a',
                  textDecoration: 'none', transition: 'color 0.3s',
                  fontFamily: 'Inter, sans-serif'
                }}
                  onMouseEnter={e => e.target.style.color = '#c94f6d'}
                  onMouseLeave={e => e.target.style.color = '#2d1a1a'}>
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <FiShoppingBag size={20} style={{ color: '#2d1a1a' }} />
            <span style={{
              position: 'absolute', top: '-6px', right: '-6px',
              backgroundColor: '#c94f6d', color: 'white',
              fontSize: '9px', borderRadius: '50%',
              height: '15px', width: '15px',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>0</span>
          </div>
        </div>

        {/* MOBILE */}
        <div className="mobile-nav" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 20px',
          width: '100%'
        }}>
          <img src={logo} alt="Onai" style={{ width: '44px', height: '44px', objectFit: 'contain' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <FiShoppingBag size={20} style={{ color: '#2d1a1a' }} />
              <span style={{
                position: 'absolute', top: '-6px', right: '-6px',
                backgroundColor: '#c94f6d', color: 'white',
                fontSize: '9px', borderRadius: '50%',
                height: '15px', width: '15px',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>0</span>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none', border: 'none',
                cursor: 'pointer', fontSize: '22px',
                color: '#2d1a1a', padding: 0, lineHeight: 1,
                display: 'flex', alignItems: 'center'
              }}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {menuOpen && (
          <div style={{
            backgroundColor: '#fdf0f3',
            borderTop: '1px solid #fce8ed',
            padding: '8px 20px 20px',
            width: '100%'
          }}>
            {navLinks.map(item => (
              <a key={item} href="#"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 0',
                  fontSize: '15px',
                  color: '#2d1a1a',
                  textDecoration: 'none',
                  borderBottom: '1px solid #fce8ed',
                  fontFamily: 'Playfair Display, serif'
                }}>
                {item}
              </a>
            ))}
          </div>
        )}

        <style>{`
          .desktop-nav { display: flex !important; }
          .mobile-nav { display: none !important; }
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .mobile-nav { display: flex !important; }
          }
        `}</style>
      </nav>
    </>
  )
}

export default Navbar