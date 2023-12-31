/**
 * This is the footer component of the webapp
 */
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gradient-to-b from-green-100 to-green-300 dark:from-black dark:to-gray-900 dark:text-white p-5 rounded-tr-[150px] md:rounded-tr-[250px]'>
      <h1 className='text-2xl md:text-4xl col-span-3'>Project References</h1>

      <footer className='grid grid-cols-3 grid-rows-1'>

        <div className='col pt-5'>
          <h1 className='md:text-xl font-semibold underline'>Contributors</h1>
          <br />
          <div className='flex flex-col gap-2'>
            <span><a href="https://github.com/Aayush-1333" target='_blank' rel='noreferrer' className='hover:text-blue-500'>Aayush</a></span>
            <span><a href="https://github.com/Nightowl6969" target='_blank' rel='noreferrer' className='hover:text-blue-500'>Nightowl6969</a></span>
            <span><a href="https://github.com/YDjedi" target='_blank' rel='noreferrer' className='hover:text-blue-500'>YDjedi</a></span>
            <span><a href="https://github.com/somangshu-create" target='_blank' rel='noreferrer' className='hover:text-blue-500'>Somangshu</a></span>
          </div>
        </div>

        <div className='col pt-5'>
          <h1 className='md:text-xl font-semibold underline'>Softwares</h1>
          <br />
          <div className="flex flex-col gap-2">
            <span><a href="https://react.dev/" target='_blank' rel='noreferrer' className='hover:text-blue-500'>ReactJS</a></span>
            <span><a href="https://www.mongodb.com/atlas" target='_blank' rel='noreferrer' className='hover:text-blue-500'>MongoDB</a></span>
            <span><a href="http://expressjs.com/" target='_blank' rel='noreferrer' className='hover:text-blue-500'>ExpressJS</a></span>
            <span><a href="https://nodejs.org/en" target='_blank' rel='noreferrer' className='hover:text-blue-500'>NodeJS</a></span>
          </div>
        </div>

        <div className='col pt-5'>
          <h1 className='md:text-xl font-semibold underline'>Other Links</h1>
          <br />
          <div className="flex flex-col gap-2">
            <span><a href="https://www.coinbase.com/" target='_blank' rel='noreferrer' className='hover:text-blue-500'>Coinbase</a></span>
            <span><a href="https://www.npmjs.com/" target='_blank' rel='noreferrer' className='hover:text-blue-500'>npm</a></span>
            <span><a href="https://www.alphavantage.co/" target='_blank' rel='noreferrer' className='hover:text-blue-500'>Alphavantage</a></span>
          </div>
        </div>

      </footer>

    </div>
  )
}
