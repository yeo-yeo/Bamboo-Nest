// import NavigationMenu from '@/components/NavigationMenu'

import CategoryCard from '@/components/CategoryCard'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import Image from 'next/image'

// import Header from '@/components/Header'

export default async function Index() {
  const cardTitle = [
    { title: 'Clothing' },
    { title: 'Feeding' },
    { title: 'Sleeping' },
    { title: 'Travelling' },
    { title: 'Cleaning' },
    { title: 'Playing' },
    { title: 'Monitoring' },
    { title: 'Other' },
  ]
  return (
    <>
      <div className="relative h-96">
        <div className="absolute inset-0 flex items-center justify-center mx-auto ">
          <h2 className="z-10 text-center text-black text-5xl w-1/2">
            Bamboo Nest is the leading baby clothing marketplace, buy or sell.
          </h2>
        </div>
        <Image
          src="/green-gradient.jpg"
          alt="Description of the image"
          fill={true}
        />
      </div>
      <div className="max-w-5xl mx-auto ">
        <div className="p-8 cust-dotted-border-bottom">
          <CategoryCard cardTitle={cardTitle} height="[50px]" />
        </div>

        <div className="flex gap-4 w-500px p-8 ">
          <Link href="/search" className="w-full ">
            <Button className="text-white text-4xl w-full p-16 bg-primaryBlue border-4 border-solid border-primaryBlue rounded-full">
              Buy{' '}
            </Button>
          </Link>
          <Link href="/upload" className="w-full ">
            <Button className="text-primaryBlue text-4xl w-full p-16 bg-white border-4 border-solid border-primaryBlue rounded-full">
              Sell{' '}
            </Button>
          </Link>
        </div>

        <div className="p-8">
          <CategoryCard cardTitle={cardTitle} height="[50px]" />
        </div>
      </div>
      <footer></footer>
    </>
  )
}
