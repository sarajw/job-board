import { getJob } from 'lib/data'
import prisma from 'lib/prisma'
import Link from 'next/link'

export default function Job({job}) {
  
  return (
    <div className='flex flex-col w-1/2 mx-auto'>
      <Link href={`/`}>
        <a href='' className='text-center my-[5vmin] text-sm font-bold underline'>
          back
        </a>
      </Link>
      <h2 className='text-center my-[3vmin] text-4xl font-bold'>{job.title}</h2>

      <p className='text-base font-normal my-5'>{job.description}</p>
      <p className='inline'>Posted by&nbsp;
      <Link href={`/company/${job.author.id}`}>
        <a className='text-base font-medium color-primary underline'>
            {job.author.name}
        </a>
      </Link>
      </p>
    </div>
  )
}

export async function getServerSideProps(context) {
  let job = await getJob(context.params.id, prisma)
  job = JSON.parse(JSON.stringify(job))

  return {
    props: {
      job,
    },
  }
}