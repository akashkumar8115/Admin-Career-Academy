import React from 'react'
import { Link } from 'react-router-dom'
import first from '../../assets/intern-jobs/intern-1.jpg'
import second from '../../assets/intern-jobs/intern-3.jpg'
import third from '../../assets/intern-jobs/intern-2.jpg'

import fourth from '../../assets/intern-jobs/job.jpg'

const internship = [
  {
    id: 1,
    title: "Paid",
    type: "paid",
    subtitle: "With recorded sessions ,live mentorship supports & certificate",
    image: first,

  },
  {
    id: 2,
    title: "Unpaid",
    type: "unpaid",
    subtitle: "Live project experience with certificate",
    image: second,
  },
  {
    id: 3,
    title: "Stipened Based Internship",
    type: "stipened",
    subtitle: "with certificate",
    image: third,
  },
  {
    id: 4,
    title: "Job",
    type: "job",
    subtitle: "Experienced join our team , freshers-Salary based opportunity",
    image: fourth,
  },
]

const InternshipType = () => {


  return (
    <section className=' '>

      {/* --------- container --------- */}

      <div className='w-10/12 mx-auto grid grid-cols-4 gap-x-8'>
        {
          internship.map((item) => (
            <Link to={`/internships-jobs/${item.type}`} key={item.id} className='flex flex-col gap-y-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105  hover:bg-green-200  relative shadow-lg '>

              <img src={item.image} alt="" className='w-full h-[200px]  object-cover rounded-lg ' />
              <div className='px-6 py-6'>
                <h2 className='text-xl font-semibold text-center'>{item.title}</h2>

                <p className='text-center'>({item.subtitle})</p>
              </div>



            </Link>
          ))
        }

      </div>

    </section>
  )
}

export default InternshipType