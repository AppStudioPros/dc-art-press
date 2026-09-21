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
  const [next, setNext] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)

  const advance = useCallback(() => {
    const nextIdx = (current + 1) % IMAGES.length
    setNext(nextIdx)
    // After dissolve completes, snap current to next and clear
    setTimeout(() => {
      setCurrent(nextIdx)
      setNext(null)
    }, 900)
  }, [current])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(advance, 4500)
    return () => clearInterval(timer)
  }, [paused, advance])

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
        minHeight: '480px',
        overflow: 'hidden',
      }}
    >
      {/* Base image — always visible */}
      <Image
        src={IMAGES[current].src}
        alt={IMAGES[current].alt}
        width={380}
        height={500}
        style={{
          width: 'auto',
          maxWidth: '100%',
          height: 'auto',
          maxHeight: '440px',
          display: 'block',
          position: 'relative',
          zIndex: 1,
        }}
      />

      {/* Dissolve image — fades IN on top, creating cross-dissolve */}
      {next !== null && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1.5rem',
          zIndex: 2,
          animation: 'dissolve-in 0.9s ease-in-out forwards',
        }}>
          <Image
            src={IMAGES[next].src}
            alt={IMAGES[next].alt}
            width={380}
            height={500}
            style={{
              width: 'auto',
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '440px',
              display: 'block',
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes dissolve-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
