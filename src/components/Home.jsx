import React from 'react'
import Products from './Products'

export default function Home() {
  return (
    <div className='home'>
        <div class="card text-bg-dark border-0">
  <img src="/assets/bg.jpg" class="card-img" alt="Background img" height="550x" />
  <div class="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    
    <h5 class="card-title display-3 fw-bolder mb-0">K-Mart by KhusuMasha</h5>
    <p class="card-text lead fs-2">HURRY UP OFFER CLOSES SOON !!</p>
    <h3 class="card-text">Upto 50% off on all latest brands !!</h3>


    </div>
  
  </div>
</div>
<Products />

    </div>
  )
}
