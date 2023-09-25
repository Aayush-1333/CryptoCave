import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gradient-to-b from-green-100 to-green-300 dark:from-black dark:to-gray-900 dark:text-white p-5 rounded-tr-[150px] md:rounded-tr-[250px]'>
      <h1 className='text-4xl col-span-3'>Project References</h1>

      <footer className='grid grid-cols-3 grid-rows-1'>

        <div className='col pt-5'>
          <h1 className='text-xl font-semibold underline'>Contributors</h1>
          <br />
          <div className='flex flex-col gap-2'>
            <span><a href="https://github.com/Aayush-1333" target='_blank' rel='noreferrer' className='hover:text-blue-500'>Aayush</a></span>
            <span><a href="https://github.com/Nightowl6969" target='_blank' rel='noreferrer' className='hover:text-blue-500'>Nightowl6969</a></span>
            <span><a href="https://github.com/YDjedi" target='_blank' rel='noreferrer' className='hover:text-blue-500'></a>YDjedi</span>
            <span><a href="https://github.com/somangshu-create" className='hover:text-blue-500'></a>Somangshu</span>
          </div>
        </div>

        <div className='col pt-5'>
          <h1 className='text-xl font-semibold underline'>Softwares</h1>
          <br />
          <div className="flex flex-col gap-2">
            <span><a href="https://react.dev/" target='_blank' rel='noreferrer' className='hover:text-blue-500'></a>ReactJS</span>
            <span><a href="https://www.mongodb.com/atlas" target='_blank' rel='noreferrer' className='hover:text-blue-500'></a>MongoDB</span>
            <span><a href="http://expressjs.com/" target='_blank' rel='noreferrer' className='hover:text-blue-500'></a>ExpressJS</span>
            <span><a href="https://nodejs.org/en" target='_blank' rel='noreferrer' className='hover:text-blue-500'></a>NodeJS</span>
          </div>
        </div>

        <div className='col pt-5'>
          <h1 className='text-xl font-semibold underline'>Other Links</h1>
          <br />
          <div className="flex flex-col gap-2">
            <span><a href="#" target='_blank' rel='noreferrer' className='hover:text-blue-500'>Link1</a></span>
            <span><a href="#" target='_blank' rel='noreferrer' className='hover:text-blue-500'>Link2</a></span>
            <span><a href="#" target='_blank' rel='noreferrer' className='hover:text-blue-500'>Link3</a></span>
          </div>
        </div>

      </footer>

    </div>
  )
}
