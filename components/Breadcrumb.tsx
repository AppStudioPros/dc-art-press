import Link from 'next/link'

interface Crumb { label: string; href?: string }

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <div className="breadcrumb page-wrap">
      {crumbs.map((c, i) => (
        <span key={i}>
          {i > 0 && <span style={{ margin: '0 0.4rem', color: '#bbb' }}>&gt;</span>}
          {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
        </span>
      ))}
    </div>
  )
}
