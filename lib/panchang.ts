export type PanchangItem = { label: string; value: string; note?: string }
export const details: PanchangItem[] = [
 {label:'Tithi',value:'Shukla Panchami',note:'until 3:48 PM'}, {label:'Nakshatra',value:'Uttara Phalguni',note:'until 5:12 PM'}, {label:'Yoga',value:'Dhruva',note:'until 2:06 PM'}, {label:'Karana',value:'Bava',note:'until 3:48 PM'}, {label:'Paksha',value:'Shukla Paksha',note:'Waxing moon'}, {label:'Vikram Samvat',value:'2083',note:'Kalayukta'}]
export const timings = [{label:'Sunrise',value:'06:12 AM',icon:'sun'},{label:'Sunset',value:'07:18 PM',icon:'sunset'},{label:'Moonrise',value:'10:42 AM',icon:'moon'},{label:'Moonset',value:'11:28 PM',icon:'moonset'}]
export const observances = [{title:'Rahu Kalam',time:'10:30 AM – 12:07 PM',tone:'bg-[#f9eadf]'},{title:'Yamaganda',time:'03:22 PM – 05:00 PM',tone:'bg-[#f3ebd9]'},{title:'Gulika Kalam',time:'07:50 AM – 09:27 AM',tone:'bg-[#e7eee7]'},{title:'Abhijit Muhurat',time:'12:05 PM – 12:57 PM',tone:'bg-[#e9e7f0]'}]
export async function getPanchang(date: string, latitude=19.076, longitude=72.8777, timezone='Asia/Kolkata') {
 const key=process.env.PROKERALA_API_KEY
 if(!key) return {available:false as const, details, timings, observances}
 try {
  const url=new URL('https://api.prokerala.com/v2/astrology/panchang')
  url.searchParams.set('ayanamsa','1'); url.searchParams.set('coordinates',`${latitude},${longitude}`); url.searchParams.set('date',date); url.searchParams.set('timezone',timezone)
  const res=await fetch(url,{headers:{Authorization:`Bearer ${key}`},next:{revalidate:3600}})
  if(!res.ok) throw new Error('Panchang provider unavailable')
  const data=await res.json()
  return {available:true as const, data}
 } catch { return {available:false as const, details, timings, observances} }
}
