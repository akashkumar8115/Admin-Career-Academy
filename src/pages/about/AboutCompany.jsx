import React from 'react'
import Company from '../../components/about1/Company'
import MissionVision from '../../components/about1/MissionVision'
import Founder from '../../components/about1/Founder'
import Join from '../../components/about1/Join'
import MissionVisionDetails from '../../components/about1/MissionVisionDetails'
import FounderJourney from '../../components/about1/FounderJourney'

const AboutCompany = () => {
    return (
        <div >

            <Company />
            <MissionVision />
            <Founder/>
            <FounderJourney/>
            <Join/>
            <MissionVisionDetails/>


        </div>
    )
}

export default AboutCompany