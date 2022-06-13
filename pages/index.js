import prisma from 'lib/prisma'
import { getJobs } from 'lib/data.js'
import Jobs from 'components/Jobs'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Home({jobs}) {
  const router = useRouter()
  const { data: session, status } = useSession()

  if (session && !session.user.name) {
    router.push('/setup')
  }
  
  return (
    <>
      {session ? (
        <a className='border px-8 py-2 mt-5 font-bold rounded-full bg-black text-white border-black '
            href='/api/auth/signout'>
          log out
        </a>
      ) : (
        <a className='border px-8 py-2 mt-5 font-bold rounded-full bg-black text-white border-black '
            href='/api/auth/signin'>
          log in
        </a>
      )}

      <div className='m-[8vmin]'>
        <h2 className='text-center p-4 m-[8vmin] text-4xl font-bold'>Find a job!</h2>
        <Jobs jobs={jobs} />
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  let jobs = await getJobs(prisma)
	jobs = JSON.parse(JSON.stringify(jobs))

  return {
    props: {
      jobs,
    },
  }
}
