import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='flex  justify-between gap-8 flex-col md:flex-row md:justify-center'>
      <div className='flex-1 text-gray-900 dark:text-white'>
        <h1 className='text-4xl text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
          Denis Omar
          <br />
          Amador Salazar
        </h1>
        <p className='text-2xl py-2 text-gray-900 dark:text-white md:text-3xl'>Fron end Developer</p>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
          Hello! I am a passionate Front-End Developer with a solid background and great motivation to enter
        </p>

        <div className='mt-8 flex gap-8'>
          <Link href="https://github.com/denisamador24">
            <BsGithub size={32} />
          </Link>
          <Link href="https://www.linkedin.com/in/denisamador24/">
            <BsLinkedin size={32} />
          </Link>
        </div>
      </div>
      <div className='p-4 flex justify-center items-center'>
        <Image
          width={200}
          height={200}
          src="/denis.jpg"
          className='rounded-full'
        />
      </div>
    </div>
  )
}

export default Hero