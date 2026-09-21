'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

// Portrait-friendly woodblock images — full art, no crop
const WOODBLOCK_IMAGES = [
  { src: '/images/woodblocks/adobe-church.jpg', alt: 'Adobe church woodblock print by Leon Loughridge' },
  { src: '/images/woodblocks/log-cabin-barn.jpg', alt: 'Log cabin and barn woodblock print by Leon Loughridge' },
  { src: '/images/woodblocks/mountain-stream.jpg', alt: 'Mountain stream woodblock print by Leon Loughridge' },
  { src: '/images/woodblocks/riders-on-horseback.jpg', alt: 'Riders on horseback woodblock print by Leon Loughridge' },
  { src: '/images/woodblocks/snowy-mesa.jpg', alt: 'Snowy mesa woodblock print by Leon Loughridge' },
  { src: '/images/woodblocks/desert-pueblo-sunset.jpg', alt: 'Desert pueblo sunset woodblock print by Leon Loughridge' },
  { src: '/images/woodblocks/grey-day.jpg', alt: 'Grey day woodblock print by Leon Loughridge' },
]

export default function FadingArtCard() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setFading(true)
    setTimeout(() => {
      setCurrent(i => (i + 1) % WOODBLOCK_IMAGES.length)
      setFading(false)
    }, 500)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [paused, next])

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        position: 'relative',
        backgroundColor: '#F0EEE2',
        border: '1px solid rgba(162,111,76,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        cursor: 'pointer',
        minHeight: '380px',
      }}
    >
      <div style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out',
        width: '100%',
      }}>
        <Image
          src={WOODBLOCK_IMAGES[current].src}
          alt={WOODBLOCK_IMAGES[current].alt}
          width={420}
          height={420}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
        />
      </div>

      {/* Dot indicators */}
      <div style={{
        position: 'absolute',
        bottom: '0.75rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.4rem',
      }}>
        {WOODBLOCK_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false) }, 500) }}
            style={{
              width: i === current ? '20px' : '6px',
              height: '6px',
              borderRadius: '99px',
              backgroundColor: i === current ? '#A26F4C' : 'rgba(162,111,76,0.35)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.3s ease, background-color 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Pause indicator */}
      {paused && (
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          fontSize: '0.65rem',
          color: '#A26F4C',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          opacity: 0.6,
        }}>
          paused
        </div>
      )}
    </div>
  )
}
