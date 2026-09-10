'use client'

import { useState, useEffect } from 'react'
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
    body: 'Woodblocks and Editioned Books\nBy Leon Loughridge.',
  },
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <div style={{ position: 'relative', width: '100%', backgroundColor: 'var(--card-bg)' }}>
      {/* Image */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/7', maxHeight: '480px', overflow: 'hidden' }}>
        <Image
          src={slide.img}
          alt={slide.alt}
          fill
          className="object-contain object-left"
          priority
          style={{ backgroundColor: 'var(--card-bg)' }}
        />

        {/* Overlapping text card — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            right: '1.5rem',
            backgroundColor: 'rgba(247,245,245,0.96)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            padding: '1.5rem 1.75rem',
            maxWidth: '280px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}
        >
          <h2 style={{
            fontFamily: 'var(--font-fredericka), serif',
            fontSize: '1.4rem',
            lineHeight: 1.25,
            color: 'var(--accent)',
            marginBottom: '0.75rem',
          }}>
            {slide.heading}
          </h2>
          <p style={{
            fontFamily: 'var(--font-avenir), sans-serif',
            fontWeight: 300,
            fontSize: '0.88rem',
            lineHeight: 1.7,
            color: 'var(--accent)',
            whiteSpace: 'pre-line',
          }}>
            {slide.body}
          </p>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => setCurrent(i => (i + 1) % slides.length)}
          aria-label="Next slide"
          style={{
            position: 'absolute',
            right: '0.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.6)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            fontSize: '1rem',
            color: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ›
        </button>
        {/* Left arrow */}
        <button
          onClick={() => setCurrent(i => (i - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          style={{
            position: 'absolute',
            left: '0.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.6)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            fontSize: '1rem',
            color: 'var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ‹
        </button>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', padding: '0.6rem 0' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: '8px', height: '8px',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: i === current ? 'var(--accent)' : 'var(--border)',
              padding: 0,
              transition: 'background-color 0.2s',
            }}
          />
        ))}
      </div>
    </div>
  )
}
