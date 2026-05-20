import { FiHeart } from 'react-icons/fi'

function AnnouncementBar() {
  return (
    <div style={{
      backgroundColor: '#f4a0b5',
      padding: '8px 0',
      textAlign: 'center',
      width: '100%',
      display: 'block',
      margin: 0
    }}>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        color: '#c94f6d',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        margin: 0,
        padding: 0
      }}>
        <FiHeart style={{ fill: '#c94f6d', flexShrink: 0 }} size={12} />
        Handmade with love, just for you
        <FiHeart style={{ fill: '#c94f6d', flexShrink: 0 }} size={12} />
      </p>
    </div>
  )
}

export default AnnouncementBar