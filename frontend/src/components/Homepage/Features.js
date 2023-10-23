/**
 * This is the Features component of the webap
 */
import React from 'react'

export default function Features() {

    /**
     * Gives the fade in transition
     * @param {*} elem_id HTML element
     */
    const StartAppear = (elem_id) => {
        let feat_elem = document.getElementById(elem_id)
        if (feat_elem.getAttribute("style") !== "opacity: 100;")
            feat_elem.classList.add("_feature-info-appear")
        setTimeout(() => {
            feat_elem.classList.remove("_feature-info-appear")
            feat_elem.style.opacity = 100;
        }, 500);
    }

    // const handle1 = () => {
    //     let feat_elem1 = document.getElementById("f-info-1")
    //     let feat_elem2 = document.getElementById("f-info-2")
    //     let feat_elem3 = document.getElementById("f-info-3")
    //     feat_elem1.classList.add("_feature-info-appear")
    //     feat_elem2.classList.add("_feature-info-appear")
    //     feat_elem3.classList.add("_feature-info-appear")
    // }

    // window.addEventListener('scroll', handle1)

    return (
        <div id='_features' className='flex flex-col p-5 gap-4'>

            <h3 className='_features-title'>Explore the features!!</h3>

            <div className='my-6 flex justify-around mt-10' onMouseEnter={() => { StartAppear('f-info-1') }}>
                <img className='w-[120px] h-[80px] md:w-[500px] md:h-[300px]' src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/pandasecurity-crypto-gaming_1-sixteen_nine.jpg?size=948:533" alt="icon1" />

                <div id='f-info-1' className='_feature-info'>
                    <h2 className='text-xl md:text-3xl font-semibold'>Explore the power of blockchain</h2>
                    <p className='md:text-xl break-words w-48 md:w-96'>Indulge into trading crypto market currencies with Bitcoin, Ethereum, Doge coins and many more...</p>
                    <hr className='border border-black dark:border-white' />
                </div>
            </div>

            <div className='rounded-xl flex flex-row-reverse justify-around my-6 mt-10' onMouseEnter={() => { StartAppear('f-info-2') }}>

                <img className='w-[120px] h-[80px] md:w-[500px] md:h-[300px]' src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1282791/retina_1708x683_cover-default-cover-3-fe3aac7995ddc0c1b7185c61fa1cc6a5.png" width={500} alt="icon2" />

                <div id='f-info-2' className='_feature-info'>
                    <h2 className='text-xl md:text-3xl font-semibold'>Creating a crypto wallet</h2>
                    <p className='md:text-xl break-words w-48 md:w-96'>With technology in its rise and advancing over time. There has been a huge advancement in stocks market rules and the way it works which is quite amazing</p>
                    <hr className='border border-black dark:border-white' />
                </div>
            </div>

            <div className='rounded-xl my-6 flex justify-around mt-10 mb-20' onMouseEnter={() => { StartAppear('f-info-3') }}>

                <img className='w-[120px] h-[80px] md:w-[500px] md:h-[300px]' src="https://images.vexels.com/content/275839/preview/cryptocurrency-coins-pattern-design-a0776b.png" alt="icon3" width={500} />

                <div id='f-info-3' className='_feature-info'>
                    <h2 className='text-xl md:text-3xl font-semibold'>Start trading today!!</h2>
                    <p className='md:text-xl break-words w-48 md:w-96'>Create your cryptocave account, add some balance to crypto wallet and start trading the crypotcurrencies. You can even create and manage your own portfolio</p>
                    <hr className='border border-black dark:border-white' />
                </div>
            </div>
        </div>
    )
}
