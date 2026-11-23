import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import WoodblockCollection from '@/components/WoodblockCollection'
import { woodblockYears } from '@/components/woodblockYears'

type Props = { params: Promise<{ year: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return woodblockYears.map(year => ({ year: String(year) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year } = await params
  return {
    title: `${year} Woodblocks by Leon Loughridge`,
    description: `Browse Leon Loughridge’s ${year} woodblock prints at Dry Creek Art Press.`,
    alternates: { canonical: `/woodblocks/${year}` },
  }
}

export default async function WoodblockYearPage({ params }: Props) {
  const { year } = await params
  if (!woodblockYears.some(value => String(value) === year)) notFound()

  return (
    <div className="page-wrap" style={{ padding: '2rem' }}>
      <WoodblockCollection pageHeading year={year} />
    </div>
  )
}
