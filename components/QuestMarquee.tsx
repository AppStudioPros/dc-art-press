'use client'

import Image from 'next/image'

const images = [
  { src: '/images/eiteljorg-ranchos-sunset.jpg', alt: 'Ranchos Sunset — woodblock print by Leon Loughridge' },
  { src: '/images/eiteljorg-acoma-pueblo.jpg', alt: 'Acoma Pueblo — woodblock print by Leon Loughridge' },
  { src: '/images/eiteljorg-snowy-plateau.jpg', alt: 'Snowy Plateau — woodblock print by Leon Loughridge' },
  { src: '/images/eiteljorg-freezing-over.jpg', alt: 'Freezing Over — woodblock print by Leon Loughridge' },
]

// Duplicate for seamless infinite loop
const track = [...images, ...images]

export default function QuestMarquee() {
  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          gap: 2rem;
          animation: marquee-scroll 18s linear infinite;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div className="marquee-track">
          {track.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              style={{
                flexShrink: 0,
                width: '320px',
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={320}
                height={320}
                style={{
                  width: '320px',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
