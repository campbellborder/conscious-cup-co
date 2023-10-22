import Section from '@/components/section'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center mt-[100px] relative">
      <Section>
        <div className='w-full h-full p-4 items-center justify-center'>
          <h1>Video here</h1>
        </div>
      </Section>
      <Section bottom_edge='wave'>Section2</Section>
      <Section top_edge='wave'>Section3</Section>
      <Section>Section3</Section>
      <Section>Section4</Section>
      <Section>Section5</Section>
    </main>
  )
}
