import React from 'react'

export default function Features() {
    return (
        <div id='_features' className='flex flex-col p-5'>

            <h3 className='_features-title'>Explore the features!!</h3>

            <div className='bg-indigo-200 my-6 rounded-xl self-start'>
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/pandasecurity-crypto-gaming_1-sixteen_nine.jpg?size=948:533" alt="icon1" width={700} className='rounded-t-xl' />

                <div className='_feature-info'>
                    <h2 className='md:text-2xl font-semibold'>Explore the power of blockchain</h2>
                    <p className='break-words md:w-96'>Indulge into trading crypto market currencies with Bitcoin, Ethereum, Doge coins and many more...</p>
                </div>
            </div>

            <div className='bg-indigo-200 rounded-xl my-6 self-end'>

                <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1282791/retina_1708x683_cover-default-cover-3-fe3aac7995ddc0c1b7185c61fa1cc6a5.png" width={700} alt="icon2" className='rounded-t-xl' />

                <div className='_feature-info'>
                    <h2 className='md:text-2xl font-semibold'>Creating a crypto wallet</h2>
                    <p className='break-words md:w-96'>With technology in its rise and advancing over time. There has been a huge advancement in stocks market rules and the way it works which is quite amazing</p>
                </div>
            </div>

            <div className='bg-indigo-200 rounded-xl my-6 self-start mb-20'>

                <img src="https://images.vexels.com/content/275839/preview/cryptocurrency-coins-pattern-design-a0776b.png" alt="icon3" width={700} className='rounded-t-xl' />

                <div className='_feature-info'>
                    <h2 className='md:text-2xl font-semibold'>Start trading today!!</h2>
                    <p className='break-words md:w-96'>Create your cryptocae account, add some balance to crypto wallet and start trading the crypotcurrencies. You can even create and manage your own portfolio</p>
                </div>
            </div>
        </div>
    )
}
