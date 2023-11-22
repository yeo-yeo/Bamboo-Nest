// import NavigationMenu from '@/components/NavigationMenu'
import CategoryCard from '@/components/CategoryCard'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
// import AuthButton from '@/components/AuthButton'
import Header from '@/components/Header'

export default async function Index() {
  const cardTitle = [
    { title: 'Cots' },
    { title: 'Toys' },
    { title: 'Clothes' },
    { title: 'Buggies' },
  ]
  return (
    <>
      {/* <NavigationMenu />
      <AuthButton /> */}
      <Header />
      <div className="relative h-96">
        <div className="absolute inset-0 flex items-center justify-center mx-auto ">
          <h2 className="z-10 text-center text-black text-5xl w-1/2">
            Bamboo Nest is the leading baby clothing marketplace, buy or sell.
          </h2>
        </div>
        <Image
          src="/tumbleweed.png"
          alt="Description of the image"
          fill={true}
          // layout="fill"
          // objectFit="cover"
        />
      </div>
      <div className="max-w-5xl mx-auto ">
        <div className="flex gap-4 w-500px p-8 border border-b-4 border-dotted border-b-primaryBlue">
          <Button className="w-full p-16 bg-primaryBlue border-4 border-solid border-primaryBlue rounded-full">
            <Link href="/" className="text-white text-4xl">
              Buy
            </Link>
          </Button>
          <Button className="w-full p-16 bg-white border-4 border-solid border-primaryBlue rounded-full">
            <Link href="/" className="text-primaryBlue text-4xl">
              Sell
            </Link>
          </Button>
        </div>

        <div className="p-8">
          <CategoryCard cardTitle={cardTitle} />
        </div>
      </div>
      <footer></footer>
    </>
  )
}
