import React from 'react'
import Heder from './Heder'

import AboutUs from './AboutUs'
import CountingSection from '../../Content/CountingSec'
import ClientSec from '../../Content/ClientSec'
import OurWorkingProcess from './OurWorkingProcess'
import GoalForToday from './GoalForToday'
import Members from './Slider/Member'

const whoWeAre = () => {
    return (
        <>
            <Heder />
            <AboutUs />
            <OurWorkingProcess />
            <CountingSection />
            <GoalForToday />
            <Members />
            <ClientSec />


        </>
    )
}

export default whoWeAre