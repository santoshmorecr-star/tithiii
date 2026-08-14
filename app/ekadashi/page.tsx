import { ContentPage } from '@/app/[slug]/page'

export const metadata = { title: 'Ekadashi', description: 'Ekadashi dates, fasting windows and Parana timings.', alternates: { canonical: '/ekadashi' } }

export default function EkadashiPage() { return <ContentPage slug="ekadashi" /> }
