import Link from 'next/link'

const Job = ({ job }) => {
  return (
    <div className='my-[5vmin] mx-auto max-w-[72ch]'>
      <Link href={`/job/${job.id}`}>
        <a className='text-xl font-bold hover:underline'>{job.title}</a>
      </Link>
      <h2 className='my-3'>{job.description}</h2>
      <div className='mt-4'>
        <h4 className='inline'>Posted by</h4>
        <p className='text-base font-medium'>
          {job.author.name}
        </p>
      </div>
    </div>
  )
}

export default Job