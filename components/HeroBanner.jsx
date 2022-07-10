import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <h3 className="beats-solo">{heroBanner.smallText}</h3>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />
      </div>

      <div>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        <div className="desc">
          <h2>Description</h2>
          <h4>{heroBanner.desc}</h4>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner