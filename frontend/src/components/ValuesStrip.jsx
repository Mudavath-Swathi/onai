import { FiHeart } from 'react-icons/fi'
import { BsStars } from 'react-icons/bs'
import { GiYarn } from 'react-icons/gi'
import { MdOutlineEco } from 'react-icons/md'

const values = [
  {
    icon: <GiYarn size={22} style={{ color: '#c94f6d' }} />,
    title: 'Made to order',
    desc: 'Just for you, not in bulk'
  },
  {
    icon: <MdOutlineEco size={22} style={{ color: '#c94f6d' }} />,
    title: 'Slow fashion',
    desc: 'Better for you, better for the planet'
  },
  {
    icon: <FiHeart size={22} style={{ color: '#c94f6d', fill: '#c94f6d' }} />,
    title: 'Support small',
    desc: 'By choosing Onai, you support a small dream'
  },
  {
    icon: <BsStars size={22} style={{ color: '#c94f6d' }} />,
    title: 'Made with love',
    desc: 'Because you deserve something special'
  },
]

function ValuesStrip() {
  return (
    <section style={{
      backgroundColor: 'rgba(253,240,243,0.85)',
      padding: '48px 0',
      width: '100%'
    }}>
      <div className="section-container">
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-item">

              {/* Icon circle */}
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                backgroundColor: 'rgba(252,232,237,0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '12px',
                flexShrink: 0
              }}>
                {value.icon}
              </div>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: '700',
                color: '#2d1a1a',
                margin: 0,
                textAlign: 'center'
              }}>
                {value.title}
              </p>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '12px',
                color: '#9b7b80',
                margin: '6px 0 0 0',
                textAlign: 'center',
                lineHeight: '1.5'
              }}>
                {value.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesStrip