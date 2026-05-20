import { BsStars } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import ig1 from '../assets/instagram/ig-1.png'
import ig2 from '../assets/instagram/ig-2.png'
import ig3 from '../assets/instagram/ig-3.png'
import ig4 from '../assets/instagram/ig-4.png'
import ig5 from '../assets/instagram/ig-5.png'

const igImages = [ig1, ig2, ig3, ig4, ig5]

function InstagramFeed() {
  return (
    <section style={{ backgroundColor: 'rgba(252,232,237,0.80)', padding: '64px 0', width: '100%' }}>
      <div className="section-container">

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BsStars style={{ color: '#c94f6d' }} size={14} />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#c94f6d', margin: 0 }}>From our Instagram</p>
            <BsStars style={{ color: '#c94f6d' }} size={14} />
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#9b7b80', margin: 0 }}>@onai.collective</p>
        </div>

        <div className="ig-grid">
          {igImages.map((img, index) => (
            <div key={index} className="ig-item">
              <img src={img} alt={`Instagram post ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <a href="https://www.instagram.com/onai.collective" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1.5px solid #c94f6d', color: '#c94f6d', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '500', padding: '11px 28px', borderRadius: '999px', textDecoration: 'none' }}>
            <FaInstagram size={16} />
            Follow us @onai.collective
          </a>
        </div>

      </div>
    </section>
  )
}

export default InstagramFeed