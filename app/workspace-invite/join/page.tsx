"use client"
import { Button } from '@nextui-org/react'
import { CircleCheck } from 'lucide-react'
import React from 'react'

const Join = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg w-[600px]">
        <p className='text-sm'>We see that someone has invited you to</p>
        <h1 className='mt-3 text-md font-bold'>Join a workspace</h1>
        <div className='flex border items-left mt-3 p-2'>
          <Button className='bg-black w-10 h-10 text-white'>F</Button>
          <div className='ml-2'>
            <p className='text-sm font-bold'>First_project</p>
            <p className='text-sm'>Member</p>
          </div>
          <CircleCheck className='mt-2 ml-auto' />
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm mt-5">
            Accept & Join
          </button>
          <button className="bg-white text-black border ml-4 px-4 py-1.5 rounded text-sm mt-4">
            Go Home
          </button>
        </div>
      </div>
    </div>
  )
}
export default Join;