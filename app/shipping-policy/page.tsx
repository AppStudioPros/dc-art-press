import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = { title: 'Return & Shipping Policy' }

export default function ShippingPage() {
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Return & Shipping Policy' }]} />
      <div className="page-wrap" style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-playfair), serif', color: 'var(--gold)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Return & Shipping Policy</h1>
        {/* TODO: Replace with actual policy text from Wix site */}
        <div className="prose-dc">
          <p style={{ fontStyle: 'italic', color: '#999' }}>[Return and shipping policy text to be provided by client — copy from existing Wix site]</p>
        </div>
      </div>
    </>
  )
}
