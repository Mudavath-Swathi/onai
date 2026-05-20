import { FiHeart, FiPackage, FiTruck } from 'react-icons/fi'
import { MdOutlineColorLens } from 'react-icons/md'

const features = [
  {
    icon: <FiHeart size={20} style={{ color: '#c94f6d' }} />,
    title: '100% Handmade',
    desc: 'Made with yarn and lots of love'
  },
  {
    icon: <MdOutlineColorLens size={20} style={{ color: '#c94f6d' }} />,
    title: 'Customisable',
    desc: 'Choose your colours, sizes & charms'
  },
  {
    icon: <FiPackage size={20} style={{ color: '#c94f6d' }} />,
    title: 'Special Packaging',
    desc: 'Every order comes in cute custom packaging'
  },
  {
    icon: <FiTruck size={20} style={{ color: '#c94f6d' }} />,
    title: 'Pan India Shipping',
    desc: 'Delivering happiness across India'
  },
]

function FeatureStrip() {
  return (
    <section style={{
      backgroundColor: 'rgba(252,232,237,0.80)',
      padding: '28px 0',
      width: '100%'
    }}>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-item ${index < features.length - 1 ? 'feature-border' : ''}`}
          >
            {/* Icon circle */}
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(201,79,109,0.12)'
            }}>
              {feature.icon}
            </div>

            {/* Text */}
            <div>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: '600',
                color: '#2d1a1a',
                margin: 0,
                lineHeight: '1.3'
              }}>
                {feature.title}
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: '#9b7b80',
                margin: '4px 0 0 0',
                lineHeight: '1.5'
              }}>
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureStrip