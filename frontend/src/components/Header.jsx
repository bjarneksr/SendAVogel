import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { Bird } from 'lucide-react'

const Header = () => {
  return (
    <header className='flex justify-between items-center bg-base-300'>
        <div className="flex flex-row items-end justify-center text-primary p-2 ml-2">
          <Bird className='size-8' />
          <h1 className='text-4xl'>send-a-Vogel</h1>
        </div>
        <nav>
          <Show when="signed-out">
            <SignInButton mode='modal' className='btn btn-primary m-2'/>
            <SignUpButton mode='modal' className='btn btn-outline btn-secondary m-2'/>
          </Show>
          <Show when="signed-in">
            <div className='m-2'>
              <UserButton/>
            </div>
          </Show>
        </nav>
      </header>
  )
}

export default Header
