interface PageHeroProps {
  title: string
  subtitle?: string
  accent?: string
}

export default function PageHero({ title, subtitle, accent }: PageHeroProps) {
  return (
    <div style={{
      backgroundColor: 'rgba(78, 87, 75, 0.95)',
      color: '#F7F5F5',
      padding: '4rem 0 3.5rem',
      borderBottom: '3px solid #A26F4C',
    }}>
      <div className="page-wrap" style={{ textAlign: 'center' }}>
        {accent && (
          <p style={{
            fontFamily: 'var(--font-avenir), sans-serif',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#A26F4C',
            marginBottom: '1rem',
          }}>
            {accent}
          </p>
        )}
        <div style={{ width: '32px', height: '1px', backgroundColor: '#A26F4C', margin: '0 auto 1.25rem' }} />
        <h1 style={{
          fontFamily: 'var(--font-fredericka), serif',
          fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
          color: '#F7F5F5',
          letterSpacing: '0.01em',
          lineHeight: 1.15,
          marginBottom: subtitle ? '1rem' : 0,
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontFamily: 'var(--font-avenir), sans-serif',
            fontWeight: 300,
            fontSize: '0.95rem',
            color: 'rgba(247,245,245,0.65)',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
