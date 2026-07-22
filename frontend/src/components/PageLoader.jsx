import { BirdIcon } from 'lucide-react'

const PageLoader = () => {
  return (
    <div className='min-w-full min-h-screen text-primary flex flex-col items-center justify-center'>
      <div className='card'>
        <div className="card-body items-center">
            <BirdIcon />
            <span className='text-xs text-secondary'>Lade Nachrichten...</span>
        </div>
      </div>
    </div>
  )
}

export default PageLoader
