import { FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import logo from '../assets/images/logo.png'

const footerLinks = {
  shop: [
    { name: 'All Bags', href: '#' },
    { name: 'New Arrivals', href: '#' },
    { name: 'Best Sellers', href: '#' },
  ],
  customerCare: [
    { name: 'FAQ', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns & Exchange', href: '#' },
  ],
  about: [
    { name: 'About Us', href: '#' },
    { name: 'Our Story', href: '#' },
    { name: 'Reviews', href: '#' },
  ],
}

const linkStyle = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '13px',
  color: '#9b7b80',
  textDecoration: 'none',
  display: 'block'
}

const headingStyle = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '11px',
  fontWeight: '700',
  color: '#2d1a1a',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  margin: '0 0 16px 0'
}

function Footer() {
  return (
    <footer style={{
      backgroundColor: 'rgba(253,240,243,0.95)',
      borderTop: '1px solid #f4a0b5',
      padding: '56px 0 28px 0',
      width: '100%'
    }}>
      <div className="section-container">

        {/* Top Grid */}
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Onai"
              style={{ height: '44px', width: '44px', objectFit: 'contain', marginBottom: '14px' }}
            />
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '12px',
              color: '#9b7b80', lineHeight: '1.7', margin: 0, maxWidth: '180px'
            }}>
              Handmade crochet bags made slowly, lovingly and thoughtfully.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p style={headingStyle}>Shop</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.shop.map((link) => (
                <a key={link.name} href={link.href} style={linkStyle}
                  onMouseEnter={e => e.target.style.color = '#c94f6d'}
                  onMouseLeave={e => e.target.style.color = '#9b7b80'}
                >{link.name}</a>
              ))}
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <p style={headingStyle}>Customer Care</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.customerCare.map((link) => (
                <a key={link.name} href={link.href} style={linkStyle}
                  onMouseEnter={e => e.target.style.color = '#c94f6d'}
                  onMouseLeave={e => e.target.style.color = '#9b7b80'}
                >{link.name}</a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <p style={headingStyle}>About</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.about.map((link) => (
                <a key={link.name} href={link.href} style={linkStyle}
                  onMouseEnter={e => e.target.style.color = '#c94f6d'}
                  onMouseLeave={e => e.target.style.color = '#9b7b80'}
                >{link.name}</a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p style={headingStyle}>Connect With Us</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#9b7b80', margin: 0 }}>DM us on Instagram</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#9b7b80', margin: 0 }}>onaicollective@gmail.com</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#9b7b80', margin: 0 }}>Across India</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <a href="https://www.instagram.com/onai.collective" target="_blank" rel="noopener noreferrer"
                style={{ color: '#9b7b80' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c94f6d'}
                onMouseLeave={e => e.currentTarget.style.color = '#9b7b80'}
              ><FaInstagram size={20} /></a>
              <a href="#" style={{ color: '#9b7b80' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c94f6d'}
                onMouseLeave={e => e.currentTarget.style.color = '#9b7b80'}
              ><FaPinterest size={20} /></a>
              <a href="#" style={{ color: '#9b7b80' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c94f6d'}
                onMouseLeave={e => e.currentTarget.style.color = '#9b7b80'}
              ><FaWhatsapp size={20} /></a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#f4a0b5', margin: '40px 0 24px 0' }} />

        {/* Bottom */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px'
        }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9b7b80', margin: 0 }}>
            2024 Onai Collective. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9b7b80', margin: 0 }}>Made with</p>
            <FiHeart style={{ color: '#c94f6d', fill: '#c94f6d' }} size={11} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#9b7b80', margin: 0 }}>for Onai</p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer