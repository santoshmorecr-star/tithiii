export type CalendarEntry = { date: string; tithi: string; paksha: string; nakshatra: string; observance?: string }
export type FestivalEntry = { date: string; name: string; category: 'Festival' | 'Jayanti' | 'Regional'; note: string; timing: string }
export type EkadashiEntry = { date: string; name: string; dashami: string; ekadashi: string; parana: string; note: string }
export type MuhuratEntry = { date: string; title: string; windows: { label: string; time: string }[] }

export const calendarEntries: CalendarEntry[] = [
  { date: '2026-08-15', tithi: 'Tritiya', paksha: 'Shukla Paksha', nakshatra: 'Hasta', observance: 'Varalakshmi Vratam' },
  { date: '2026-08-19', tithi: 'Saptami', paksha: 'Shukla Paksha', nakshatra: 'Swati' },
  { date: '2026-08-27', tithi: 'Purnima', paksha: 'Shukla Paksha', nakshatra: 'Dhanishtha', observance: 'Raksha Bandhan' },
  { date: '2026-08-29', tithi: 'Dwitiya', paksha: 'Krishna Paksha', nakshatra: 'Purva Bhadrapada' },
  { date: '2026-09-04', tithi: 'Ashtami', paksha: 'Krishna Paksha', nakshatra: 'Rohini', observance: 'Janmashtami' },
]
export const festivals: FestivalEntry[] = [
  { date: '2026-08-15', name: 'Varalakshmi Vratam', category: 'Festival', note: 'A day of traditional observance for Lakshmi.', timing: 'Local sunrise to sunset; confirm regional practice.' },
  { date: '2026-08-27', name: 'Raksha Bandhan', category: 'Festival', note: 'A festival celebrating the bond between siblings.', timing: 'Raksha bandhan thread ceremony: afternoon window.' },
  { date: '2026-09-04', name: 'Krishna Janmashtami', category: 'Festival', note: 'Birth celebration of Shri Krishna.', timing: 'Nishita Kaal window varies by location.' },
  { date: '2026-09-14', name: 'Ganesh Chaturthi', category: 'Festival', note: 'A widely observed day dedicated to Ganesha.', timing: 'Madhyahna puja window varies by city.' },
]
export const ekadashis: EkadashiEntry[] = [
  { date: '2026-08-13', name: 'Shravana Putrada Ekadashi', dashami: 'Aug 12, after 6:40 PM', ekadashi: 'Aug 13, sunrise to sunset', parana: 'Aug 14, 5:55 AM – 8:20 AM', note: 'Fasting and Parana customs vary by sampradaya.' },
  { date: '2026-08-28', name: 'Aja Ekadashi', dashami: 'Aug 27, after 7:10 PM', ekadashi: 'Aug 28, sunrise to sunset', parana: 'Aug 29, 6:02 AM – 8:25 AM', note: 'Use local sunrise for personal observance.' },
  { date: '2026-09-12', name: 'Parsva Ekadashi', dashami: 'Sep 11, after 8:00 PM', ekadashi: 'Sep 12, sunrise to sunset', parana: 'Sep 13, 6:15 AM – 8:30 AM', note: 'Please consider health needs before fasting.' },
]
export const muhurat: Record<string, MuhuratEntry[]> = {
  Marriage: [{ date: '2026-08-21', title: 'Marriage Muhurat', windows: [{ label: 'Abhijit', time: '11:58 AM – 12:48 PM' }, { label: 'Evening', time: '6:20 PM – 8:05 PM' }] }],
  'Griha Pravesh': [{ date: '2026-08-24', title: 'Griha Pravesh Muhurat', windows: [{ label: 'Morning', time: '7:10 AM – 9:05 AM' }, { label: 'Abhijit', time: '12:02 PM – 12:52 PM' }] }],
  Vehicle: [{ date: '2026-08-18', title: 'Vehicle Purchase Muhurat', windows: [{ label: 'Morning', time: '9:15 AM – 10:40 AM' }] }],
  General: [{ date: '2026-08-16', title: 'General Auspicious Window', windows: [{ label: 'Abhijit', time: '11:58 AM – 12:48 PM' }] }],
}
export const formatDate = (value: string) => new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${value}T12:00:00`))
export const monthLabel = (date: Date) => new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(date)
export const monthKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
export const todayKey = () => new Date().toISOString().slice(0, 10)
export const calendarByDate = Object.fromEntries(calendarEntries.map((entry) => [entry.date, entry]))
export const festivalsByDate = Object.fromEntries(festivals.map((entry) => [entry.date, entry]))
export const ekadashiByDate = Object.fromEntries(ekadashis.map((entry) => [entry.date, entry]))
export const isSameMonth = (value: string, date: Date) => value.startsWith(monthKey(date))
export const disclaimer = 'Informational fallback timings for Mumbai. Panchang dates can vary by location, sunrise, timezone and tradition; confirm important observances with local guidance.'
