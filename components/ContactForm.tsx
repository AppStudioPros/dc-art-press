'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [data, setData] = useState({ firstName: '', lastName: '', email: '', message: '' })

  if (sent) return (
    <div style={{ padding: '2rem', border: '1px solid var(--border)', textAlign: 'center' }}>
      <p style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '1.2rem' }}>Thank you!</p>
      <p style={{ fontSize: '0.9rem' }}>Your message has been sent. Leon will be in touch soon.</p>
    </div>
  )

  const inp = {
    width: '100%', padding: '0.6rem 0.75rem', border: '1px solid var(--border)',
    backgroundColor: 'var(--white)', fontFamily: 'inherit', fontSize: '0.9rem',
    color: 'var(--body-text)', marginBottom: '1rem', boxSizing: 'border-box' as const,
  }
  const lbl = { display: 'block', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#888', marginBottom: '0.3rem' }

  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={lbl}>First Name</label>
          <input style={inp} required value={data.firstName} onChange={e => setData(d => ({ ...d, firstName: e.target.value }))} />
        </div>
        <div>
          <label style={lbl}>Last Name</label>
          <input style={inp} required value={data.lastName} onChange={e => setData(d => ({ ...d, lastName: e.target.value }))} />
        </div>
      </div>
      <label style={lbl}>Email *</label>
      <input type="email" style={inp} required value={data.email} onChange={e => setData(d => ({ ...d, email: e.target.value }))} />
      <label style={lbl}>Message</label>
      <textarea style={{ ...inp, height: '140px', resize: 'vertical' }} value={data.message} onChange={e => setData(d => ({ ...d, message: e.target.value }))} />
      <button type="submit" style={{ backgroundColor: 'var(--note-btn)', color: '#fff', border: 'none', padding: '0.6rem 2rem', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
        Send
      </button>
    </form>
  )
}
