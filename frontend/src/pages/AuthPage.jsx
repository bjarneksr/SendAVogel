import React from 'react'
import { useClerk } from "@clerk/react";

import heroImg from '../assets/pigeonScetch.png'

const AFTER_AUTH = "/";

const AuthPage = () => {
  const clerk = useClerk();

  return (
    <div className='min-w-full min-h-screen flex flex-col justify-center items-center'>
      <div className="card lg:flex-row md:items-center shadow-2xl bg-base-300">
        <div className="card-body items-center lg:w-2/5 md:w-2/3 sm:w-2/3 p-4">
          <img src={heroImg} className='aspect-3/2'/>
          <h1 className='text-4xl'>sendAVogel - Der Messenger mit Brieftauben</h1>
        </div>

        <div className="divider divider-horizontal divide-primary"></div>

        <div className="card-actions items-center justify-center lg:w-2/5 md:w-2/3 sm:w-2/3 p-4">
          <button 
            className="btn"
            onClick={() => {
              clerk.openSignIn({ fallbackRedirectUrl: AFTER_AUTH, forceRedirectUrl: AFTER_AUTH });
            }}>
            Einloggen
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
