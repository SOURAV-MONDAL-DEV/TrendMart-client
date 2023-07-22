import RoundCarousel from '@/Components/RoundCarousel/RoundCarousel'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div>
        <h1>home</h1>
        <RoundCarousel></RoundCarousel>
      </div>
    </main>
  )
}
