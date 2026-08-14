import { ContentPage } from '@/app/[slug]/page'

export const metadata = { title: 'Hindu Festivals', description: 'Important Hindu festival dates and location-aware timings.', alternates: { canonical: '/festivals' } }

export default function FestivalsPage() { return <ContentPage slug="festivals" /> }
