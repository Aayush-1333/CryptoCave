import React from 'react'

export default function Home() {
    return (
        <div className='bg-zinc-500 p-5 space-y-6'>
            <h1 className='text-2xl md:text-4xl'>CryptoCave - Start exploring cryptocurrencies</h1>
            <h3 className='text-center text-xl md:text-3xl'>Let's get started!</h3>

            <div className='space-y-40'>
                <div id='_services' className='flex flex-wrap gap-4 justify-around text-sm md:text-xl'>
                    <div className='bg-slate-600 p-5 rounded-xl space-y-6'>
                        <h3>Title card</h3>
                        <p>This is some description...</p>
                    </div>

                    <div className='bg-slate-600 p-5 rounded-xl space-y-6'>
                        <h3>Title card</h3>
                        <p>This is some description...</p>
                    </div>

                    <div className='bg-slate-600 p-5 rounded-xl space-y-6'>
                        <h3>Title card</h3>
                        <p>This is some description...</p>
                    </div>
                </div>

                <div id='_features' className='flex flex-col'>
                    <h3 className='text-3xl my-4'>Explore the features!!</h3>
                    <div className='bg-green-500 rounded-xl p-5 my-6'>
                        <img src="#" alt="icon1" />
                        <h2>This is info...</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum similique sequi possimus saepe aliquid porro unde nihil quisquam veniam! Omnis deserunt dolore eos officia enim, ex deleniti voluptatum rerum labore sed minima quod modi accusantium ea explicabo sint fuga!</p>
                    </div>

                    <div className='bg-green-500 rounded-xl p-5 my-6'>
                        <img src="#" alt="icon2" />
                        <h2>This is info...</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, magni! Laboriosam pariatur a earum, facere blanditiis nostrum iure voluptas explicabo, illum eveniet eligendi maiores quam commodi architecto accusamus. Ducimus quis rerum inventore quo voluptas culpa tenetur dignissimos delectus porro fugiat?</p>
                    </div>

                    <div className='bg-green-500 rounded-xl p-5 my-6'>
                        <img src="#" alt="icon3" />
                        <h2>This is info...</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum nostrum nihil ipsa repellat sit neque modi hic recusandae, voluptatem accusamus beatae iusto blanditiis ipsum soluta odit perferendis praesentium voluptates culpa esse itaque! Consectetur eos consequuntur, sunt aliquid error et!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
