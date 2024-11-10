import React from 'react'
import Shadab from '../../assets/abouts/Shadab.jpg'
import Manish from '../../assets/abouts/Manish.png'
import Manoj from '../../assets/abouts/Manoj.jpg'
import Akash from '../../assets/abouts/akash.jpg'
import Avinesh from '../../assets/abouts/Avinesh.jpg'
import Deepti from '../../assets/abouts/Deepti.jpg'
import Mushafiya from '../../assets/abouts/Mush.jpg'


const teamData = [
    {
        id : 1,
        name : "Mohd Shadab Ansari",
        image : Shadab,
        post : "Founder"
    },
    {
        id : 2,
        name : "Manish yadav",
        image : Manish,
        post : "Co-founder"
    },
    {
        id : 3,
        name : "Akash Kumar",
        image : Akash,
        post : "Technical Head"
    },
    {
        id : 4,
        name : "Deepti Mishra",
        image : Deepti,
        post : "Hr Manager"
    },
    {
        id : 5,
        name : "Avinesh Pratap Singh",
        image : Avinesh,
        post : "SDE"
    },
    {
        id : 6,
        name : "Manoj Kumar Mishra",
        image : Manoj,
        post : "Project Manager"
    },
    {
        id : 7,
        name : "Khan Mushafiya",
        image : Mushafiya,
        post : "Web Developer"
    },
    
]

const Team = () => {
    return (
        <section className="lg:py-24 xs:py-16 py-24 mt-24">

            <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col gap-y-12 ">


                <div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center "
                >
                    <h1 className="xmd:text-[42px] xs:text-4xl text-3xl font-semibold ">Meet Our Team</h1>

                </div>


                <div className='grid xlg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 xxl:gap-y-12 gap-y-8 xxl:gap-x-6 gap-x-4 '>

                    {
                        teamData.map((member) => (
                            <div
                            data-aos = {member.id % 2 === 0 ? "fade-up" : "fade-down"}
                             key={member.id} className='bg-violet-100  rounded-lg py-8 px-8 flex flex-col gap-y-6 items-center transition-all duration-300  hover:scale-105'>

                            <div className='xxl:w-[220px] xxl:h-[220px] xs:w-[180px] xs:h-[180px] w-[200px] h-[200px] '>
    
                                <img src={member.image} alt={member.name} className='w-full h-full object-cover rounded-md' />
    
                            </div>

                            {/* ------ info ------ */}

                            <div className='flex flex-col items-center gap-y-2'>

                                <h2 className='text-center xmd:text-xl text-lg font-semibold'>{member.name}</h2>
                                 <h3 className='text-green-700 font-semibold'>{member.post}</h3>

                            </div>

                            </div>
    

                        ))
                    }

                   
                  


                </div>





            </div>

        </section>
    )
}

export default Team