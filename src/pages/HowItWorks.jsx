import Instructions from '@/components/HowItWorks/Instructions'
import AppDemo from '@/components/HowItWorks/AppDemo'
import React from 'react'
import Review from '@/components/HowItWorks/Review'

function HowItWorks() {
  return (
    <div>
        <Instructions />
        <AppDemo/>
        <Review/>
    </div>
  )
}

export default HowItWorks