'use client'
import { useEffect, useRef } from 'react'

interface FadeUpProps {
  children: React.ReactNode
  anim?: 'up' | 'left' | 'right' | 'scale'
  delay?: number  // ms
  className?: string
}

export default function FadeUp({ children, anim = 'up', delay = 0, className = '' }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)

  const startTransform =
    anim === 'left'  ? 'translateX(-32px)' :
    anim === 'right' ? 'translateX(32px)'  :
    anim === 'scale' ? 'scale(0.96)'       :
    'translateY(28px)'

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = anim === 'scale' ? 'scale(1)' : 'translate(0)'
          }, delay)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, anim])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: startTransform,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
