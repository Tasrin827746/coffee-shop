import Hero from '@/components/About/Hero'
import MeetBaristas from '@/components/About/MeetBaristas'
import OurStory from '@/components/About/OurStory'
import OurValues from '@/components/About/OurValues'
import CustomerTestimonials from '@/components/About/WhyLovesUs'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero />
    <OurValues />
    <OurStory />
    <MeetBaristas />
    <CustomerTestimonials />
    </>
  )
}

export default page