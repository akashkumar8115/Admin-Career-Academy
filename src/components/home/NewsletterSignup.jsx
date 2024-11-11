import React from 'react'

const NewsletterSignup = () => {
    return (
        <section className='w-full py-16'>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <div className='bg-violet-50 rounded-2xl p-12'>
                    <div className='max-w-2xl mx-auto text-center'>
                        <h2 className='text-3xl font-bold mb-4'>Stay Updated with Career Insights</h2>
                        <p className='text-gray-600 mb-8'>Get weekly updates on industry trends, job opportunities, and career development tips</p>
                        
                        <form className='flex gap-4 max-w-md mx-auto'>
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className='flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-violet-600'
                            />
                            <button className='px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-green-700 transition-colors'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsletterSignup
