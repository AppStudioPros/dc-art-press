import type { Metadata } from 'next'
import WoodblockCollection from '@/components/WoodblockCollection'

export const metadata: Metadata = {
  title: 'Woodblocks',
  description: 'Hand printed reduction woodblocks in small editions by Leon Loughridge using the Japanese Moku Hanga technique. Available prints from Dry Creek Art Press, Denver Colorado.',
}

export default function WoodblocksPage() {
  return (
    <div className="page-wrap" style={{ padding: '2rem' }}>
      <WoodblockCollection pageHeading />
    </div>
  )
}
