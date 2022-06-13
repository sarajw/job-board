import Job from 'components/Job'

function Jobs({jobs}) {
  if (!jobs) return null

  return (
    <>
      {jobs.map((job, index) => (
        <Job key={index} job={job} />
      ))}
    </>
  )
}

export default Jobs