import Link from 'next/link'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
import { BsArrowUpRight } from 'react-icons/bs'

import projects from '@/constants/projects'

const ProjectList = () => {
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap text-black dark:text-white">
      {projects.map(project => (
        <div className="basis-1/3 flex-1 shadow-md" key={project.title}>
          <Image
            className="rounded-lg object-cover w-full"
            width={600}
            height={300}
            src={project.image}
          />
          <div className='p-4'>
            {/* title */}
            <p className='text-xl font-semibold'>{project.title}</p>

            {/* description */}
            <p className='mt-1 text-sm'>{project.description}</p>

            {/* links */}
            <div className='mt-4 flex justify-between items-center'>
              <Link href={project.url} target='_blank'>
                <div className='flex items-center gap-2 p-2 border-b'>
                  <p className=''>View deploy</p>
                  <BsArrowUpRight />
                </div>
              </Link>
              <Link href={project.github}>
                <div className='flex gap-2'>
                  <p>View in GitHub</p>
                  <AiFillGithub size={24} />
                </div>
              </Link>
            </div>
          </div>
        </div>

      ))}
    </div >
  )
}

export default ProjectList