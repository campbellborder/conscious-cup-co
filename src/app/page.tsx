import Section from '@/components/section'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center mt-[100px] relative">
      <Section className=''>
        <div className='w-full h-full flex items-center justify-center'>
          <h1 className='text-center'>Video here</h1>
        </div>
      </Section>
      <Section bottom_edge='wave' className='h-[550px]'>
        <div className='w-full h-full px-[20%] flex flex-col items-center'>
          <Image src="/logo2.png" alt="logo" width="100" height="100" className='pt-8'></Image>
          <h1 className= "font-bold text-4xl pt-4 text-center">cool. calm. cupped.</h1>
          <h1 className= "text-xl pt-2">Interesting words here...</h1>
          <p className= "text-m pt-16 w-3/5">Perhaps we could put a paragraph here briefly explaining the cups or the benefits of meditation or something? Not sure what would be good</p>
        </div>
      </Section>
      <Section top_edge='wave' className=''>
        <div className='w-full h-full flex flex-col items-center'>
          <h1 className="font-bold text-4xl pt-40 text-center">the cups</h1>
          
        </div></Section>
      <Section>Section3</Section>
      <Section>Section4</Section>
    </main>
  )
}
