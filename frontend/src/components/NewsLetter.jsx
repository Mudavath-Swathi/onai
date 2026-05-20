import { useState } from 'react'
import { FiHeart, FiMail } from 'react-icons/fi'
import { BsStars } from 'react-icons/bs'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email.trim() === '') return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section style={{
      backgroundColor: 'rgba(253,240,243,0.85)',
      padding: '64px 0',
      width: '100%'
    }}>
      <div className="section-container">

        {/* Card */}
        <div style={{
          backgroundColor: '#c94f6d',
          borderRadius: '24px',
          padding: '56px 64px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '24px',
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)',
          boxShadow: '0 16px 48px rgba(201,79,109,0.25)'
        }} className="newsletter-card">

          {/* Icon */}
          <div style={{
            width: '56px', height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <FiMail style={{ color: 'white' }} size={24} />
          </div>

          {/* Heading */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <BsStars style={{ color: 'rgba(255,255,255,0.7)' }} size={16} />
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '32px',
                fontWeight: '700',
                color: 'white',
                margin: 0
              }}>
                Let's be bag besties!
              </h2>
              <FiHeart style={{ color: 'white', fill: 'white' }} size={18} />
            </div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.8)',
              margin: 0
            }}>
              Join our list for updates, new drops & special offers!
            </p>
          </div>

          {/* Input */}
          {subscribed ? (
            <div style={{
              backgroundColor: 'white',
              padding: '14px 32px',
              borderRadius: '999px'
            }}>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#c94f6d',
                fontWeight: '600',
                margin: 0
              }}>
                Yay! You're on the list 🎀
              </p>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '999px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              width: '100%',
              maxWidth: '480px'
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  padding: '14px 20px',
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  color: '#2d1a1a'
                }}
              />
              <button
                onClick={handleSubscribe}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#2d1a1a',
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: '500',
                  padding: '14px 24px',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '0 999px 999px 0',
                  whiteSpace: 'nowrap'
                }}
              >
                Subscribe
                <FiHeart size={13} style={{ fill: 'white' }} />
              </button>
            </div>
          )}

          {/* Note */}
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.6)',
            margin: 0
          }}>
            No spam, only good vibes. Unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  )
}

export default Newsletter