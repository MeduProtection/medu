import Hero from '@/components/ourProducts/hero/Hero'
import OnlyMedical from '@/components/ourProducts/onlymedical/OnlyMedical'
import Coveralls from '@/components/ourProducts/Products/Coveralls'
import Gowns from '@/components/ourProducts/Products/Gowns'
import Protection from '@/components/ourProducts/protection/Protection'
import Surgical from '@/components/ourProducts/Products/Surgical'
import Head from 'next/head'
import React from 'react'

function OurProducts() {
  return (
    <>
    <Head>
  <meta name="theme-color" content="#FFFFF"/>
  <title>MEDU Protection.</title>
  <meta name="description" content="At MEDU Protection, we are committed to advancing healthcare safety with our state-of-the-art medical gowns and protective wear. Each piece is engineered for durability, offering up to 50 wash cycles without losing protective properties. This ensures that healthcare professionals can maintain the highest standards of hygiene and safety, repeatedly and cost-effectively." />
  <meta name="keywords" content="Medical gowns, Washable hospital gowns, Fluid-resistant gowns, ppe, anti cross-contamination, washable coverall, sustainable gowns, personal protective equipment" />
  <meta property="og:title" content="MEDU Protection" />
  <meta property="og:description" content="At MEDU Protection, we are committed to advancing healthcare safety with our state-of-the-art medical gowns and protective wear. Each piece is engineered for durability, offering up to 50 wash cycles without losing protective properties. This ensures that healthcare professionals can maintain the highest standards of hygiene and safety, repeatedly and cost-effectively." />
  <meta property="og:image" content="/assets/ogimage.jpg" />
  <meta property="og:url" content="https://www.meduprotection.com" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="/assets/ogimage.jpg" />
  <link rel="icon" href="favicon.ico" />
</Head>

    <div className="overflow-hidden">
      <Hero/>
      <OnlyMedical/>
      <Protection/>
      <Gowns/>
      <Coveralls/>
      <Surgical/>
      
    </div>
    </>
  )
}

export default OurProducts