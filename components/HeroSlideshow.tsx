'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const slides = [
  {
    img: '/images/hero-slide-1.jpg',
    alt: 'Snowy winter creek landscape — woodblock print by Leon Loughridge',
    heading: 'A Passion For Woodblocks',
    body: 'I love developing my quick watercolor sketches into full stories with my woodblocks.',
  },
  {
    img: '/images/hero-slide-2.jpg',
    alt: 'Winter pine forest sunset — woodblock print by Leon Loughridge',
    heading: 'Welcome to Dry Creek Art Press',
    body: 'Woodblocks and Editioned Books by Leon Loughridge.',
  },
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((next: number) => {
    setFading(true)
    setTimeout(() => {
      setCurrent(next)
      setFading(false)
    }, 400)
  }, [])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(380px, 75vh, 680px)',
        overflow: 'hidden',
        backgroundColor: '#1a1410',
      }}
    >
      {/* Full-bleed image with fade */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: fading ? 0 : 1,
          transition: 'opacity 0.4s ease-in-out',
        }}
      >
        <Image
          src={slide.img}
          alt={slide.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Text card — bottom left, frosted */}
      <div
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '2.5rem',
          maxWidth: '520px',
          padding: '1.5rem 1.75rem',
          background: 'rgba(247, 245, 245, 0.13)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(247,245,245,0.2)',
          borderRadius: '3px',
          opacity: fading ? 0 : 1,
          transform: fading ? 'translateY(6px)' : 'translateY(0)',
          transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out',
        }}
      >
        {/* Thin accent rule */}
        <div style={{
          width: '36px',
          height: '2px',
          backgroundColor: '#A26F4C',
          marginBottom: '0.8rem',
        }} />
        <h2
          style={{
            fontFamily: 'var(--font-fredericka), serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
            lineHeight: 1.2,
            color: '#F7F5F5',
            marginBottom: '0.55rem',
            letterSpacing: '0.01em',
          }}
        >
          {slide.heading}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-avenir), sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)',
            lineHeight: 1.75,
            color: 'rgba(247,245,245,0.82)',
          }}
        >
          {slide.body}
        </p>
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          left: '1.25rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: '1px solid rgba(247,245,245,0.35)',
          borderRadius: '50%',
          width: '42px',
          height: '42px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'border-color 0.2s, background 0.2s',
          backdropFilter: 'blur(4px)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(247,245,245,0.8)'
          ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(247,245,245,0.35)'
          ;(e.currentTarget as HTMLButtonElement).style.background = 'none'
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="rgba(247,245,245,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 2 4 7 9 12" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        style={{
          position: 'absolute',
          right: '1.25rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: '1px solid rgba(247,245,245,0.35)',
          borderRadius: '50%',
          width: '42px',
          height: '42px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'border-color 0.2s, background 0.2s',
          backdropFilter: 'blur(4px)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(247,245,245,0.8)'
          ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(247,245,245,0.35)'
          ;(e.currentTarget as HTMLButtonElement).style.background = 'none'
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="rgba(247,245,245,0.85)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="5 2 10 7 5 12" />
        </svg>
      </button>

      {/* Dots — inside hero, bottom right */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.25rem',
          right: '1.5rem',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? '24px' : '7px',
              height: '7px',
              borderRadius: '99px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: i === current ? '#A26F4C' : 'rgba(247,245,245,0.45)',
              padding: 0,
              transition: 'width 0.3s ease, background-color 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}
