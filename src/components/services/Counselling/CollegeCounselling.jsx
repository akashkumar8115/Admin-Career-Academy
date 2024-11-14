import React from 'react'
import { Link } from 'react-router-dom'

const counsellingData = [
    {
        id : 1,
        title : "Engineering College",
        color : "#91aaff"
    },
    {
        id : 2,
        title : "Medical College",
        color : "#ff80c5"
    },
    {
        id : 3,
        title : "BBA / MBA",
        color : "#8aff9c",

    },
    {
        id : 4,
        title : "CUET UG/PG",
        color : "#c356ea",
    },
    {
        id : 5,
        title : "BCA / MCA",
        color : "#c356ea",
    },
    {
        id : 6,
        title : "NLU'S",
        color : "#8aff9c",
    },
    {
        id : 7,
        title : "Law College",
         color : "#ff80c5"
    },
    {
        id : 8,
        title : "Architecture",
         color : "#91aaff"
    },
    {
        id : 9,
        title : "GATE Counselling",
              color : "#91aaff"
    },
    {
        id : 10,
        title : "Defense Counselling",
         color : "#ff80c5"
    },
    {
        id : 11,
        title : "UITEE Counselling",
        color : "#8aff9c",
    },
    {
        id : 12,
        title : "BITSAT Counselling",
        color : "#c356ea",
    },
    {
        id : 13,
        title : "SRM JEE Counselling",
        color : "#c356ea",
    },

]

const CollegeCounselling = () => {
  return (
    <div className='grid grid-cols-4 gap-8 '> 
    {
        counsellingData.map((data) => (
            <Link key={data.id} style={{backgroundColor : data.color}} className=' h-[200px] flex items-center justify-center font-semibold text-xl rounded-lg trantion-all duration-300 hover:translate-y-[-10px] hover:shadow-lg'>
               {data.title}
            </Link>
        ))
    }

    </div>
  )
}

export default CollegeCounselling