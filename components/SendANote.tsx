'use client'

import Link from 'next/link'

export default function SendANote() {
  return (
    <Link
      href="/contact"
      style={{
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%) rotate(90deg)',
        transformOrigin: 'right center',
        backgroundColor: 'var(--note-btn)',
        color: '#fff',
        fontSize: '0.7rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        padding: '0.5rem 1.2rem',
        textDecoration: 'none',
        zIndex: 50,
        whiteSpace: 'nowrap',
      }}
    >
      Send A Note
    </Link>
  )
}
