'use client'

import Image from 'next/image'

const images = [
  { src: '/images/eiteljorg-ranchos-sunset.jpg', alt: 'Ranchos Sunset — woodblock print by Leon Loughridge' },
  { src: '/images/eiteljorg-acoma-pueblo.jpg', alt: 'Acoma Pueblo — woodblock print by Leon Loughridge' },
  { src: '/images/eiteljorg-snowy-plateau.jpg', alt: 'Snowy Plateau — woodblock print by Leon Loughridge' },
  { src: '/images/eiteljorg-freezing-over.jpg', alt: 'Freezing Over — woodblock print by Leon Loughridge' },
]

const track = [...images, ...images]

interface Props {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  body?: React.ReactNode
}

export default function QuestMarquee({ title, subtitle, body }: Props) {
  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 0;
          animation: marquee-scroll 22s linear infinite;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>

        {/* Scrolling images — full height, no crop */}
        <div className="marquee-track">
          {track.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              style={{ flexShrink: 0, lineHeight: 0 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={480}
                height={480}
                style={{ width: '480px', height: 'auto', display: 'block' }}
              />
            </div>
          ))}
        </div>

        {/* Centered text overlay */}
        {(title || body) && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}>
            <div style={{
              backgroundColor: 'rgba(247, 245, 245, 0.82)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              padding: '2.25rem 2.75rem',
              maxWidth: '540px',
              textAlign: 'center',
            }}>
              {title}
              {subtitle}
              {body}
            </div>
          </div>
        )}

      </div>
    </>
  )
}
