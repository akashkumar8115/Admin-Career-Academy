import React from 'react'
import { academicData } from '../../data/academic'

const Academic = () => {
  return (
    <section className=' w-full sm:py-24 py-16 bg-black-200'>

    {/* ---------- container --------- */}

    <div className='w-11/12 lg:w-10/12 mx-auto ' >

    

      <div className='grid  xmd:grid-cols-4 grid-cols-2 gap-x-3 xs:gap-x-6 gap-y-6'>

        {
          academicData.map((item) => (
            <div key={item.id} style={{ backgroundColor: item.color }} className={`flex items-center gap-x-4 rounded-lg py-6 px-6  hover:-translate-y-2 transition-all duration-500
          
            `}>

              <div className='flex flex-col gap-y-4 w-[60%] justify-between'>
                  <p className='text-4xl'>
                    {
                        item.icon
                    }
                  </p>
                  <h2 className='xs:text-lg text-base font-semibold'>{item.title}</h2>
                

              </div>

            
            
              
            </div>
          ))
        }

      </div>


    </div>

  </section>
  )
}

export default Academic