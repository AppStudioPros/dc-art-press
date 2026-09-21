'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const IMAGES = [
  { src: '/images/watercolor-frozen-butte.png', alt: 'Frozen Butte — watercolor by Leon Loughridge' },
  { src: '/images/watercolor-lupines.png', alt: 'Lupines — watercolor by Leon Loughridge' },
  { src: '/images/watercolor-october-vail-valley.png', alt: 'October Vail Valley — watercolor by Leon Loughridge' },
  { src: '/images/watercolor-san-luis-lakes.png', alt: 'May San Luis Lakes — watercolor by Leon Loughridge' },
  { src: '/images/watercolor-summer-cabin.png', alt: 'Mountain Cabin — watercolor by Leon Loughridge' },
  { src: '/images/watercolor-will-rogers-shrine.png', alt: 'From Will Rogers Shrine — watercolor by Leon Loughridge' },
]

export default function WatercolorFader() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setFading(true)
    setTimeout(() => {
      setCurrent(i => (i + 1) % IMAGES.length)
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
        padding: '2rem 1.5rem',
        cursor: 'default',
      }}
    >
      <div style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Image
          src={IMAGES[current].src}
          alt={IMAGES[current].alt}
          width={380}
          height={500}
          style={{ width: 'auto', maxWidth: '100%', height: 'auto', maxHeight: '460px', display: 'block' }}
        />
      </div>

      {/* Pill dots */}
      <div style={{
        position: 'absolute',
        bottom: '0.75rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '0.4rem',
        alignItems: 'center',
      }}>
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false) }, 500) }}
            aria-label={`View image ${i + 1}`}
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
    </div>
  )
}
