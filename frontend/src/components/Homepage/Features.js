import React from 'react'

export default function Features() {
    return (
        <div id='_features' className='flex flex-col p-5'>
            <h3 className=' self-start bg-gradient-to-br from-indigo-800 to-indigo-950 text-white dark:from-gray-800 dark:to-gray-950 dark:text-yellow-500 text-3xl my-4 p-3 rounded-xl'>Explore the features!!</h3>

            <div className='bg-white my-6 rounded-xl self-start'>
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/pandasecurity-crypto-gaming_1-sixteen_nine.jpg?size=948:533" alt="icon1" width={900} className='rounded-t-xl' />

                <div className='p-4 space-y-4 dark:bg-gradient-to-r dark:text-white dark:from-black dark:to-gray-800'>
                    <h2>This is info...</h2>
                    <p>some decription..</p>
                </div>
            </div>

            <div className='bg-white rounded-xl my-6 self-end'>
                <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1282791/retina_1708x683_cover-default-cover-3-fe3aac7995ddc0c1b7185c61fa1cc6a5.png" width={900} alt="icon2" className='rounded-t-xl' />

                <div className='p-4 space-y-4 dark:bg-gradient-to-r dark:text-white dark:from-black dark:to-gray-800'>
                    <h2>This is info...</h2>
                    <p>some decription..</p>
                </div>
            </div>

            <div className='bg-white rounded-xl my-6 self-start'>
                <img src="https://images.vexels.com/content/275839/preview/cryptocurrency-coins-pattern-design-a0776b.png" alt="icon3" width={900} className='rounded-t-xl' />

                <div className='p-4 space-y-4 dark:bg-gradient-to-r dark:text-white dark:from-black dark:to-gray-800'>
                    <h2>This is info...</h2>
                    <p>some decription..</p>
                </div>
            </div>
        </div>
    )
}
