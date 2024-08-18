import React from 'react'
import Hero from '@/components/Industries/Hero'
import Features from '@/components/Industries/Features'
import Infection from '@/components/Industries/Infection'
import IndustriesComponent from '@/components/Industries/IndustriesComponent'
import Ready from '@/components/Industries/Ready'


function Industries() {
  return (
    <div>
        <Hero/>
        <Features/>
        <Infection/>
        <IndustriesComponent/>
        <Ready/>
    </div>
  )
}

export default Industries