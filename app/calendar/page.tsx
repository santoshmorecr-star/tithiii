import { ContentPage } from '@/app/[slug]/page'

export const metadata = { title: 'Hindu Calendar', description: 'A clear monthly view of Hindu calendar dates and observances.', alternates: { canonical: '/calendar' } }

export default function CalendarPage() { return <ContentPage slug="calendar" /> }
